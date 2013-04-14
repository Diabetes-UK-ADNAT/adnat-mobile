Ext.define('adnat.model.ContactRequest', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                id: 1,
                name: 'name',
                type: 'string'
            },
            {
                id: 2,
                name: 'email',
                type: 'string'
            },
            {
                id: 3,
                name: 'message',
                type: 'string'
            },
            {
                id: 4,
                name: 'userToken',
                type: 'string'
            }
        ],
        validations: [
            {
                type: 'presence',
                name: 'name',
                message: "Name missing"
            },
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
                name: 'message',
                message: "Message missing"
            }
        ],
        proxy: {
            type: 'rest',
            url: AppUrl.contact()
        }
    }
});

