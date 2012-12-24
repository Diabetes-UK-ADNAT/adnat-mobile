Ext.define('adnat.controller.PageController', {
	
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'page/:id': 'doPage',
		},
        refs: {
			survey: '#survey',
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
        Ext.getStore('Pages').load({
            callback: this.onPagesStoreLoad,
            scope: this
        });
    },
	onPagesStoreLoad : function() {
		console.log('onPagesStoreLoad');
        //var m = Ext.getStore('Pages').getAt(0);
    },

	doPage : function(id) {
		console.log('doPage #' + id);
		this.test(id);
	},

	prevPage: function(){
		adnatAlert();
	},
	nextPage: function(){
		utilAlert();
	},

	/*
			{
				id: 'test',
                xtype: 'fieldset',
                title: 'Page One',
                items: [
                    {
						xtype: 'numberfield',
						name: 'age',
						label: 'Age',
						minValue: 1,
						maxValue: 99,
                    },
				]
			},
*/
	
	test : function( id ) {
		console.log('test #' + id);
		var f = this.getSurvey();
		f.removeAll();
		var response = 
		"{ success: true, data: [ " +
		"{ id: 'test', xtype: 'fieldset', title: 'Page One', items: [ ";
		for ( var i = 0; i < id; i++ ) {
			response += "{ xtype: 'numberfield', name: 'q-" + i + "', label: 'Age', minValue: 1, maxValue: 99, }, ";
		}
		response += " ] },";
		response += "] }" ;
		f.add(Ext.decode(response).data);
	},
	testWorks : function( id ) {
		console.log('test #' + id);
		var f = this.getSurvey();
		f.removeAll();
		var response = '{ success: true, data: [ ' +
			'{xtype: "help", name: "helpme"}, ' +
			'{xtype: "textfield", title: "label1", name: "tf1"}, ' +
			'] }' 
			;
		f.add(Ext.decode(response).data);
	},
	test4 : function( id ) {
		console.log('test #' + id);
		var f = this.getSurvey();
		var response = '{ success: true, data: [ ' +
			'xtype: "fieldset", title: "Page One", items: [ {' +
			'{xtype: "textfield", title: "label1", name: "textfield1"}, {xtype: "textfield", title: "label2", name: "textfield2"}, {xtype: "textfield", title: "label3", name: "textfield3"} ' +
			'] }' +
			'] }' 
			;
		f.add(Ext.decode(response).data);
	},
	test2 : function( id ) {
		//nope
		console.log('test #' + id);
		var form = Ext.create('Ext.form.Panel', {
			fullscreen: true,
			items: [
				{
					xtype: 'textfield',
					name: 'name',
					label: 'Name'
				},
				{
					xtype: 'emailfield',
					name: 'email',
					label: 'Email'
				},
				{
					xtype: 'passwordfield',
					name: 'password',
					label: 'Password'
				}
			]
		});
		form.doLayout();
		//Ext.Viewport.add(form);
		this.getSurvey().add(form);
	},
	test1 : function( id ) {
		console.log('test #' + id);
		// based on page id, fill in the correct questions on the page
		// remove what's there (have a container panel?)
		// add new to a panel
		// add that
		this.getSurvey().remove(test); // should be nested panel?
		//destroy?
		var form = Ext.create('Ext.form.Panel', {
			id: 'test',
			fullscreen: true,
			items: [
				{
					xtype: 'textfield',
					name: 'name',
					label: 'Name'
				},
				{
					xtype: 'emailfield',
					name: 'email',
					label: 'Email'
				},
				{
					xtype: 'passwordfield',
					name: 'password',
					label: 'Password'
				}
			]
		});
		form.doLayout();
		this.getSurvey().add(form);
	},
	test0 : function( id ) {
		console.log('test #' + id);
		// based on page id, fill in the correct questions on the page
		var f = this.getSurvey();
		var response = '{ success: true, data: [ {xtype: "textfield", title: "label1", name: "textfield1"}, {xtype: "textfield", title: "label2", name: "textfield2"}, {xtype: "textfield", title: "label3", name: "textfield3"} ] }';
		f.add(Ext.decode(response).data);
	},
		
});
