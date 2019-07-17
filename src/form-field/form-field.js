import {declareWebComponent} from '../utils.js'
import '../delayed-input/delayed-input.js'

class FormField extends HTMLElement {
    static get tagName() {
        return 'gjh-form-field'
    }
    connectedCallback() {
        this.innerHTML = `<gjh-delayed-input></gjh-delayed-input>`
    }
}

declareWebComponent(FormField)