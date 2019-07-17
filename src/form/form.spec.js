describe('Form component', () => {
    let component
    beforeEach(() => {
        component = document.createElement('gjh-form')
        document.querySelector('body').append(component)
    });

    describe('Initialization', () => {
        it('should display a field to fill github api', () => {
            const githubApiField = component.querySelector('gjh-form-field')

            expect(githubApiField.getAttribute('label')).to.equals('Github API URL')
        });
    });
});