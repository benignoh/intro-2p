import DS from 'ember-data';

export default DS.Model.extend({
	participante: DS.belongsTo('participante'),
	actividades: DS.hasMany('activity')
});
