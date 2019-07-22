const {expect} = chai

describe('CommitList component', () => {
	let component
	beforeEach(() => {
		const list = {
			'unassigned': [
				'First simple component with dev environment and tests',
			],
			'TEST-123': [
				'Created form-field component',
			],
		}

		component = document.createElement('gjh-commit-list')
		component.list = list
		document.querySelector('body').append(component)
	})

	describe('Initialization', () => {
		it('should display labels for the lists', () => {
			const listLabels = component.querySelectorAll('[data-test=list-label]')

			expect(listLabels[0].textContent).to.equals('unassigned')
			expect(listLabels[1].textContent).to.equals('TEST-123')
		})

		it('should display all commits in a list', () => {
			const commitList = component.querySelectorAll('[data-test=list-commits]')

			expect(commitList[0].textContent).to.equals('First simple component with dev environment and tests')
			expect(commitList[1].textContent).to.equals('Created form-field component')
		})
	})
})
