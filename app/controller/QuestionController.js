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
		this.showQuestion(0);
    },

	showQuestion: function(newO) {
        var s = Ext.getStore('Questions');
		if ( newO < 0 ) {
			newO = s.getCount() - 1;
		} else if ( newO > s.getCount() - 1) {
			newO = 0;
		}
		var q = s.getAt(newO);

		setTitle(this,q);
		setQuestion(this.getQuestionComponent(), q);
		// find previous response if it exists and put on question
		this.getQuestion().setRecord(q);
	},

    prevPage: function(){
		m = Ext.create('adnat.model.Question', this.getQuestion().getValues() );
		this.showQuestion( m.get('ordinal') - 1 ); 
	},

	nextPage: function(){
		// form data
		m = Ext.create('adnat.model.Question', this.getQuestion().getValues() );
	    this.showQuestion(m.get('ordinal') + 1);
	},
});
