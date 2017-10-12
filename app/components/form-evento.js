import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),

	actions:{
		save(){
			// Logica necesaria para crear el Evento
			let evento = this.get('evento');
			// 2) Validar los campos
			if( Ember.isBlank( evento.get('nombre') ) ){
				alert('El campo de nombre no puede estar vacio');
				return;
			}

			// 3) Mandar a guardar
			evento.save().then(()=>{
				// aquí ya estoy seguro que se guardó
				Ember.RSVP.all(evento.get('actividades').invoke('save')).then(()=>{
					alert('Ya se guardó');
					this.sendAction('didSave');
				})
			}); // es asíncrono
			// es posible que aún no se haya guardado
		},

		saveActivity(){
			// Inicializa una nueva activity en el store,
			// y le llena sus atributos con las varibles del formulario
			let activity = this.get('store').createRecord('activity', {
				evento: this.get('evento') // enlazamos la actividad con el evento
			});
		}
	}
});
