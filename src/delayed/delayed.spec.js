const {useFakeTimers} = sinon
const {expect} = chai

describe('Delayed component', () => {
	let component, clock
	beforeEach(() => {
		component = document.createElement('input', {is: 'gjh-delayed'})
		document.querySelector('body').append(component)
		clock = useFakeTimers()
	})

	afterEach(() => {
		clock.restore()
	})

	describe('Handling input data', () => {
		it('should not send event directly after input update', () => {
			const stub = sinon.stub()
			component.addEventListener('delayed-input', stub)

			component.value = 'input text'
			component.dispatchEvent(new Event('input'))

			expect(stub).not.to.have.been.called
		})

		it('should send event 1 sec after input update', (done) => {
			component.addEventListener('delayed-input', ({data}) => {
				expect(data).to.equal('input text')
				done()
			})

			component.value = 'input text'
			component.dispatchEvent(new Event('input'))
			clock.tick(1000)
		})

		it('should send event only once', () => {
			const stub = sinon.stub()
			component.addEventListener('delayed-input', stub)

			component.value = 'input text'
			component.dispatchEvent(new Event('input'))
			clock.tick(500)
			component.value = 'another text'
			component.dispatchEvent(new Event('input'))
			clock.tick(1000)

			expect(stub).to.have.been.calledOnce
		})
	})
})
