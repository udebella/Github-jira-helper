const {useFakeTimers} = sinon

describe('FormField component', () => {
    let component
    beforeEach(() => {
        component = document.createElement('gjh-form-field')
        component.setAttribute('label', 'this is an example')
        document.querySelector('body').append(component)
    });

    describe('Initialization', () => {
        it('should display a delayed input', () => {
            expect(component.querySelector('gjh-delayed-input')).to.exist
        });

        it('should display a label for the delayed input component', () => {
            const label = component.querySelector('label');
            expect(label).to.exist
            expect(label.textContent).to.equals('this is an example')
        });
    });

    describe('Notifying parents components', () => {
        let clock
        beforeEach(() => {
            clock = useFakeTimers()
        });

        afterEach(() => {
            clock.restore()
        })

        it('should bubble delayed input events', () => {
            const input = component.querySelector('input')
            const stub = sinon.stub();
            component.addEventListener('textEntered', stub)

            input.value = 'input text'
            input.dispatchEvent(new Event('input', {bubbles: true}))
            clock.tick(1000)

            expect(stub).to.have.been.called
        });
    });
});