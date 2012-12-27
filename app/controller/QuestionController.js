Ext.define('adnat.controller.QuestionController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
		},
        refs: {
			question: '#questionPanel',
			title: '#title',
			questionComponent: '#questionComponent',
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
	/*
	launch: function() {
        Ext.getStore('Questions').load({
            callback: this.onQuestionsStoreLoad,
            scope: this
        });
    },
	onQuestionsStoreLoad : function() {
		console.log('onQuestionsStoreLoad');
        var s = Ext.getStore('Questions');
		s.info();
    },
	*/
    prevPage: function(){
		//store
        var s = Ext.getStore('Questions');
		var q = s.getAt(1);
		//view
		this.getTitle().setHtml(q.get('text'));

		var f = this.getQuestionComponent();
		f.removeAll();
		var response = '{ success: true, data: [ ' +
			'{xtype: "textfield", name: "ordinal",}, ' +
			'{xtype: "textfield", name: "options",}, ' +
			  '] }' ;
		f.add(Ext.decode(response).data);
		// find previous response if it exists and put on question
		this.getQuestion().setRecord(q);
	},

	nextPage: function(){
		//store
        var s = Ext.getStore('Questions');
		var q = s.getAt(2);
		//view
		this.getTitle().setHtml(q.get('text'));

		var f = this.getQuestionComponent();
		f.removeAll();
		var response = '{ success: true, data: [ ' +
			'{xtype: "textfield", name: "ordinal",}, ' +
			'{xtype: "textfield", name: "options",}, ' +
			  '] }' ;
		f.add(Ext.decode(response).data);

		// find previous response if it exists and put on question
		this.getQuestion().setRecord(q);
	},
});
