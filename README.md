# bytes-convert

<a href="https://codeclimate.com/github/hy0ug0/bytes-convert/maintainability"><img src="https://api.codeclimate.com/v1/badges/1b2594668f2e70da2969/maintainability" /></a>
<a href="https://codeclimate.com/github/hy0ug0/bytes-convert/test_coverage"><img src="https://api.codeclimate.com/v1/badges/1b2594668f2e70da2969/test_coverage" /></a>

A simple JavaScript module to convert bytes to octet.

## Usage

### In Node.js

```javascript
const bytesConvert = require('bytes-convert');

bytesConvert.convert(2078);

// OR

import { convert } from 'bytes-convert';

convert(2078);
```

### In browser

```html
<script src="https://cdn.jsdelivr.net/npm/bytes-convert/dist/bytes-convert.umd.min.js"></script>

<script>
    bytesConvert.convert(2078);
</script>
```
