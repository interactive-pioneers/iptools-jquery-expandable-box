'use strict';
/* jshint undef: false */
(function() {
  describe('iptExpandableBox', function() {

    var pluginName = 'plugin_iptExpandableBox';
    var config = {
      animationSpeed: 500,
      cutHeight: '111px',
      expandHeightTo: '200px',
      expandWidthTo: '300px',
      expandEvent: 'click'
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

    describe('expand', function() {

      beforeEach(function(done) {
        $element.trigger('click');
        object = $element.iptExpandableBox(config);
        setTimeout(function() {
          done();
        }, config.animationSpeed + 50);
      });

      it('expected to expand the box width to ' + config.expandWidthTo, function() {
        return expect($element.css('width')).to.equal(config.expandWidthTo);
      });

      it('expected to expand the box height to ' + config.expandHeightTo, function() {
        return expect($element.css('height')).to.equal(config.expandHeightTo);
      });

    });

    describe('destroy', function() {

      beforeEach(function() {
        object = $element.iptExpandableBox(config);
      });

      it('expected to remove data', function() {
        object.data(pluginName).destroy();
        return expect(object.data(pluginName)).to.not.be.ok;
      });

    });

  });
})();
