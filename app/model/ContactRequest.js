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
                matcher: REGEX_EMAIL,
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
            url: 'http://172.16.1.35:9000/v1/contactrequests.json'
//            url: 'https://api.myadnat.co.uk/v1/contactrequests.json'
        }
    }
});

