import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		// 0) Inicializar el modelo (contenedor)
		let evento = this.get('store').createRecord('event', {});
		return evento;
	}
});
