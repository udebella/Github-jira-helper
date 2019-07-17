import {declareWebComponent} from '../utils.js'

class DelayedInput extends HTMLElement {
    static get tagName() {
        return 'gjh-delayed-input'
    }

    get value() {
        return this._input.value
    }

    set input(element) {
        this._input = element
        let timeout
        this._input.addEventListener('input', () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                this.dispatchEvent(new MessageEvent('textEntered', {data : this.value}))
            }, 1000)
        })
    }

    connectedCallback() {
        this.innerHTML = `<input type="text"/>`
        this.input = this.querySelector('input');
    }
}

declareWebComponent(DelayedInput)