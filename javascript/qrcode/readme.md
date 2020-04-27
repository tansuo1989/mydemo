# qrcode 的两种实现方式

1. 直接在前端实现，但不方便保存为图片 --index.html
  使用的是：https://github.com/jeromeetienne/jquery-qrcode

  我在原代码的基础上加了对UTF8字符的支持，可以直接使用中文了。

2. 用php实现，直接生成图片，方便保存 --index.php

  使用的是：http://phpqrcode.sourceforge.net/

