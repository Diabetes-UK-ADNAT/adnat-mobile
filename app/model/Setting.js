Ext.define('adnat.model.Setting', {
    extend: 'Ext.data.Model',
    config: {
        requires: [
            'Ext.data.proxy.LocalStorage',
            'Ext.data.identifier.Uuid'
        ],
        identifier: {
            type: 'uuid',
            prefix: ''
        },
        idProperty: 'id',
        fields: [
            {
                id: 1,
                name: 'name',
                type: 'int'
            },
            {
                id: 2,
                name: 'value',
                type: 'string'
            },
        ],
        proxy: {
            type: 'localstorage',
            id: 'adnat-settings'
        }
    }
});

