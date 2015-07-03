'use strict';
/* jshint undef: false */
(function() {
  describe('iptExpandableBox', function() {

    var pluginName = 'plugin_iptExpandableBox';
    var config = {
      cutHeight: '111px'
    };
    var object = null;
    var $element = $('.box');

    describe('init', function() {

      beforeEach(function() {
        object = $element.iptExpandableBox(config);
      });

      it('expected to construct object', function() {
        return expect(object).to.be.an.object;
      });

      it('expected to set number of list items to ' + config.cutHeight, function() {
        return expect(object.data(pluginName).settings.cutHeight).to.equal(config.cutHeight);
      });

    });

  });
})();
