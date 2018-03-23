# QR reader

## 来自：https://webqr.com/
## 来自：https://github.com/vwnb-school/QR-reader


# 使用方法：
1. 引入 qrcodereader.js
2. 通过FileReader或其它方式获取图片的base64字符串
3. 使用者qrcode.decode(base64,callback),在callback中即可获得解析的结果

# 注意：
* 内容为中文的二维码解析后会出现乱码的情况
* 作了部分修改，与原代码不太一样