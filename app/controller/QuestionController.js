Ext.define('adnat.controller.QuestionController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
		},
        refs: {
			question: '#questionPanel',
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
		var f = this.getQuestion();
		f.setRecord(q);
	},

	nextPage: function(){
		//store
        var s = Ext.getStore('Questions');
		var q = s.getAt(2);
		//view
		//title = q.get('text'); or use template?
		//console.log(f.getRecord());
		var f = this.getQuestion();
		f.removeAll();

		/*
		var response = '{ success: true, data: [ ' +
			'{xtype: "textfield", name: "ordinal", value: "'+ q.get('ordinal') +'"}, ' +
			'{xtype: "textfield", name: "text", value: "'+ q.get('text') +'"}, ' +
			'{xtype: "textfield", name: "options", value: "'+ q.get('options') +'"}, ' +
			 '] }' ;
		 */

		var response = '{ success: true, data: [ ' +
			'{xtype: "textfield", name: "ordinal",}, ' +
			'{xtype: "textfield", name: "text", }, ' +
			'{xtype: "textfield", name: "options",}, ' +
			 '] }' ;
		f.add(Ext.decode(response).data);


		// find previous response if it exists and put on question
		f.setRecord(q);
	},
});
