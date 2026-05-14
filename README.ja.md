# led-matrix

SVGを使用してLEDマトリクスパターンを描画する、軽量なHTMLカスタム要素です。

## デモ

- [HTMLデモ](https://code4fukui.github.io/led-matrix/)
- [JavaScriptデモ](https://code4fukui.github.io/led-matrix/script.html)

## 特徴

- **シンプルな宣言的記述:** `<led-matrix>`タグを使用して、HTML内に直接パターンを表示できます。
- **動的な生成:** JavaScript APIを使用して、マトリクスのインスタンス化や操作が可能です。
- **カスタマイズ可能なカラー:** パターンに合わせて独自のカラーパレットを定義できます。
- **スケーラブルなグラフィック:** SVGでレンダリングされるため、どのようなサイズでもシャープで高解像度な表示を保ちます。

## 使い方

まず、HTMLファイルにモジュールスクリプトを追加します:

```html
<script type="module" src="https://code4fukui.github.io/led-matrix/led-matrix.js"></script>
```

### HTML要素としての使用

`<led-matrix>`タグ内でパターンを定義します。テキスト内の各数字（`0`、`1`、`2`など）は、`colors`属性で指定したリストの対応する色にマッピングされます。

```html
<!-- デフォルトのマルチカラーパレットで4x4のパターンを描画します -->
<led-matrix>
  0123
  1230
  2301
  3012
</led-matrix>

<!-- カスタムの2色パレットで16x16のパターンを描画します -->
<!-- <!-- ... --> のようにコメントを使用することで、不要な空白が描画されるのを防ぎます -->
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

### JavaScriptからの使用

プログラムからマトリクスを作成して追加することも可能です。

```javascript
import { LEDMatrix } from "https://code4fukui.github.io/led-matrix/led-matrix.js";

const pattern = "0110\n1111\n1111\n0110";
const options = { colors: "#600,#d00" };

const ledmat = new LEDMatrix(pattern, options);
document.body.appendChild(ledmat);
```

## 属性

### `colors`

カンマ区切りのCSSカラー値の文字列です。パターンデータ内の数字 `0`, `1`, `2`, ... は、このリストの対応するインデックスのカラーにマッピングされます。

- **デフォルト:** `#222,#d00,#0d0,#00d`（ダークグレー、赤、緑、青）

## 依存関係

- [Color](https://github.com/code4fukui/Color/) - 内部のカラー操作に使用されます。

## ライセンス

MIT License — [LICENSE](LICENSE) を参照してください。
