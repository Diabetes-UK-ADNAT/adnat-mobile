Ext.define('adnat.model.Response', {
    extend: 'Ext.data.Model',
    config: {
		idProperty: 'id',
        fields: [
            {
				id: 1,
                name: 'ordinal',
                type: 'int',
				isUnique: true,
            },
            {
				id: 2,
                name: 'options',
                type: 'auto', 
            },
        ],
        proxy: {
            type: 'localstorage',
            id: 'adnat-responses'
        }
    }
});

