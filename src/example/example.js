import {declareWebComponent} from '../utils.js'
import '../text/text.js'

class Example extends HTMLElement {
    static get tagName() {
        return 'gjh-example'
    }

    connectedCallback() {
        this.innerHTML = `<gjh-text></gjh-text>`
    }
}

declareWebComponent(Example)