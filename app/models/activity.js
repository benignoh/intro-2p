 import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	inicio: DS.attr('string'), // date
	fin: DS.attr('string'), // date

	evento: DS.belongsTo('event'),
	registros: DS.hasMany('registro')
});
