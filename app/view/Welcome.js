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
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                maxWidth: '300px',
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
                xtype: 'panel',
                maxWidth: '350px',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'ADNAT Login',
                        instructions: 'Login to take ADNAT',
                        maxWidth: '350px',
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
                        maxWidth: '350px',
                        text: 'Login',
                        ui: 'action',
                        handler: function() {
                            var loginCredentials = Ext.ModelMgr.create(this.up('panel').up('panel').getValues(), 'adnat.model.LoginCredentials');
                            var errors = loginCredentials.validate();
                            if (errors.isValid()) {
                                if (window.navigator.onLine) {
                                    Ext.Ajax.request({
                                        url: AppUrl.login(),
                                        actionMethods: 'POST',
                                        async: false,
                                        params: {
                                            email: 'email@example.com',
                                            password: 'mypassword'
                                        },
                                        success: function(response, opts) {
                                            log(response);
                                            log(opts);
                                            //welcome text
                                            //Ext.Viewport.setActiveItem(Ext.create('adnat.view.WelcomeLoggedIn'));
                                        },
                                        failure: function(response, opts) {
                                            log(response);
                                            log(opts);
                                            Ext.Msg.alert("Thank You", "Thank you, we will contact you within 24 hours. <br><b>If you are having an emergency, please contact your doctor or the emergency room.</b>");
                                        }
                                    });
                                    this.up('panel').up('panel').reset();
                                } else {
                                    Ext.Msg.alert(
                                            "Internet Connection Required",
                                            "You are not online, please get an internet connection working and try to send your message again"
                                            );
                                }
                            } else {
                                log(errors);
                                var data = "";
                                errors.each(function(item, index, length) {
                                    data = data + item.getMessage() + '<br>';
                                });
                                Ext.Msg.alert("Please check your information", data);
                            }
                        }
                    }
                ]
            }
        ]
    }
});
