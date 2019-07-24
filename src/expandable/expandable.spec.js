const {expect} = chai

describe('Expandable component', () => {
	let component
	beforeEach(() => {
		component = document.createElement('ul', {is: 'gjh-expandable'})
		document.querySelector('body').append(component)
	})

	it('should display a list of items', () => {
		component.list = ['item 1', 'item 2']

		expect(component.textContent).to.equals('item 1item 2')
	})
})
