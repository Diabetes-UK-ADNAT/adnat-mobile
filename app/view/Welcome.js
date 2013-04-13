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
                width: '350px',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'ADNAT Login',
                        instructions: 'Login to take ADNAT',
                        width: '350px',
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
                        width: '350px',
                        text: 'Login',
                        ui: 'action',
                        handler: function() {
//

                            Ext.Ajax.request({
                                url: 'https://auth.myadnat.co.uk:4443/login',
                                actionMethods: 'POST',
                                async: false,
                                params: {
                                    email: 'email@example.com',
                                    password: 'mypassword'
                                },
                                success: function(response, opts) {
                                    console.log(response);
                                    console.log(opts);
                                    //welcome text
                                    alert('Login OK');
                                    //Ext.Viewport.setActiveItem(Ext.create('adnat.view.WelcomeLoggedIn'));
                                },
                                failure: function(response, opts) {
                                    console.log(response);
                                    console.log(opts);
                                    alert('Login Failed');
                                }
                            });
//Working how to handle resposne values
//                    var loginCredentials = Ext.ModelMgr.create(this.up('panel').getValues(), 'adnat.model.LoginCredentials');
//                    var errors = loginCredentials.validate();
//                    if (errors.isValid()) {
//                        if (window.navigator.onLine) {
//                            loginCredentials.save();
//                            this.up('panel').reset();
//                            // if valid, get cookie token and show welcome panel
//                            Ext.Msg.alert("show welcome view panel");
//                            //  else alert try again
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
                        }
                    }
                ]
            }
        ]
    }
});
