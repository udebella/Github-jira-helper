class Text extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>displays text</p>`
    }
}

window.customElements.define('gjh-text', Text)