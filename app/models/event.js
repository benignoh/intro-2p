import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	inicio: DS.attr('string'), // date // ISO801
	fin: DS.attr('string'), // date,

	actividades: DS.hasMany('activity')
});
