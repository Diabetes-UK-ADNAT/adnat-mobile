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
		this.nextPage(); //fixme current question
    },
    prevPage: function(){
        var s = Ext.getStore('Questions');
		m = Ext.create('adnat.model.Question', this.getQuestion().getValues() );
	    var newO = m.get('ordinal') - 1;
		if ( newO < 0 ) newO = s.getCount() - 1;
		//store
		var q = s.getAt(newO);
		//
		//view
		setTitle(this,q);


		var f = this.getQuestionComponent();
		f.removeAll();
		var response = buildQuestion(q);
		f.add(Ext.decode(response).data);
		// find previous response if it exists and put on question
		this.getQuestion().setRecord(q);
	},

	nextPage: function(){
		// form data
		m = Ext.create('adnat.model.Question', this.getQuestion().getValues() );

		// next question
	    var newO = m.get('ordinal') + 1;
		if ( newO > 4 ) newO = 0;
		
		//store
        var s = Ext.getStore('Questions');
		var q = s.getAt(newO);

		// view 
		//set the question text
		setTitle(this,q);

		// view build question
		var f = this.getQuestionComponent();
		f.removeAll();

		var response = buildQuestion(q);
		// put on the form
		f.add(Ext.decode(response).data);
		// find previous response if it exists and put on question
		this.getQuestion().setRecord(q);
	},
});
