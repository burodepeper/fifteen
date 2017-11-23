# TODO

## Character development (hehe)

Generally, I do not tend to work very structured, so every subset contains characters I'm not entirely satisfied with. The list below contains the areas that still need 'real' work.

- [x] Larger diacritics, larger distance from parent character
- [ ] Italics
- [ ] Greek
  - [ ] `epsilon` (U+03B5)
  - [ ] `kaiSymbol` (U+03D7) and `KaiSymbol` (U+03CF)
  - [ ] Kerning
- [ ] Currency Symbols
- [ ] Letterlike Symbols
- [x] Arrows
- [ ] Mathematical Operators
- [ ] Miscellaneous Technical
- [x] Box Drawing
- [x] Block Elements
- [x] Geometric Shapes
- [ ] Miscellaneous Symbols
- [x] Supplemental Arrows-A

## Bugs

- [ ] Verify whether Chrome ignores (negative) kerning in consecutive inline elements, i.e. <span>r</span><span>.</span>. Otherwise, it is a bug in Atom.

## Kerning

A list of awkward kerning pairs I come across during my digital travels.

- [ ] `ig` in digital

## Alternate glyphs

- [ ] `a`: circle with small stem
- [ ] `0`: with a period inside

## General improvements / experiments

- [ ] Experiment: Draw spaces besides a 'normal' space (non-breaking space for instance) as a very thin box
- [x] Set parameters for position and size of the underline
- [ ] Add anchors specific for `cedilla` so glyphs like `Ḩ` (U+1E28) and `ḩ` (U+1E29) can be automatically aligned

## Webfonts

- [x] Automatically build subsets with a limited character set to reduce the size of the webfont downloads

-----

# KERNING PAIRS, work in progress

## RIGHT

@uc_A: A
@uc_B: BS
@uc_C: C
@uc_O: DGO
@uc_I: EI
@uc_F: FTY
@uc_H: HMN
@uc_U: JU
@uc_X: KX
@uc_L: L
@uc_P: P
@uc_R: QR
@uc_V: VW
@uc_Z: Z

@lc_a: a
@lc_o: beop
@lc_x: ckx
@lc_d: d
@lc_f: f
@lc_g: g
@lc_n: hmn
@lc_l: il
@lc_q: jq
@lc_r: r
@lc_s: s
@lc_z: tz
@lc_u: u
@lc_v: vwy

## LEFT

@uc_A: A
@uc_H: BDEFHKLMNPR
@uc_O: CGOQ
@uc_I: I
@uc_J: J
@uc_S: S
@uc_T: T
@uc_U: U
@uc_V: VWY
@uc_X: X
@uc_Z: Z

@lc_a: a
@lc_b: bhk
@lc_o: cdeoq
@lc_f: f
@lc_g: g
@lc_i: ij
@lc_l: l
@lc_n: mnr
@lc_p: p
@lc_s: s
@lc_t: t
@lc_u: u
@lc_v: vw
@lc_x: x
@lc_y: y
@lc_z: z
