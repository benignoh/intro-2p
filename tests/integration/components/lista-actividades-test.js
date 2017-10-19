import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lista-actividades', 'Integration | Component | lista actividades', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lista-actividades}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lista-actividades}}
      template block text
    {{/lista-actividades}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
