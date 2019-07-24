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
}

declareWebComponent(Expandable)
