import {mock} from './mock.js'
const {expect} = chai

describe('Form component', () => {
	let component, fetch
	beforeEach(() => {
		fetch = sinon.stub()
		component = document.createElement('gjh-form')
		component.fetch = fetch
		document.querySelector('body').append(component)
	})

	describe('Initialization', () => {
		it('should display a field to fill github api', () => {
			const githubApiField = component.querySelector('[data-test=api-url]')

			expect(githubApiField.getAttribute('label')).to.equals('Github API URL')
		})

		it('should display a field to fill project name', () => {
			const projectName = component.querySelector('[data-test=project-name]')

			expect(projectName.getAttribute('label')).to.equals('Project name')
		})

		it('should display a field to fill commit hash', () => {
			const commitHash = component.querySelector('[data-test=commit-hash]')

			expect(commitHash.getAttribute('label')).to.equals('Commit hash')
		})

		it('should display the commit list', () => {
			const commitList = component.querySelector('[data-test=commit-list]')

			expect(commitList).to.exist
		})
	})

	describe('Retrieve jiras', () => {
		beforeEach(() => {
			fetch.returns(Promise.resolve({json: () => Promise.resolve(mock)}))
		})

		it('should do nothing while all field are not filled', async () => {
			const projectName = component.querySelector('[data-test=project-name]')
			component.setJiras = sinon.stub()

			projectName.dispatchEvent(new MessageEvent('delayed-input', {data: 'project name'}))
			await new Promise(setTimeout)

			expect(component.setJiras).not.to.have.been.called
		})

		it('should update jiras when every field is filled', async () => {
			const apiUrl = component.querySelector('[data-test=api-url]')
			const projectName = component.querySelector('[data-test=project-name]')
			const commitHash = component.querySelector('[data-test=commit-hash]')
			component.setJiras = sinon.stub()

			apiUrl.dispatchEvent(new MessageEvent('delayed-input', {data: 'https://api.github.com'}))
			projectName.dispatchEvent(new MessageEvent('delayed-input', {data: 'udebella/Github-dashboard'}))
			commitHash.dispatchEvent(new MessageEvent('delayed-input', {data: 'e667110abb874b1757cad67bb08f84f9bb69394f'}))
			await new Promise(setTimeout)

			expect(component.setJiras).to.have.been.calledWith({
				unassigned: ['Update dependencies'],
			})
		})
	})
})
