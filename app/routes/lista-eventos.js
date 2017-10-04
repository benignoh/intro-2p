import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		// se ejectua cada que entras*
		return this.store.findAll('event');
	}
});
