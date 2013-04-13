Ext.define('adnat.model.AssessmentResponse', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'q'
            },
            {
                name: 'type'
            },
            {
                name: 'ordinal'
            },            {
                name: 'other'
            },
            {
                name: 'category'
            },
            {
                name: 'text'
            },
            {
                name: 'optionsText'
            }
        ]
    }
});

