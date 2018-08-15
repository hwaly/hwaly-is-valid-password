const Validate = (_ => {
    const _defaultsOptions = {
        rules: {
            valid: '',
            equals: '',
            required: true,
            message: '',
            useAlert: true,
            useText: false,
            onFocus: true
        },
        message: {

        },
        regex: {
            numeric: /^[0-9]+$/,
            lower: /^[a-z]+$/,
            upper: /^[A-Z]+$/,
            email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            tel: /^\d{2,3}-\d{3,4}-\d{4}$/
        }
    };
    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

    const _defaults = Symbol('defaults');
    const _elements = Symbol('elements');
    const _rules = Symbol('rules');

    return class {
        constructor() {
            this[_defaults] = _defaultsOptions;
            this[_elements] = {
                form: document
            };
            this[_rules] = [];
        }

        _findElements(name) {
            if (!this[_elements][name]) {
                const formElements = Array.from(this[_elements]['form'].querySelectorAll(`[name="${name}"]`));

                this[_elements][name] = formElements;
            }

            return this[_elements][name];
        }

        _isEmpty(name) {
            const isValue = this[_elements][name].some(element => {
                switch (element.type) {
                    case 'radio':
                    case 'checkbox':
                        return element.checked;

                    default:
                        return element.value.trim();
                }
            });

            return !isValue;
        }

        _isChecked(name) {
            return this[_elements][name]
        }

        getElements(name) {
            return this[_elements][name];
        }

        setForm(form) {
            this[_elements]['form'] = document.querySelector(form);
        }

        getForm() {
            return this[_elements]['form'];
        }

        addRule(name, rule) {
            // console.log(rule);
            console.log(this[_defaults].rules);
            // Object.assign({}, rule);


            this._findElements(name);
            this[_rules].push(rule);
        }

        modifyRule(index, name, rule) {

        }

        removeRule(name) {
            delete this[_elements][name];
        }

        clearRule() {
            this[_rules] = [];
        }

        getRules() {
            return this[_rules];
        }

        validate() {

        }
    }
})();