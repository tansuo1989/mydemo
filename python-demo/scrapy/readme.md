
# 安装 scrapy 的方法：
> 说明：python 3.5 win10 64位 

1. 直接用 
``` bat
pip install scrapy
```

2. 可能在安装 wisted 的时候出错

3. 手动下载：
[下载地址](https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted)

找到对应的版本下载

4. 手动安装：
```
pip install D:\py\python-3.5.2-embed-amd64\pip-9.0.1\Twisted-17.9.0-cp35-cp35m-win_amd64.whl

```

   以上参考：[这篇文章](http://blog.csdn.net/fullerhua/article/details/52953811)

5. Pydispatcher 也需要先下载后安装：
```
pip install D:\py\python-3.5.2-embed-amd64\pip-9.0.1\PyDispatcher-2.0.5-py2.py3-none-any.whl
```

6. 下载安装：pycparser

下载地址上同：https://www.lfd.uci.edu/~gohlke/pythonlibs/#pycparser 把#后面的修改一下即可
```
pip install D:\py\python-3.5.2-embed-amd64\pip-9.0.1\pycparser-2.17-py2.py3-none-any.whl
```

7. 运行 scrapy crawl examle 时出错：
ImportError: No module named win32api
解决方法：
```
pip install pypiwin32
```
注意，模块名称并不叫win32api

8. 安装好后，创建项目：
[参考：](http://scrapy-chs.readthedocs.io/zh_CN/0.24/intro/tutorial.html)
```
scrapy startproject hello
```

9. 创建爬虫：
```
cd hello
scrapy genspider spider-name start-url
```

10. 选择器部分介绍：
[链接](http://scrapy-chs.readthedocs.io/zh_CN/0.24/topics/selectors.html)

11. 爬取新链接，可参考：
``` python
# 在 spider 的 parse 中
 if next_page_url is not None:
            yield scrapy.Request(response.urljoin(next_page_url))

```

12. 运行爬虫：
```
scrapy crawl spider-name
```
可通过：
```
scrapy list
```
看项目中定义了多少个爬虫，每个爬虫对应spiders中的一个文件






