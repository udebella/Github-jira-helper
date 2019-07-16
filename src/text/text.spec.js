describe('Text component', () => {
    let component
    beforeEach(() => {
        component = document.createElement('gjh-text')
        document.querySelector('body').append(component)
    });

    it('should work', () => {
        expect(component.textContent).to.equals('displays text')
    });
});