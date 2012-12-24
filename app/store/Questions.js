Ext.define('adnat.store.Questions', {
    extend  : 'Ext.data.Store',
    requires: ['adnat.model.Question'],
    config: {
		model: 'adnat.model.Question'
    }
});
