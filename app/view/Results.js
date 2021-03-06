Ext.define("adnat.view.Results", {
    extend: 'Ext.Panel',
    xtype: 'results',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        id: 'results',
        title: 'My Results',
        iconCls: 'star',
        styleHtmlContent: true,
        scrollable: true,
        listeners: {
            show: function() {
                adnat.app.getController('ResultsController').onShow(event);
            },
            hide: function() {
            }
        },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'My Results'
            },
            {
                id: 'resultsTitle',
                html: [
                    "<div id=\"results\">",
                    "<h1 style='font-size:2em;'>My ADNAT Results</h1>",
                    "</div>"
                ].join("")
            },
            {
                id: 'noScore',
                html: [
                    "<div id=\"results\"  style='font-size:1.2em;width: 60%; margin-top: 40px;'>",
                    "Please complete all questions so we may score your ADNAT survey.",
                    "</div>"
                ].join("")
            },
            {
                id: 'gScoreRed',
                html: [
                    "<div id=\"results\">",
                    "<img src=\"./resources/images/tl-red.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                id: 'gScoreYellow',
                html: [
                    "<div id=\"results\">",
                    "<img src=\"./resources/images/tl-yellow.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                id: 'gScoreGreen',
                html: [
                    "<div id=\"results\">",
                    "<img src=\"./resources/images/tl-green.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                id: 'gScore',
                padding: '1.0em',
                html: null
            },
            {
                id: 'pScoreRed',
                html: [
                    "<div id=\"results\">",
                    "<img src=\"./resources/images/tl-red.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                id: 'pScoreYellow',
                html: [
                    "<div id=\"results\">",
                    "<img src=\"./resources/images/tl-yellow.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                id: 'pScoreGreen',
                html: [
                    "<div id=\"results\">",
                    "<img src=\"./resources/images/tl-green.png\"/>",
                    "</div>"
                ].join("")
            },
            {
                id: 'pScore',
                padding: '1.0em',
                html: null
            },
            {
                id: 'submittedDate',
                padding: '1.0em',
                html: null
            }
        ]
    }
});
