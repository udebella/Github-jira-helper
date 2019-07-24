import {declareWebComponent} from '../utils.js'

class Expandable extends HTMLUListElement {
	static get tagName() {
		return 'gjh-expandable'
	}

	static get extends() {
		return 'ul'
	}

	set list(list) {
		this.innerHTML = list
			.map(text => `<li>${text}</li>`)
			.reduce((acc, next) => acc + next)
	}

	set hide(hideValue) {
		this.style.display = hideValue ? 'none' : ''
	}
}

declareWebComponent(Expandable)
