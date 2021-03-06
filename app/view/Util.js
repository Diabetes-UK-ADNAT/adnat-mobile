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
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ADNAT Utilities'
            },
            {
                id: 'utilbuttons',
                xtype: 'panel',
                maxWidth: '350px',
                items: [
                    {
                        xtype: 'button',
                        margin: '30 0 0 0px',
                        text: 'Submit My Survey Now',
                        ui: 'action',
                        handler: function() {
                            Ext.Viewport.mask({xtype: 'loadmask', indicator: false, message: 'Submitting...'});
                            score(function() {
                                var gs = getGeneralScore();
                                var ps = getPsychScore();
                                postAssessment(ps, gs, true); //force to send regardless of state.  anytime after scoring is _really_ done
                                Ext.Msg.alert("Submit Survey", '<p>Your survey was submitted successfully. <br>' + new Date().toISOString());
                                Ext.Viewport.unmask();
                            });
                        }
                    },
                    {
                        html: [
                            "<div class=\"centered\">",
                            "Submit your survey to the ADNAT site for review.",
                            "</div>"
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        margin: '30 0 0 0px',
                        text: 'Show Information',
                        ui: 'action',
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
                                    + "<p>"
                                    + AppAuth.getToken()
                                    );

                        }
                    },
                    {
                        html: [
                            "<div class=\"centered\">",
                            "Show system information for technical support.",
                            "</div>"
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        margin: '30 0 0 0px',
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
                        html: [
                            "<div class=\"centered\">",
                            "Delete all of your answers and start the the survey over.",
                            "</div>"
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        margin: '30 0 0 0px',
                        text: 'Logout',
                        ui: 'decline',
                        handler: function() {
                            Ext.Msg.confirm(
                                    "Confirmation", "Are you sure you want to delete all of your data and logout? <br><i>This action can not be undone</i>",
                                    function(answer) {
                                        if (answer === 'yes') {
                                            window.localStorage.clear();
                                            location.reload();
                                        }
                                    }
                            );
                        }
                    },
                    {
                        html: [
                            "<div class=\"centered\">",
                            "Clear all data from the device, logout and reset the application.",
                            "</div>"
                        ].join("")
                    }
                ]
            }
        ]
    }
});
