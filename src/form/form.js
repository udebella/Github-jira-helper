import {declareWebComponent} from '../utils.js'
import '../form-field/form-field.js'

class Form extends HTMLElement {
    static get tagName() {
        return 'gjh-form'
    }

    set apiUrl(element) {
        element.addEventListener('textEntered', ({data}) => {
            this._apiUrl = data
            this.computeJiras()
        })
    }

    set projectName(element) {
        element.addEventListener('textEntered', ({data}) => {
            this._projectName = data
            this.computeJiras()
        })
    }

    set commitHash(element) {
        element.addEventListener('textEntered', ({data}) => {
            this._commitHash = data
            this.computeJiras()
        })
    }

    set jirasResults(jiras) {
        this._jiraResults.textContent = jiras
    }

    computeJiras() {
        if (this._apiUrl && this._projectName && this._commitHash) {
            this.needToBeTested()
        }
    }

    async needToBeTested() {
        const url = (project, commit) => `${this._apiUrl}/repos/${project}/compare/${commit}...HEAD`

        const extractJiras = message => {
            const result = /([A-Z]*-[0-9]*)/.exec(message)
            return result ? result[0] : 'unassigned'
        }

        const response = await fetch(url(this._projectName, this._commitHash))
        const {commits} = await response.json()
        const result = commits
            .map(({commit}) => commit)
            .map(({message}) => message)
            .reduce((acc, next) => {
                const jira = extractJiras(next)
                acc[jira] = [...(acc[jira] || []), next]
                return acc
            }, {})
        this.jirasResults = JSON.stringify(result)
    }

    connectedCallback() {
        this.innerHTML = `
            <gjh-form-field data-test="api-url" label="Github API URL"></gjh-form-field>
            <gjh-form-field data-test="project-name" label="Project name"></gjh-form-field>
            <gjh-form-field data-test="commit-hash" label="Commit hash"></gjh-form-field>
            <pre></pre>`
        this.apiUrl = this.querySelector('[data-test=api-url]')
        this.projectName = this.querySelector('[data-test=project-name]')
        this.commitHash = this.querySelector('[data-test=commit-hash]')
        this._jiraResults = this.querySelector('pre')
    }
}

declareWebComponent(Form)