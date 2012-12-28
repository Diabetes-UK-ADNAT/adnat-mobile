Ext.define('adnat.model.Response', {
    extend: 'Ext.data.Model',
    config: {
		idProperty: 'id',
		identifier: {
			type: 'uuid',
			prefix: '',
		},
        fields: [
            {
				id: 1,
                name: 'q',
                type: 'int',
            },
            {
				id: 2,
                name: 'options',
                type: 'auto', 
            },
            {
				id: 3,
                name: 'ordinal',
                type: 'int', 
				persist: false,
            },
        ],
        proxy: {
            type: 'localstorage',
            id: 'adnat-responses'
        }
    }
});

