Ext.define("adnat.view.Welcome", {
    extend: 'Ext.form.Panel',
    xtype: 'welcome',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Email',
        'Ext.field.Password'
    ],
    config: {
        title: 'Welcome',
        iconCls: 'home',
        styleHtmlContent: true,
        scrollable: true,
        items: [
            {
                html: [
                    "<div class=\"centered\">",
                    "<h1>Welcome to ADNAT</h1>",
                    "<img src=\"./resources/images/adnatpic4.1.png\"/>",
                    "<img src=\"./resources/images/adnatpic3.png\"/>",
                    "<img src=\"./resources/images/adnatpic4.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ADNAT'
            },
            {
                xtype: 'fieldset',
                title: 'ADNAT Login',
                instructions: 'Login to take ADNAT',
                items: [
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
            },
            {
                xtype: 'button',
                text: 'Login',
                ui: 'action',
                handler: function() {
                    Ext.Viewport.setActiveItem(Ext.create('adnat.view.ServerUnavailable'));
                    //Ext.Viewport.setActiveItem(Ext.create('adnat.view.Results'));
                    //Question page: Ext.getCmp('mainTabPanel').setActiveItem(1);
                    //Ext.getCmp('mainTabPanel').setActiveItem(1);
                    //
                    // login and get tokens setup


//                    var contactRequest = Ext.ModelMgr.create(this.up('panel').getValues(), 'adnat.model.ContactRequest');
//                    var errors = contactRequest.validate();
//                    if (errors.isValid()) {
//                        if (window.navigator.onLine) {
//                            contactRequest.save();
//                            this.up('panel').reset();
//                            Ext.Msg.alert("Thank You", "Thank you, we will contact you within 24 hours. <br><b>If you are having an emergency, please contact your doctor or the emergency room.</b>");
//                        } else {
//                            Ext.Msg.alert(
//                                    "Internet Connection Required",
//                                    "You are not online, please get an internet connection working and try to send your message again"
//                                    );
//                        }
//                    } else {
//                        console.log(errors);
//                        var data = "";
//                        errors.each(function(item, index, length) {
//                            data = data + item.getMessage() + '<br>';
//                        });
//                        Ext.Msg.alert("Please check your information", data);
//                    }
//                }
            }
            }
        ]
    }
});
