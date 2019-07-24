const {expect} = chai

describe('Expandable component', () => {
	let component
	beforeEach(() => {
		component = document.createElement('ul', {is: 'gjh-expandable'})
		component.list = ['item 1', 'item 2']
		document.querySelector('body').append(component)
	})

	it('should display a list of items', () => {
		expect(component.textContent).to.equals('item 1item 2')
	})

	it('should allow to hide the list', () => {
		component.hide = true

		expect(component.style.display).to.equals('none')
	})

	it('should remove style attribute when the component is re-shown', () => {
		component.hide = true
		component.hide = false

		expect(component.style.display).to.equals('')
	})
})
