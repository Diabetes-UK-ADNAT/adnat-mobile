Ext.define("adnat.view.Contact", {
    extend: 'Ext.form.Panel',
    xtype: 'contact',
    requires: [
        'Ext.TitleBar',
        'adnat.model.ContactRequest'
    ],
    config: {
        id: 'contact',
        title: 'Contact',
        iconCls: 'reply',
        styleHtmlContent: true,
        scrollable: true,
        defaults: {
            required: true
        },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Contact ADNAT'
            },
            {
                xtype: 'fieldset',
                title: 'Contact ADNAT Support',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email'

                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message',
                        name: 'message'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'action',
                handler: function() {
                    var contactRequest = Ext.ModelMgr.create(this.up('panel').getValues(), 'adnat.model.ContactRequest');
                    var errors = contactRequest.validate();
                    if (errors.isValid()) {
                        contactRequest.save();
                        this.up('panel').reset();
                        Ext.Msg.alert("Thank You", "Thank you, we will contact you within 24 hours. <br><b>If you are having an emergency, please contact your doctor or the emergency room.</b>");
                    } else {
                        console.log(errors);
                        var data = "";
                        errors.each(function(item, index, length) {
                            // Each item in the errors collection is an instance of the Ext.data.Error class.
                            //data = data + '|' + item.getField() + ' - ' + item.getMessage() + '|';
                            data = data + item.getMessage() + '<br>';
                        });
                        Ext.Msg.alert("Please check your information", data);
                    }
                }
            }
        ]
    }
});
