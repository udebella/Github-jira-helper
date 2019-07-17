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
            const projectName = component.querySelector('[data-test=project-name]')

            expect(projectName.getAttribute('label')).to.equals('Project name')
        });

        it('should display a field to fill commit hash', () => {
            const commitHash = component.querySelector('[data-test=commit-hash]')

            expect(commitHash.getAttribute('label')).to.equals('Commit hash')
        });
    });
});