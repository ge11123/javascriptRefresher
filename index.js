// 在其他地方导入模块文件 key.js

import { apiKey, value, a1 } from "./key.js";

console.log(apiKey); // 输出 'your-api-key'
console.log(a1); // 输出 'a'

// 将 value 设置到输出元素的文本内容中
document.getElementById('output').innerText = value;
