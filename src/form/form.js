import {declareWebComponent} from '../utils.js'
import '../form-field/form-field.js'
import '../commit-list/commit-list.js'

const setJiras = element => jiras => {
	element.list = jiras
}

class Form extends HTMLElement {
	static get tagName() {
		return 'gjh-form'
	}

	constructor() {
		super()
		this.fetch = fetch
	}

	set apiUrl(element) {
		element.addEventListener('delayed-input', ({data}) => {
			this._apiUrl = data
			this.computeList()
		})
	}

	set projectName(element) {
		element.addEventListener('delayed-input', ({data}) => {
			this._projectName = data
			this.computeList()
		})
	}

	set commitHash(element) {
		element.addEventListener('delayed-input', ({data}) => {
			this._commitHash = data
			this.computeList()
		})
	}

	async computeList() {
		if (this._apiUrl && this._projectName && this._commitHash) {
			this.setJiras(await this.fetchJiras())
		}
	}

	async fetchJiras() {
		const url = (project, commit) => `${this._apiUrl}/repos/${project}/compare/${commit}...HEAD`

		const extractJiras = message => {
			const result = /([A-Z]+-[0-9]+)/.exec(message)
			return result ? result[0] : 'unassigned'
		}

		const response = await this.fetch.apply(window, [url(this._projectName, this._commitHash)])
		const {commits} = await response.json()
		return commits
			.map(({commit}) => commit)
			.map(({message}) => message)
			.reduce((acc, next) => {
				const jira = extractJiras(next)
				acc[jira] = [...(acc[jira] || []), next]
				return acc
			}, {})
	}

	connectedCallback() {
		this.innerHTML = `
			<gjh-form-field data-test="api-url" label="Github API URL"></gjh-form-field>
			<gjh-form-field data-test="project-name" label="Project name"></gjh-form-field>
			<gjh-form-field data-test="commit-hash" label="Commit hash"></gjh-form-field>
			<gjh-commit-list data-test="commit-list"></gjh-commit-list>`
		this.apiUrl = this.querySelector('[data-test=api-url]')
		this.projectName = this.querySelector('[data-test=project-name]')
		this.commitHash = this.querySelector('[data-test=commit-hash]')
		this.setJiras = setJiras(this.querySelector('[data-test=commit-list]'))
	}
}

declareWebComponent(Form)
