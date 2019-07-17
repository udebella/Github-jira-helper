import {declareWebComponent} from '../utils.js'
import '../form-field/form-field.js'

class Form extends HTMLElement {
    static get tagName() {
        return 'gjh-form'
    }
    connectedCallback() {
        this.innerHTML = `
            <gjh-form-field data-test="api-url" label="Github API URL"></gjh-form-field>
            <gjh-form-field data-test="projectName" label="Project name"></gjh-form-field>`
    }
}

declareWebComponent(Form)