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
                type: 'string',
            }
        ],
        validations: [
            {
                type: 'presence',
                name: 'name',
                message: "Enter name"
            },
            {
                type: 'presence',
                name: 'email',
                message: "Enter email"
            },
            {
                type: 'format',
                name: 'email',
                matcher: /^[a-zA-Z0-9\._\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$/,
                message: "Wrong email Format"
            },
            {
                type: 'presence',
                name: 'message',
                message: "Please enter a message"
            },
        ],
        proxy: {
            type: 'rest',
            url: 'https://api.myadnat.co.uk:4443/v1/contactrequests.json'
        }
    }
});

