Ext.define('adnat.model.ScoreConfig', {
    extend: 'Ext.data.Model',
    config: {
		idProperty: 'q',
        fields: [
            {
				id: 1,
                name: 'q',
                type: 'int',
            },
            {
				id: 2,
                name: 'area',
                type: 'string', 
            },
            {
				id: 3,
                name: 'scoreType',
                type: 'string', 
            },
            {
				id: 4,
                name: 'avals',
                type: 'auto', 
            },
            {
				id: 5,
                name: 'tally',
                type: 'int',
            },
        ],
    }
});

