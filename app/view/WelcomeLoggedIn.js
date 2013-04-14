Ext.define("adnat.view.WelcomeLoggedIn", {
    extend: 'Ext.Panel',
    xtype: 'welcomeloggedin',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        title: 'Welcome',
        iconCls: 'home',
        styleHtmlContent: true,
        scrollable: true,
        listeners: {
            show: function() {
                adnat.app.getController('WelcomeLoggedInController').onShow(event);
            },
            hide: function() {
            }
        },
        items: [
            {
                html: [
                    "<div class=\"centered\">",
                    "<img src=\"./resources/images/adnatpic3.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ADNAT'
            },
            {
                id: 'userName',
                cls: 'centered'
            },
            {
                cls: 'centered',
                html: [
                    "<p>",
                    "Start with the ADNAT tab, and complete all of the questions.",
                    "</p>",
                    "<p>",
                    "You will be able to view your results on the My Results tab once you have completed all of the questions.",
                    "</p>",
                    "<p>",
                    "The Utility tab has options to submit your ADNAT assessment, clear your responses and log out.",
                    "</p>"
                ].join("")
            },
            {
                html: [
                    "<div class=\"centered\">",
                    "<img src=\"./resources/images/adnatpic4.1.png\"/>",
                    "<img src=\"./resources/images/adnatpic4.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                xtype: 'spacer',
                height: '20px'
            }
        ]
    }
});
