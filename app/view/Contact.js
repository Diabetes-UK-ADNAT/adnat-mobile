Ext.define("adnat.view.Contact", {
    extend: 'Ext.Panel',
    xtype: 'contact',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        id: 'contact',
        title: 'Contact',
        iconCls: 'reply',
        styleHtmlContent: true,
        scrollable: true,
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
                        label: 'Name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email'

                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'action',
                handler: function() {
                    //post a model to an URL using rest proxy and JSON (2nd time through posts and gets 201, need to init proxy?)
                    Ext.regModel('Faq', {
                        fields: ['question', 'answer'],
                        proxy: {
                            type: 'rest',
                            url: 'https://api.myadnat.co.uk:4443/v1/faqs.json'
                        }
                    });
                    var f = Ext.ModelMgr.create({question: 'Ed Spencer', answer: 'ed@sencha.com'}, 'Faq');
//                    f = Ext.create('Faq', {
//                        question: 'my question',
//                        answer: 'my answer'
//                    });

                    f.save();



                    //Ext.Viewport.setActiveItem(Ext.create('adnat.view.ServerUnavailable'));
                    //this.up('formpanel').submit();



//                    // works on dev w/ hosts file
//                    var form = Ext.create('Ext.form.Panel', {
//                        items: [
//                            {
//                                xtype: 'textfield',
//                                name: 'zipnote',
//                                label: 'Name',
//                                value: 'this is the value'
//                            }
//                        ]
//                    });
//                    form.submit({
//                        url: 'https://api.myadnat.co.uk:4443/v1/faqs.json',
//                        method: "POST",
//                        success: function() {
//                            alert("ok");
//                        },
//                        failure: function() {
//                            alert("fail");
//                        }
//                    });
//                    
//                    
//       

////working jsonp request
//  Ext.data.JsonP.request({
//        url: 'http://free.worldweatheronline.com/feed/weather.ashx',
//        callbackKey: 'callback',
//        params: {
//            key: '23f6a0ab24185952101705',
//            q: '94301', // Palo Alto
//            format: 'json',
//            num_of_days: 5
//        },
//        success: function(result) {
//           log(result);
//        }
//    });


////post a model to an URL using rest proxy and JSON (2nd time through posts and gets 201, need to init proxy?)
//Ext.regModel('Faq', {
//    fields: ['question', 'answer'],
//
//    proxy: {
//        type: 'rest',
//        url : 'https://api.myadnat.co.uk:4443/v1/faqs.json'
//    }
//});
//var f = Ext.ModelMgr.create({question: 'Ed Spencer', answer: 'ed@sencha.com'}, 'Faq');
//
//f.save(); //POST /users


//   appears to work minus json on server (form submit/form binding)
//                    Ext.Ajax.request({
//                        url: 'https://api.myadnat.co.uk:4443/v1/faqs.json',
//                        callbackKey: 'callback',
//                        method: 'POST',
//                        //withCredentials: true,
//                        //useDefaultXhrHeader: false,
//                        standardSubmit: true,
//                        params: {
//                            myformval: 'here you go, here is the data'
//                        },
//                        success: function(result) {
//                            log(result);
//                        },
//                        failure: function() {
//                            log('fail');
//                        }
//                    });

/////////////////////////////////
                }
            }
        ]
    }
});
