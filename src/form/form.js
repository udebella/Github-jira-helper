import {declareWebComponent} from '../utils.js'
import '../form-field/form-field.js'

class Form extends HTMLElement {
    static get tagName() {
        return 'gjh-form'
    }
    connectedCallback() {
        this.innerHTML = `<gjh-form-field label="Github API URL"/>`
    }
}

declareWebComponent(Form)