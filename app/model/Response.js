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
                type: 'auto',
            },
            {
				id: 3,
                name: 'ordinal',
                type: 'int', 
				persist: false
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
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'adnat-responses'
        }
    }
});

