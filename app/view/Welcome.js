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
            pack: 'top'
        },
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
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    pack: 'top'
                },
                items: [
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
                            var loginCredentials = Ext.ModelMgr.create(this.up('panel').up('panel').getValues(), 'adnat.model.LoginCredentials');
                            var errors = loginCredentials.validate();
                            if (true || errors.isValid()) {
                                if (window.navigator.onLine) {
                                    Ext.Viewport.mask({xtype: 'loadmask', indicator: false, message: 'Logging in...'});
                                    Ext.Ajax.request({
                                        url: AppUrl.login(),
                                        actionMethods: 'POST',
                                        async: false,
                                        params: {
                                            email: loginCredentials.get('email'),
                                            password: loginCredentials.get('password')
                                        },
                                        success: function(response, opts) {
                                            log(response);
                                            log(opts);
                                            Ext.Viewport.unmask();
                                            adnat.app.getController('QuestionController').initMainView();
                                        },
                                        failure: function(response, opts) {
                                            log(response);
                                            log(opts);
                                            Ext.Viewport.unmask();
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
