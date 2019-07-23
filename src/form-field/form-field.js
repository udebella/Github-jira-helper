import {declareWebComponent} from '../utils.js'
import '../delayed/delayed.js'

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
			<input is="gjh-delayed" type="text">`
	}
}

declareWebComponent(FormField)
