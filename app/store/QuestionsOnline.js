Ext.define('adnat.store.QuestionsOnline', {
    extend: 'Ext.data.Store',
    requires: ['adnat.model.QuestionOnline'],
    config: {
        model: 'adnat.model.QuestionOnline',
        proxy: {
            type: 'ajax',
            url: 'resources/data/questions.json',
            reader: {
                type: 'json',
                rootProperty: 'questions',
                totalCount: 'total'
            }
        },
        listeners: {
            load: function() {
                var qs = Ext.getStore('Questions');
                qs.getProxy().clear();
                this.each(function(record) {
                    Ext.create('adnat.model.Question', record.data).save();
                });
                qs.sync();
            }
        },
        autoLoad: false,
        sorters: [
            {
                property: 'ordinal',
                direction: 'ASC'
            }
        ]
    },
    info: function() {
        console.log("Question Store info");
        console.log(this.getTotalCount());
        /*
         console.log(this.getAt(0));
         console.log(this.getCount());
         console.log(this.getData());
         var a = this.getData();
         for (var i=0; i<a.length; i++) {
         console.log(a[i]);
         }
         */
    }
});
