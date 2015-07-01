'use strict';
/* jshint undef: false */
(function() {
  describe('iptExpandableBox', function() {

    var pluginName = 'plugin_iptExpandableBox';
    var config = {
      cutSize: 200
    };
    var object = null;

    describe('init', function() {

      beforeEach(function() {
        object = $element.iptExpandableBox(config);
      });

      it('expected to construct object', function() {
        return expect(object).to.be.an.object;
      });

      it('expected to set number of list items to ' + config.cutSize, function() {
        return expect(object.data(pluginName).settings.cutSize).to.equal(config.cutSize);
      });

    });

  });
})();
