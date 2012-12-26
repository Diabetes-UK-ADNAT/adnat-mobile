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
        var s = Ext.getStore('Questions');
		s.test();
		console.log(s.getAt(0));
		console.log(s.getCount());
		console.log(s.getTotalCount());
		console.log(s.getData());
		var a = s.getData();
		for (var i=0; i<a.length; i++) {
			console.log(a[i]);
		}
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
