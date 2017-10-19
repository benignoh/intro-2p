import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		selectActividad(actividad, jqueryEvent){
			debugger
			// leer el estado del input y mandarlo en el action
			let checked = jqueryEvent.target.checked;

			this.sendAction('selectActividad', actividad, checked);
		}
	}
});
