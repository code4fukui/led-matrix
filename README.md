# led-matrix

- [demo on HTML](https://code4fukui.github.io/led-matrix/)
- [demo on script](https://code4fukui.github.io/led-matrix/script.html)

## Usage

```html
<script type="module" src="https://code4fukui.github.io/led-matrix/led-matrix.js"></script>

<led-matrix>
  0123
  1230
  2301
  3012
</led-matrix>

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

```JavaScript
import { LEDMatrix } from "https://code4fukui.github.io/led-matrix/led-matrix.js";

const ledmat = new LEDMatrix("0110\n1111\n1111\n0110", { colors: "#600,#d00" });
document.body.appendChild(ledmat);
```

## Dependencies

- [Color](https://github.com/code4fukui/Color/)
