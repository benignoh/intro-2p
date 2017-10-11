import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		let id = params.event;
		return this.store.find('event',id);
	},
	actions: {
		borrar(texto, code, evento){
			debugger
			alert('Borrar desde el route');
		}
	}
});
