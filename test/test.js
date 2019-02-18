import BpmnModeler from 'bpmn-js/lib/Modeler';

import { insertCSS } from 'bpmn-js/test/helper';

insertCSS(
  'diagram.css',
  require('bpmn-js/dist/assets/diagram-js.css')
);

insertCSS(
  'bpmn-font.css',
  require('bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css')
);

insertCSS(
  'diagram.css',
  require('./test.css')
);


describe('{{NAME}}', function() {

  it('should extend BpmnModeler instance', function() {

    // go ahead and write your first test

  });

});