# iptools-jquery-expandable-box [![Build Status](http://img.shields.io/travis/interactive-pioneers/iptools-jquery-expandable-box.svg)](https://travis-ci.org/interactive-pioneers/iptools-jquery-expandable-box)

jQuery expandable box plugin

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
animationDuration | `500`                      | int     | Animation duration in miliseconds.                         

## Contributions

### Bug reports, suggestions

- File all your issues, feature requests [here](https://github.com/interactive-pioneers/iptools-jquery-expandable-box/issues)
- If filing a bug report, follow the convention of _Steps to reproduce_ / _What happens?_ / _What should happen?_
- __If you're a developer, write a failing test instead of a bug report__ and send a Pull Request

### Code

1. Fork it ( https://github.com/[my-github-username]/iptools-jquery-expandable-box/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Develop your feature by concepts of [TDD](http://en.wikipedia.org/wiki/Test-driven_development), see [Tips](#tips)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

### Tips

Following tasks are there to help with development:

- `grunt watch:bdd` listens to tests and source, reruns tests
- `grunt qa` run QA task that includes tests and JSHint
- `grunt build` minify source to dist/

## Licence
Copyright © 2015 Interactive Pioneers GmbH. Licenced under [GPLv3](LICENSE).