/*
 * jQuery expandable box plugin.
 *
 * Copyright © 2015, David Lehnen, Interactive Pioneers GmbH
 */

;(function($) {

  'use strict';

  var pluginName = 'iptExpandableBox';
  var defaults = {
    cutHeight: '100px',
    expandHeightTo: 'auto',
    expandWidthTo: '100%',
    expandEvent: 'mouseenter',
    expandEventTarget: null,
    shrinkEvent: 'mouseleave',
    shrinkEventTarget: null,
    animationSpeed: 1000
  };

  /**
   * IPTExpandableBox
   * @constructor
   * @param {object} element - jQuery element
   * @param {object} options - plugin options
   */
  function IPTExpandableBox(element, options) {

    this.$element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    this.init();

  }

  IPTExpandableBox.prototype = {

    /**
     * initialize IPTExpandableBox
     * @returns {undefined}
     */
    init: function() {

      this.$element
        .css({
          position: 'absolute',
          width: '100%',
          height: this.settings.cutHeight,
          overflow: 'hidden'
        })
        .wrap($('<div/>', {
          style: 'position: relative; height: ' + this.$element.height() + 'px;'
        }));
      this.addEventListeners();

    },

    /**
     * expands the box to defined size
     * @returns {undefined}
     */
    expand: function(event) {

      var self = event.data;

      var height = self.settings.expandHeightTo;
      if (height === 'auto') {
        var $clone = self.$element
          .clone()
          .css({
            width: self.settings.expandWidthTo,
            height: 'auto',
            visibility: 'hidden'
          })
          .insertBefore(self.$element);
        height = $clone.height();
        $clone.remove();
      }

      self.$element.animate({
          width: self.settings.expandWidthTo,
          height: height
        },
        self.settings.animationSpeed
      );

    },

    /**
     * shrinks the box to defined size
     * @returns {undefined}
     */
    shrink: function(event) {

      var self = event.data;

      self.$element.animate({
          width: '100%',
          height: self.settings.cutHeight
        },
        self.settings.animationSpeed
      );

    },

    /**
     * adds event handlers
     * @returns {undefined}
     */
    addEventListeners: function() {

      this.$element.on(
        this.settings.expandEvent + '.' + this._name,
        this.settings.expandEventTarget,
        this,
        this.expand
      );
      this.$element.on(
        this.settings.shrinkEvent + '.' + this._name,
        this.settings.shrinkEventTarget,
        this,
        this.shrink
      );

    },

    /**
     * destroy IPTExpandableBox
     * @returns {undefined}
     */
    destroy: function() {
      this.$element.off(this.settings.expandEvent + '.' + this._name);
      this.$element.off(this.settings.shrinkEvent + '.' + this._name);
      this.$element.removeData('plugin_' + pluginName);
    }

  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new IPTExpandableBox(this, options));
      }
    });
  };

})(jQuery);
