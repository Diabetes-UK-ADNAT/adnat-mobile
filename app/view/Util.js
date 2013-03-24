Ext.define("adnat.view.Util", {
    extend: 'Ext.Panel',
    xtype: 'util',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        id: 'util',
        title: 'Utility',
        iconCls: 'info',
        styleHtmlContent: true,
        scrollable: true,
        /*
         
         listeners: {
         show: function() {
         adnat.app.getController('UtilController').update(event);
         },
         painted: function() {
         adnat.app.getController('UtilController').update(event);
         },
         hide: function() {
         }
         },
         */
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Utility'
            },
            {
                xtype: 'button',
                margin: '40px',
                text: 'Show Information',
                ui: 'normal',
                handler: function() {
                    var online =
                            'The application is in <i>'
                            + (window.navigator.onLine ? "online" : "offline")
                            + '</i> mode.'
                            ;

                    var lastSyncedMessage = null;
                    var ls = AppSettings.getLastSynced();
                    if (ls === null) {
                        lastSyncedMessage = 'Has not been synced to server';
                    } else {
                        lsDate = new Date();
                        lsDate.setTime(ls);
                        lastSyncedMessage = 'Last synced to server on <br>' + lsDate.toISOString();
                    }

                    var lastUpdatedMessage = null;
                    var lu = AppSettings.getLastUpdated();
                    if (lu === null) {
                        lastUpdatedMessage = 'Has no last updated response';
                    } else {
                                      luDate = new Date();
                        luDate.setTime(lu);
                        lastUpdatedMessage = 'Last assessment response on <br>' + luDate.toISOString();
                    }

                    Ext.Msg.alert("Information",
                            online
                            + "<p>"
                            + 'Current date and time is <br>' + new Date().toISOString()
                            + "<p>"
                            + lastSyncedMessage
                            + "<p>"
                            + lastUpdatedMessage
                            );
                }
            },
            {
                xtype: 'button',
                margin: '40px',
                text: 'Sync to Server Now',
                ui: 'normal',
                handler: function() {
                    Ext.Viewport.mask({xtype: 'loadmask', indicator: false, message: 'Submitting...'});
                    score();
                    var task = Ext.create('Ext.util.DelayedTask', function() {
                        var gs = getGeneralScore();
                        var ps = getPsychScore();
                        postAssessment(ps, gs, true); //force to send regardless of state.  anytime after scoring is _really_ done
                        Ext.Viewport.unmask();
                    });
                    task.delay(1900);
                }
            }, {
                xtype: 'button',
                margin: '40px',
                text: 'Delete All of My Responses',
                ui: 'decline',
                handler: function() {
                    Ext.Msg.confirm(
                            "Confirmation", "Are you sure you want to delete all of your answers? <br><i>This action can not be undone</i>",
                            function(answer) {
                                if (answer === 'yes') {
                                    Ext.getStore('Responses').deleteAllRecords();
                                    AppSettings.clearLastUpdated();
                                    location.reload();
                                }
                            }
                    );
                }
            },
            {
                xtype: 'button',
                margin: '40px',
                text: 'Reset Application',
                ui: 'decline',
                handler: function() {
                    Ext.Msg.confirm(
                            "Confirmation", "Are you sure you want to delete all of your data and logout? <br><i>This action can not be undone</i>",
                            function(answer) {
                                if (answer === 'yes') {
                                    window.localStorage.clear()
                                    location.reload();
                                }
                            }
                    );
                }
            },
            {
                xtype: 'button',
                margin: '40px',
                text: 'Logout',
                ui: 'normal',
                handler: function() {
                    Ext.Msg.confirm(
                            "Confirmation", "Would you like to logout of the ADNAT application?",
                            function(answer) {
                                if (answer === 'yes') {
                                    window.localStorage.clear()
                                    location.reload();
                                }
                            }
                    );
                }
            }

        ]
    }
});
