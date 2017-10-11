import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),

	actions:{
		save(){
			// Logica necesaria para crear el Evento
			// 0) Inicializar el modelo (contenedor)
			let evento = this.get('store').createRecord('event', {});
			// 1) Llenar los campos
			evento.set('nombre', this.get('nombreEvento'));
			evento.set('inicio', this.get('inicioEvento'));
			evento.set('fin', this.get('finEvento'));
			// 2) Validar los campos
			if( Ember.isBlank( evento.get('nombre') ) ){
				alert('El campo de nombre no puede estar vacio');
				return;
			}
			// 3) Mandar a guardar
			evento.save().then(()=>{
				// aquí ya estoy seguro que se guardó
				alert('Ya se guardó');
				this.sendAction('didSave');
			}); // es asíncrono
			// es posible que aún no se haya guardado
		}
	}
});
