import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	email: DS.attr('string'),
	registros: DS.hasMany('registro'),


	isMasculino: false,
	isFemenino: false
});
