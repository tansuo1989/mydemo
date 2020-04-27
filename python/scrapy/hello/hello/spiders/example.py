# -*- coding: utf-8 -*-
import scrapy
import json
import os

class ExampleSpider(scrapy.Spider):
    name = 'example'
    allowed_domains = ['www.qq.com']
    start_urls = ['http://www.qq.com/']

    def parse(self, response):
        title=response.css("title::text").extract()
        print(title)
        list=[]
        for item in response.css("li>a"):
            v={
                "title":item.css("::text").extract(),
                "link":item.css("::attr(href)").extract()
            }
            list.append(v)

        # print(list)
        dir=os.path.join(os.getcwd(),"./file")
        if os.path.isdir(dir) == False:
            os.mkdir(dir)

        f=open(dir+"/qq.json","w+")
        f.write(json.dumps(list))
