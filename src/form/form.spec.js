describe('Form component', () => {
    let component
    beforeEach(() => {
        component = document.createElement('gjh-form')
        document.querySelector('body').append(component)
    });

    describe('Initialization', () => {
        it('should display a field to fill github api', () => {
            const githubApiField = component.querySelector('[data-test=api-url]')

            expect(githubApiField.getAttribute('label')).to.equals('Github API URL')
        });

        it('should display a field to fill project name', () => {
            const projectName = component.querySelector('[data-test=projectName]')

            expect(projectName.getAttribute('label')).to.equals('Project name')
        });
    });
});