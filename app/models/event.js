import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	inicio: DS.attr('date'),
	fin: DS.attr('date')
});
