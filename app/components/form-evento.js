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

			if(this.get('actividadesArray')){
				this.get('actividadesArray').forEach((a)=>{
					a.set('evento', evento);
				});
			}

			// 3) Mandar a guardar
			evento.save().then(()=>{
				// aquí ya estoy seguro que se guardó
				if(this.get('actividadesArray')){
					Ember.RSVP.all(this.get('actividadesArray').invoke('save')).then(()=>{
						alert('Ya se guardó');
						this.sendAction('didSave');
					})
				} else{
					this.sendAction('didSave');
				}
			}); // es asíncrono
			// es posible que aún no se haya guardado
		},

		saveActivity(){
			// Inicializa una nueva activity en el store,
			// y le llena sus atributos con las varibles del formulario
			let activity = this.get('store').createRecord('activity', {
				nombre: this.get('nombreActividad'),
				inicio: this.get('inicioActividad'),
				fin: this.get('finActividad')
			});

			// La nueva acivity creada la insertamos en un arreglo temporal
			if(!Ember.isPresent(this.get('actividadesArray'))){
				this.set('actividadesArray', [])
			};
			this.get('actividadesArray').pushObject(activity);

			// Limpiamos (reset) las variables del fomrulario
			this.setProperties({
				nombreActividad: null,
				inicioActividad: null,
				finActividad: null
			});
		}
	}
});
