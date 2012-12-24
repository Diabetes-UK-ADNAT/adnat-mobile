Ext.define("adnat.view.XVideo", {
    extend: 'Ext.Panel',
	xtype: 'xvideo',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
		title: 'XVideo',
		iconCls: 'action',

		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'XVideo'
			},
			{
				xtype: 'video',
				url: 'video.mp4',
				posterUrl: 'image.png'
			}
		],
	}
});
