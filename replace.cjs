const fs = require('fs');
const file = 'D:/L.H/lihuss.github.io/src/content/blog/filaglyph-release-1.0/index.mdx';
let text = fs.readFileSync(file, 'utf-8');
text = text.replace(/style=\{\{ width: '100%', borderRadius: '12px' \}\}/g, 'style={{ width: "100%", borderRadius: "12px" }}');
fs.writeFileSync(file, text);
console.log('Replaced');
