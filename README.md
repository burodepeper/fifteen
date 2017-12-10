# Fifteen

Website: https://burodepeper.github.io/fifteen/

Fifteen is a proportional typeface optimized for source code. It was initially developed as an experiment in font metrics and has since evolved as my personal typeface for both source code and identity. As such, it is still very much under active construction and receives frequent updates.

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

### Known (and possible) issues

- Most complex/combined diacritics (such as Ȫ, ǚ, ẩ or ễ) fall outside their glyph boxes by design, but will unfortunately be clipped in certain software that doesn't support that. This is mostly an issue on Windows, though an average user won't likely run into this.
- Many editors do not support kerning. Kerning allows a type designer to adjust the default horizontal space between two adjacent characters. In monospaced typefaces, kerning is by definition not used. In proportional typefaces, kerning is used sparingly to prevent certain combinations of characters from looking weirdly spaced together.
- Many code editors base their word wrapping on a number of characters per line, which makes sense for fixed-width fonts, but not so much for variable-width fonts. This wrapping can be too tight, which results in unpredictable line breaks, or too wide, which results in possible horizontal overflow.

#### Known issues per editor

- **Atom**: Word wrapping is too wide
- **Sublime Text (3)**: Glyph box clipping, no kerning
- **Visual Studio Code**: Word wrapping is too narrow

---

## Contributions and development requirements

If you are interested in contributing to this project, please get in touch first. Due to the nature of this project, some guidance might be prudent to prevent your efforts from being wasted.

Fifteen is designed and developed using [Glyphs](https://www.glyphsapp.com) which is a prerequisite for working and building from source.

---

## License and voluntary conditions

Fifteen is released under the [MIT License](LICENSE). I'm looking into switching to using the Open Font License, but that shouldn't change anything.

While not strictly part of the license, if you intend to use Fifteen in a commercial project, a voluntary donation towards further development of fifteen, or towards a charity focused on the environment, is welcomed.

If you end up using fifteen in whatever capacity, I'd very much like to hear about it, because that would be awesome! ;)
