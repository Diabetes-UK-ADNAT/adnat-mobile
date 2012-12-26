Ext.define('adnat.controller.QuestionController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
		},
        refs: {
			question: '#question',
			prevButton: '#prevButton',
			nextButton: '#nextButton',
        },
        control: {
			prevButton: {
				tap: "prevPage"
			},
			nextButton: {
				tap: "nextPage"
			},
        },
    },
    launch: function() {
        Ext.getStore('Questions').load({
            callback: this.onQuestionsStoreLoad,
            scope: this
        });
    },
	onQuestionsStoreLoad : function() {
		console.log('onQuestionsStoreLoad');
        var q = Ext.getStore('Questions').getAt(0);
		console.log(q);
    },
	prevPage: function(){
		//adnatAlert();
		getQuestion1(this.getQuestion());
	},
	nextPage: function(){
		//utilAlert();
		getQuestion2(this.getQuestion());
	},
});