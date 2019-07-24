const {expect} = chai

describe('HeadedList component', () => {
	let component
	beforeEach(() => {
		component = document.createElement('div', {is: 'gjh-headed-list'})
		document.querySelector('body').append(component)
	})

	it('should display the header label', () => {
		component.head = 'Some title'

		const head = component.querySelector('[data-test=head]')
		expect(head.textContent).to.equals('Some title')
	})

	it('should display an expandable list', () => {
		const list = component.querySelector('[data-test=list]')

		expect(list.getAttribute('is')).to.equals('gjh-expandable')
	})

	it('should allow to update the list of item displayed', () => {
		component.list = ['item 1']
		const list = component.querySelector('[data-test=list]')

		expect(list.textContent).to.equals('item 1')
	})

	it('should hide the list when the head is clicked', () => {
		component.head = 'Some title'
		component.list = ['item 1']
		const head = component.querySelector('[data-test=head]')
		const list = component.querySelector('[data-test=list]')

		head.click()

		expect(list.getAttribute('hide')).to.equals('hidden')
	})

	it('should re-show the list when the head is clicked twice', () => {
		component.head = 'Some title'
		component.list = ['item 1']
		const head = component.querySelector('[data-test=head]')
		const list = component.querySelector('[data-test=list]')

		head.click()
		head.click()

		expect(list.getAttribute('hide')).to.equals('')
	})
})
