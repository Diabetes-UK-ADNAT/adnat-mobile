/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'adnat': 'app'
});
//</debug>

Ext.application({
    name: 'adnat',

    requires: [
        'Ext.MessageBox'
    ],
    models: [
        'Question',
        'QuestionOnline',
        'Response',
        'ScoreConfig',
        'AssessmentResponse',
        'ContactRequest',
        'Setting'
    ],
    views: [
        'Main',
        'Welcome',
        'Help',
        'Contact',
        'Results',
        'Question',
        'Util',
        'ServerUnavailable'
    ],
    controllers: [
        'QuestionController',
        'ResultsController',
        'UtilController'
    ],
    stores: [
        'Questions',
        'QuestionsOnline',
        'Responses',
        'ScoreConfigs',
        'Settings'
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    launch: function() {
        Ext.getStore('Settings').load();

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('adnat.view.Main'));
        // fixme go to questions
        // Ext.getCmp('mainTabPanel').setActiveItem(1);
    },

    onUpdated: function() {
        // FIXME mask with message that we are updating 
        window.location.reload();
        //        Ext.Msg.confirm(
        //            "Application Update",
        //            "This application has just successfully been updated to the latest version. Reload now?",
        //            function(buttonId) {
        //                if (buttonId === 'yes') {
        //                    window.location.reload();
        //                }
        //            }
        //        );
    }
});
