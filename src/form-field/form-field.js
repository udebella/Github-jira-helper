import {declareWebComponent} from '../utils.js'
import '../delayed-input/delayed-input.js'

class FormField extends HTMLElement {
	static get tagName() {
		return 'gjh-form-field'
	}

	get label() {
		return this.getAttribute('label')
	}

	connectedCallback() {
		this.innerHTML = `
			<label>${this.label}</label>
			<gjh-delayed-input></gjh-delayed-input>`
	}
}

declareWebComponent(FormField)
