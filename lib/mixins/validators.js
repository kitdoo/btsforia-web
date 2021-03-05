import validator from 'validator';

export const mixinPasswordValidator = {
    methods: {
        passwordValidator(rule, value, callback) {
            let errors = [];
            let number = false, lower = false, upper = false;
            if (value) {
                for (let i = 0; i < value.length; i++) {
                    switch (true) {
                        case /^[0-9]+$/.test(value[i]):
                            number = true;
                            break;
                        case /^[a-z]*$/.test(value[i]):
                            lower = true;
                            break;
                        case /^[A-Z]*$/.test(value[i]):
                            upper = true;
                            break;
                    }
                }
                if (value.length < 8 || !(number && lower && upper)) {
                    errors.push('Пароль должен содержать буквы латинского алфавита в верхнем и нижнем регистре, цифры, а также быть не короче 8 символов');
                }
            }
            callback(errors);
        }
    },
};

export const mixinShortNameValidator = {
    methods: {
        shortNameValidator(rule, value, callback) {
            let errors = [];
            if (!value || (value && (value.length < 3 || value.length > 255))) {
                errors.push('Название должно быть в дапозоне 4 - 255 символов');
            }
            callback(errors);
        }
    },
};

export const mixinEmailValidator = {
    methods: {
        emailValidator(rule, value, callback) {
            let errors = [];
            if (!value || !validator.isEmail(value)) {
                errors.push('Неверный формат электронной почты');
            }
            callback(errors);
        },
        emailNotRequiredValidator(rule, value, callback) {
            let errors = [];
            if (value && !validator.isEmail(value)) {
                errors.push('Неверный формат электронной почты');
            }
            callback(errors);
        }
    },
};

export const mixinPhoneValidator = {
    methods: {
        phoneValidator(rule, value, callback) {
            let errors = [];
            if (!value || !value.match('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')) {
                errors.push('Неверный формат номера телефона');
            }
            callback(errors);
        },
        phoneNotRequiredValidator(rule, value, callback) {
            let errors = [];
            if (value && !value.match('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')) {
                errors.push('Неверный формат номера телефона');
            }
            callback(errors);
        },
    },
};

export const mixinEmailOrPhoneValidator = {
    methods: {
        emailOrPhoneValidator(rule, value, callback) {
            let errors = [];
            if (!value) {
                errors.push('Укажите электронную почту или телефон');
            } else if (value && (!validator.isEmail(value) && !value.match('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'))) {
                errors.push('Неверный формат электронной почты или телефона');
            }
            callback(errors);
        },
    },
};

export const mixinUserNameValidator = {
    methods: {
        nameValidator(rule, value, callback) {
            let errors = [];
            if (_.isEmpty(value)) {
                errors.push('Имя должно быть в дапозоне 2 - 50 символов, и содержать только буквы');
            }
            callback(errors);
        }
    },
};

export const mixinUserLastNameValidator = {
    methods: {
        lastNameValidator(rule, value, callback) {
            let errors = [];
            if (_.isEmpty(value)) {
                errors.push('Фамилия должна быть в дапозоне 3 - 50 символов, и содержать только буквы');
            }
            callback(errors);
        }
    },
};
