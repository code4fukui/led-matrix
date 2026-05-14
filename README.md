# led-matrix

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight HTML custom element for rendering LED matrix patterns using SVG.

## Demo

- [HTML Demo](https://code4fukui.github.io/led-matrix/)
- [JavaScript Demo](https://code4fukui.github.io/led-matrix/script.html)

## Features

- **Simple Declarative Usage:** Display patterns directly in your HTML with the `<led-matrix>` tag.
- **Dynamic Creation:** Instantiate and manipulate matrices via a JavaScript API.
- **Customizable Colors:** Define a custom color palette for your patterns.
- **Scalable Graphics:** Renders using SVG for crisp, high-resolution display at any size.

## Usage

First, add the module script to your HTML file:

```html
<script type="module" src="https://code4fukui.github.io/led-matrix/led-matrix.js"></script>
```

### As an HTML Element

Define your pattern inside the `<led-matrix>` tag. Each digit in the text (`0`, `1`, `2`, etc.) maps to a color in the `colors` attribute list.

```html
<!-- Renders a 4x4 pattern with the default multi-color palette -->
<led-matrix>
  0123
  1230
  2301
  3012
</led-matrix>

<!-- Renders a 16x16 pattern with a custom two-color palette -->
<!-- Using a comment <!-- ... --> prevents unwanted whitespace from being rendered -->
<led-matrix colors="#222,#0b0"><!--
0000000110000000
0000000110000000
1111111111111111
1111111111111111
1100110000110011
1100110000110011
0000110000110000
1111110000111111
1111110000111111
0000000000000000
0111111111111110
0111111111111110
0000000110000000
0000000110000000
1111111111111111
1111111111111111
--></led-matrix>
```

### Via JavaScript

You can also create and append a matrix programmatically.

```javascript
import { LEDMatrix } from "https://code4fukui.github.io/led-matrix/led-matrix.js";

const pattern = "0110\n1111\n1111\n0110";
const options = { colors: "#600,#d00" };

const ledmat = new LEDMatrix(pattern, options);
document.body.appendChild(ledmat);
```

## Attributes

### `colors`

A comma-separated string of CSS color values. The digits `0`, `1`, `2`, ... in the pattern data will map to the colors at the corresponding index in this list.

- **Default:** `#222,#d00,#0d0,#00d` (dark gray, red, green, blue)

## Dependencies

- [Color](https://github.com/code4fukui/Color/) - Used for internal color manipulation.

## License

MIT License — see [LICENSE](LICENSE).