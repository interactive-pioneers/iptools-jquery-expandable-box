/*
 * jQuery expandable box plugin.
 *
 * Copyright © 2015, David Lehnen, Interactive Pioneers GmbH
 */

;(function($) {

  'use strict';

  var pluginName = 'iptExpandableBox';
  var defaults = {
    cutHeight: 200
  };

  /**
   * IPTExpandableBox
   * @constructor
   * @param {object} element - jQuery element
   * @param {object} options - plugin options
   */
  function IPTExpandableBox(element, options) {

    this.element = $(element);
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

      this.addEventListeners();

    },

    /**
     * adds event handlers
     * @returns {undefined}
     */
    addEventListeners: function() {

      this.window.on('scroll' + '.' + this._name, null, this, this.handleScroll);

    },

    /**
     * destroy IPTExpandableBox
     * @returns {undefined}
     */
    destroy: function() {
      // this.$element.off('click' + '.' + this._name);
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
