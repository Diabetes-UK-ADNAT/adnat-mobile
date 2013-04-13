Ext.define("adnat.view.Question", {
    extend: 'Ext.form.Panel',
    xtype: 'question',
    requires: [
        'Ext.TitleBar',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Radio',
        'Ext.field.Hidden',
        'Ext.field.Spinner',
        'Ext.data.proxy.JsonP'
    ],
    config: {
        id: 'questionPanel', // works with refs to enable this.getQuestion()
        title: 'ADNAT',
        iconCls: 'compose',
        styleHtmlContent: true,
        scrollable: true,
        listeners: {
            swipe: {
                fn: function(event) {
                    adnat.app.getController('QuestionController').onSwipe(event);
                },
                element: 'innerElement'
            }
        },
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ADNAT Questions'
            },
            {
                id: 'progressbar',
                docked: 'top',
                xtype: 'panel',
                items: [
                    {
                        id: 'indicator',
                        html: null
                    }
                    //{
                    //id: 'progressnum',
                    //padding: '1.0em',
                    //html: null,
                    //},
                ]
            },
            {
                xtype: 'panel',
                maxWidth: '600px',
                items: [
                    {
                        id: 'morefeedback',
                        padding: '0em',
                        html: null
                    },
                    {
                        id: 'feedback',
                        padding: '0em',
                        html: null
                    },
                    {
                        id: 'title',
                        padding: '1.2em',
                        html: null,
                    },
                    {
                        xtype: 'fieldset',
                        id: 'questionComponent',
                        items: [
                            {xtype: 'textfield', name: 'text'},
                            {xtype: 'textfield', name: 'ordinal'},
                            {xtype: 'textfield', name: 'options'}
                        ]
                    },
                    {
                        layout: 'hbox',
                        pack: 'center',
                        items: [
                            {xtype: 'spacer'},
                            {
                                xtype: 'button',
                                text: 'Prev',
                                id: 'prevButton',
                                ui: 'normal',
                                disabled: false,
                                width: '100px'
                            },
                            {xtype: 'spacer'},
                            {
                                xtype: 'button',
                                text: 'Next',
                                id: 'nextButton',
                                ui: 'action',
                                width: '100px'
                            },
                            {xtype: 'spacer'}
                        ]
                    }
                ]
            }
        ]
    }
});
