Ext.define('adnat.model.QuestionOnline', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [
            {
                id: 1,
                name: 'id',
                type: 'int'
            },
            {
                id: 2,
                name: 'ordinal',
                type: 'int'
            },
            {
                id: 3,
                name: 'type',
                type: 'string'
            },
            {
                id: 4,
                name: 'text',
                type: 'string'
            },
            {
                id: 5,
                name: 'options',
                type: 'auto'
            },
            {
                id: 6,
                name: 'required',
                type: 'int'
            },
            {
                id: 7,
                name: 'category',
                type: 'string'
            },
            {
                id: 8,
                name: 'info',
                type: 'string'
            },
            {
                id: 9,
                name: 'skip',
                type: 'string'
            },
            {
                id: 10,
                name: 'feedback',
                type: 'string'
            }
        ]
//        proxy: {
//            type: 'localstorage',
//            id: 'adnat-questions'
//        }

    }
});

