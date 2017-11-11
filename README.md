# Fifteen

Website: https://burodepeper.github.io/fifteen/

Fifteen is a proportionally sized typeface optimized for source code. It was initially developed as an experiment in font metrics and has since evolved as my personal typeface for both source code and identity. As such, it is still very much under active construction and receives frequent updates.

---

## Usage

### Downloads (.ttf and webfont)

Check the [releases](https://github.com/burodepeper/fifteen/releases) for the latest stable version, or browse the most recent [build](https://github.com/burodepeper/fifteen/tree/master/build) in the repository.

### Webfont via CDN

Add the following snippet to the `<head>` of your website. You can now use `font-family: 'Fifteen-Web', sans-serif;` in your CSS.

By default, only the most used characters are included in the default webfont, and it is also limited to Regular (400), Bold (700) and Thin (100). Alternative endpoints can be found with a little digging.

```html
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/fifteen/build/web/Fifteen-Web.css'>
```

[![](https://data.jsdelivr.com/v1/package/npm/fifteen/badge)](https://www.jsdelivr.com/package/npm/fifteen)

---

## Issues and suggestions

If you run into any issue, or if you have a suggestion on how to improve fifteen, please [submit it as an issue](https://github.com/burodepeper/fifteen/issues) or email me at <david@burodepeper.nl>.

### Planned changes and improvements

- Italic variants
- Extra Bold (800) and Black (900) variants
- Improved spacing and kerning; a continuous effort
- Extend glyphs to cover MES-2 and more punctuation, mathematics and various symbols
- Improved hinting
- Custom subsets/builds for webfonts
- Alternate glyph designs
- Improved distinction between ASCII and similar characters

Check the [TODO](https://github.com/burodepeper/fifteen/tree/master/TODO.md) for additional specifics.

### Known issues

- Glyphs with (complex) diacritics will most likely be clipped in certain software, especially on Windows.
- Many text editors do not support kerning in proportionally sized fonts.

---

## Development and contributions

Because of the personal nature of this project, I am open, but also somewhat reluctant towards (substantial) contributions. Suggestions of whatever kind are _very welcome_!

Fifteen is designed and developed using [Glyphs](https://www.glyphsapp.com) which is a prerequisite for working from source.

---

## License and voluntary conditions

Fifteen is released under the [MIT License](LICENSE). I'm looking into switching to using the Open Font License, but that shouldn't change anything.

While not strictly part of the license, if you intend to use Fifteen in a commercial project, a voluntary donation towards further development of fifteen, or a charity focused on the environment, is welcomed.

If you end up using fifteen in whatever capacity, I'd very much like to hear about it.
