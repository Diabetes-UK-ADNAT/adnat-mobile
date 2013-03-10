Ext.define('adnat.model.Setting', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [
            {
                id: 1,
                name: 'name',
                type: 'string'
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

