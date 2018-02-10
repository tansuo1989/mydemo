import scrapy
from hello.items import HelloItem

class DmozSpider(scrapy.Spider):
    name = "dmoz"
    allowed_domains = ["www.runoob.com"]
    start_urls = [
        "http://www.runoob.com/",
    ]

    def parse(self, response):
        # title=response.xpath("/html/head/title").extract()

        for sel in response.xpath('//a'):
            item = HelloItem()
            item['title'] = sel.xpath('text()').extract()
            item['link'] = sel.xpath('@href').extract()
            # item['desc'] = sel.xpath('text()').extract()
            yield item