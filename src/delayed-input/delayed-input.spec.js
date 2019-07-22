const {useFakeTimers} = sinon
const {expect} = chai

describe('DelayedInput component', () => {
	let component, clock
	beforeEach(() => {
		component = document.createElement('gjh-delayed-input')
		document.querySelector('body').append(component)
		clock = useFakeTimers()
	})

	afterEach(() => {
		clock.restore()
	})

	describe('Initialization', () => {
		it('should display an input text', () => {
			const input = component.querySelector('input')

			expect(input.type).to.equal('text')
		})
	})

	describe('Handling input data', () => {
		it('should not send event directly after input update', () => {
			const stub = sinon.stub()
			component.addEventListener('textEntered', stub)

			const input = component.querySelector('input')
			input.value = 'input text'
			input.dispatchEvent(new Event('input', {bubbles: true}))

			expect(stub).not.to.have.been.called
		})

		it('should send event 1 sec after input update', () => {
			component.addEventListener('textEntered', ({data}) => {
				expect(data).to.equal('input text')
			})

			const input = component.querySelector('input')
			input.value = 'input text'
			input.dispatchEvent(new Event('input', {bubbles: true}))
			clock.tick(1000)
		})

		it('should send event only once', () => {
			const stub = sinon.stub()
			component.addEventListener('textEntered', stub)

			const input = component.querySelector('input')
			input.value = 'input text'
			input.dispatchEvent(new Event('input', {bubbles: true}))
			clock.tick(500)
			input.value = 'another text'
			input.dispatchEvent(new Event('input', {bubbles: true}))
			clock.tick(1000)

			expect(stub).to.have.been.calledOnce
		})
	})
})
