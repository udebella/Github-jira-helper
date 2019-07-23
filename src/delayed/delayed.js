import {declareWebComponent} from '../utils.js'

class Delayed extends HTMLInputElement {
	static get tagName() {
		return 'gjh-delayed'
	}

	static get extends() {
		return 'input'
	}

	connectedCallback() {
		this.addEventListener('input', () => {
			clearTimeout(this.timeout)
			this.timeout = setTimeout(() => {
				const event = new MessageEvent('delayed-input', {data : this.value, bubbles: true})
				this.dispatchEvent(event)
			}, 1000)
		})
	}
}

// if (!customElements.get(Delayed.tagName)) {
// 	customElements.define(Delayed.tagName, Delayed, {
// 		extends: 'input',
// 	})
// }
declareWebComponent(Delayed)
