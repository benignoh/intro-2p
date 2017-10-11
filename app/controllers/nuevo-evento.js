import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		veALaLista(){
			return this.transitionToRoute('lista-eventos');
		}
	}
});
