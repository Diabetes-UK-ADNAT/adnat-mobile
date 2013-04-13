Ext.define('adnat.model.LoginCredentials', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                id: 1,
                name: 'email',
                type: 'string'
            },
            {
                id: 2,
                name: 'password',
                type: 'string'
            }
        ],
        validations: [
            {
                type: 'presence',
                name: 'email',
                message: "Email missing"
            },
            {
                type: 'format',
                name: 'email',
                matcher: AppConstants.REGEX_EMAIL,
                message: "Email format"
            },
            {
                type: 'presence',
                name: 'password',
                message: "Password missing"
            }
        ],
        proxy: {
            type: 'rest',
//            url: 'https://auth.myadnat.co.uk/login' //PROD
            url: 'https://auth.myadnat.co.uk:4443/login' //DEV
        }
    }
});

