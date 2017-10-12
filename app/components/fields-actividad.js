import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroyActividad(){
			this.get('actividad').deleteRecord();
		}
	}
});
