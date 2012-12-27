Ext.define('adnat.model.Question', {
    extend: 'Ext.data.Model',
    config: {
		idProperty: 'id',
        fields: [
            {
				id: 1,
                name: 'ordinal',
                type: 'int',
            },
            {
				id: 2,
                name: 'type',
                type: 'string',
            },
            {
				id: 3,
                name: 'text',
                type: 'string',
            },
            {
				id: 4,
                name: 'options',
                type: 'string', //json?
            },
        ],
        proxy: {
            type: 'localstorage',
            id: 'questions-local'
        }
    }
});

