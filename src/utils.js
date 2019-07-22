export function declareWebComponent(customElementClass) {
	const {tagName} = customElementClass
	if (!customElements.get(tagName)) {
		customElements.define(tagName, customElementClass)
	}
}