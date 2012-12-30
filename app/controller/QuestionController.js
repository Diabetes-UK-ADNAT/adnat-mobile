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
        this.on('swipe', this.onSwipe);
        this.getQuestion().on('swipe', this.onSwipe);
    },
	onQuestionsStoreLoad : function() {
		//console.log('onQuestionsStoreLoad');
        var s = Ext.getStore('Questions');
		//s.info();
		this.showQuestion(0,0);
    },
    onSwipe: function (event) {
		 if (event.direction == 'right') {
			 this.nextPage();
		 } else if (event.direction == 'left') {
			 this.prevPage();
		 }
    },
	showQuestion: function(newO,direction) {
		var q = getNextQuestion(newO, direction);
		setTitle(this,q);
		setQuestion(this.getQuestionComponent(), q);
		// find previous response if it exists and put on question
		// fixme ordinal == break if new version of questions
		var s = Ext.getStore('Responses');
		s.load();
		var r = s.findRecord('q', q.get('id'));
		if ( r != null ) {
			r.set('ordinal', q.get('ordinal'));
			this.getQuestion().setRecord(r);
		} else {
			q.set('q', q.get('id'));
			this.getQuestion().setRecord(q);
		}
		this.getQuestion().getScrollable().getScroller().scrollTo(0,0,false)
	},

    prevPage: function(){
		// fixme validate 
		r = Ext.create('adnat.model.Response', this.getQuestion().getValues() );
		Ext.getStore('Responses').saveResponse(r);
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
		Ext.getStore('Responses').saveResponse(r);
		this.showQuestion( r.get('ordinal') + 1, 1 ); 
		//
		//put on util page / for logout also
		//Ext.getStore('Responses').deleteAllRecords();
	},
});
