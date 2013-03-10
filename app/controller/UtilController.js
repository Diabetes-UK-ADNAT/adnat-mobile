Ext.define('adnat.controller.UtilController', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
        },
        refs: {
            lastSynced: '#lastSynced',
            lastUpdated: '#lastUpdated',
        },
        control: {
        }
    },
    requires: [
        'Ext.util.DelayedTask'
    ],
    update: function() {
        Ext.Viewport.mask({xtype: 'loadmask', message: 'Updating...'});

        var ls = AppSettings.getLastSynced();
        if (ls === null) {
            this.getLastSynced().setHtml('Has not been synced to server');
        } else {
            this.getLastSynced().setHtml('Last synced to server on ' + ls);
        }

        var lu = AppSettings.getLastUpdated();
        if (lu === null) {
            this.getLastUpdated().setHtml('Has no last updated response');
        } else {
            this.getLastUpdated().setHtml('Last assessment response on ' + lu);//new Date().toISOString());
        }

        Ext.Viewport.unmask();
    }
});
