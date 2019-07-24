import {declareWebComponent} from '../utils.js'
import '../expandable/expandable.js'

class HeadedList extends HTMLDivElement {
	static get tagName() {
		return 'gjh-headed-list'
	}

	static get extends() {
		return 'div'
	}

	set head(headLabel) {
		this.querySelector('[data-test=head]').textContent = headLabel
	}

	set list(list) {
		this.querySelector('[data-test=list]').list = list
	}

	connectedCallback() {
		this.innerHTML = `<span data-test='head'></span>
			<ul data-test="list" is="gjh-expandable"></ul>`

		const list = this.querySelector('[data-test=list]')
		this.querySelector('[data-test=head]').addEventListener('click', () => {
			const hideValue = list.getAttribute('hide') ? '' : 'hidden'
			list.setAttribute('hide', hideValue)
		})
	}
}

declareWebComponent(HeadedList)
