Ext.define("adnat.view.WelcomeLoggedIn", {
    extend: 'Ext.Panel',
    xtype: 'welcomeloggedin',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        title: 'Server Unavailable',
        iconCls: 'home',
        styleHtmlContent: true,
        scrollable: true,
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
                html: [
                    "<div class=\"centered\">",
                    "<h1>Welcome</h1>",
                    "<p>",
                    "Logged in directions here",
                    "</p>",
                   "<p>",
                    "Logged in directions here",
                    "</p>",
                   "<p>",
                    "Logged in directions here",
                    "</p>",
                   "<p>",
                    "Logged in directions here",
                    "</p>",
                    "</div>"
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
