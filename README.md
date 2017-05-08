# iptools-jquery-expandable-box [![Build Status](http://img.shields.io/travis/interactive-pioneers/iptools-jquery-expandable-box.svg)](https://travis-ci.org/interactive-pioneers/iptools-jquery-expandable-box)

jQuery plugin to cut and expand a box with content in various awesome ways.

## Features

Cut and expand a box with content in various easy and awesome ways.

## Requirements

- jQuery 1.11.3 or greater

## Example

```html
<div class="box">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vel placeat explicabo in porro. Amet laborum nam, eius ut. Odio veritatis nostrum totam molestiae itaque vel similique, perferendis a consequatur!
</div>
<div class="othercontent">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vel placeat explicabo in porro. Amet laborum nam, eius ut. Odio veritatis nostrum totam molestiae itaque vel similique, perferendis a consequatur!
</div>

<script src="src/iptools-jquery-expandable-box.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $('.box').iptExpandableBox({
      cutHeight: '100px',
      expandHeightTo: 'auto',
      expandWidthTo: '100%',
      expandEvent: 'mouseenter',
      expandEventTarget: null,
      shrinkEvent: 'mouseleave',
      shrinkEventTarget: null,
      animationDuration: 1000
    });
  });
</script>
```

## Options

Name              | Default                    | Type    | Description
:-----------------|:---------------------------|:--------|:-----------
cutHeight         | `100px`                    | string  | Height at which the container should be cut initially, in px or % (relative to parent)
expandHeightTo    | `auto`                     | string  | Height the countainer should be expanded to, in px, % (relative to cutHeight) or 'auto'
expandWidthTo     | `100%`                     | string  | Width the countainer should be expanded to, in px, % (relative to parent)
expandEvent       | `mouseenter`               | string  | Event that triggers expansion.
expandEventTrigger| `null`                     | string  | Event target, null = this
shrinkEvent       | `mouseleave`               | string  | Event that triggers collapsing to initial size.
shrinkEventTrigger| `null`                     | string  | Event target, null = this
expandedClass     | `expanded`                 | string  | Class added to expanded element
initializedClass  | `initialized`              | string  | Class added to element after plugin initialization
animationDuration | `1000`                     | int     | Animation duration in miliseconds.

## Licence
Copyright © 2015-2017 Interactive Pioneers GmbH. Licenced under [GPL-3](LICENSE).
