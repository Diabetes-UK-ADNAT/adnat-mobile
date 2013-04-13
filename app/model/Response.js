Ext.define('adnat.model.Response', {
    extend: 'Ext.data.Model',
    config: {
        requires: [
            'Ext.data.proxy.LocalStorage',
            'Ext.data.identifier.Uuid'
        ],
        idProperty: 'id',
        identifier: {
            type: 'uuid',
            prefix: ''
        },
        fields: [
            {
                id: 1,
                name: 'q',
                type: 'int'
            },
            {
                id: 2,
                name: 'options',
                type: 'auto'
            },
            {
                id: 3,
                name: 'ordinal',
                type: 'int'
            },
            {
                id: 4,
                name: 'other',
                type: 'auto'
            },
            {
                id: 5,
                name: 'required',
                type: 'int',
                persist: false
            },
            {
                id: 6,
                name: 'category',
                type: 'auto'
            },
            {
                id: 7,
                name: 'text',
                type: 'auto'
            },
            {
                id: 8,
                name: 'optionsText',
                type: 'auto'
            },
            {
                id: 9,
                name: 'type',
                type: 'auto'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'adnat-responses'
        }
    }
});

