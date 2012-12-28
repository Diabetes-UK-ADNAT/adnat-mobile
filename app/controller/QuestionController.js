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
		//console.log('onQuestionsStoreLoad');
        var s = Ext.getStore('Questions');
		//s.info();
		this.showQuestion(0,0);
    },

	showQuestion: function(newO,direction) {
		var q = getNextQuestion(newO, direction);
		setTitle(this,q);
		setQuestion(this.getQuestionComponent(), q);
		// find previous response if it exists and put on question
		// fixme ordinal == break if new version of questions
		var s = Ext.getStore('Responses');
		s.load();
		var r = s.findRecord('ordinal', q.get('ordinal'));
		if ( r != null ) {
			this.getQuestion().setRecord(r);
		} else {
			this.getQuestion().setRecord(q);
		}
	},

    prevPage: function(){
		// fixme validate 
		r = Ext.create('adnat.model.Response', this.getQuestion().getValues() );
		saveResponse(r);
		this.showQuestion( r.get('ordinal') - 1, -1 ); 
        /*
		 * var errors = r.validate();
        if (!errors.isValid()) {
            Ext.Msg.alert('validation');
			console.log('m valid? ', errors.isValid()); // returns 'false' as there were validation errors
			console.log('All Errors:', errors.items); // returns the array of all errors found on this model instance
			console.log('Field One Errors:', errors.getByField('fieldone')); // returns the errors for the age field
            r.reject();
            return;
        }
		*/
	},

	nextPage: function(){
		// fixme validate 
		r = Ext.create('adnat.model.Response', this.getQuestion().getValues() );
		saveResponse(r);
		this.showQuestion( r.get('ordinal') + 1, 1 ); 
	},
});
