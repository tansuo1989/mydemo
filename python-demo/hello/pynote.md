## phthon 学习笔记

### django 框架学习纪录

### 使用数据库
1. 安装 mysql 拓展
```` 
pip install mysqlclient
````

2. setting.py 中配置数据库信息：
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # 或者使用 mysql.connector.django
        'NAME': 'dbname',
        'USER': 'test',
        'PASSWORD': 'test123',
        'HOST':'localhost',
        'PORT':'3306',
    }
}
```

3. 定义模型：
```
django-admin.py startapp TestModel
```

4. 定义表结构：
``` python
from django.db import models

# Create your models here.
class Test(models.Model):
    name = models.CharField(max_length=20)

class User(models.Model):
    age=models.IntegerField()    
```

这样相当于创建了两个表：testmodel_test 和 testmodel_user ,字段类型的定义方式，见[文档](http://python.usyiyi.cn/documents/django_182/ref/models/fields.html)

5. 在 setting.py 中添加自定义的模型
``` python

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'TestModel',               # 添加此项
)

```

6. 生成数据表：
``` sh
python manage.py makemigrations #生成迁移脚本
python manage.py migrate #生成数据表

```

 


