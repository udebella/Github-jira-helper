import {declareWebComponent} from '../utils.js'

class Text extends HTMLElement {
    static get tagName() {
        return 'gjh-text'
    }
    connectedCallback() {
        this.innerHTML = `<p>displays text</p>`
    }
}

declareWebComponent(Text)