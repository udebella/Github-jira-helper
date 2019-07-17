module.exports = plop => {
    plop.setGenerator('Component', {
        description: 'Component directory',
        prompts: [{
            type: 'input',
            name: 'componentName',
            message: 'What is the component name?',
        }],
        actions: [{
            type: 'add',
            path: 'src/{{dashCase componentName}}/{{dashCase componentName}}.js',
            templateFile: 'plop-templates/component/script.hbs',
        }, {
            type: 'add',
            path: 'src/{{dashCase componentName}}/{{dashCase componentName}}.spec.js',
            templateFile: 'plop-templates/component/test.hbs',
        }],
    })
}