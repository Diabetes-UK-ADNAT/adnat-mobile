Ext.define('adnat.model.Page', {
    extend: 'Ext.data.Model',

    config: {
		idProperty: 'id',
		
        fields: [
            {
				id: 1,
                name: 'fieldone',
                type: 'string'
            },
            {
				id: 2,
                name: 'fieldtwo',
                type: 'int'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'pages-local'
        }
    }
});

