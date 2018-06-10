# 学习一个前端框架的顺序
1. 基本配置（cdn和webpack)
2. 数据显示与事件绑定/监听
3. 怎样使用循环与判断
4. 怎样获取表单数据
5. 路由
6. 动态修改样式？
7. 怎样组件化？
8. 怎样操作DOM (包括间接与直接操作)

# 存在的疑问：
1. 怎样绑定样式(注意在jsx中的html中不能使用class而应该使用className)

```javascript
list.map(function(item,index){
    return <li className={index%2==1?'green':'gray'}>{item.name}</div>;
})

```

2. 循环中传参的方法：
```javascript
onClick={function(){this.show(item)}.bind(this)}
```

后面如果不加bind，则找不到this

如果不使用bind,也可以这样写：
```javascript
onClick={()=>this.show(item)}

//或者

onClick={()=>{this.show(item)}}
```

3. props的值修改后，视图中响应的问题：

 数据修改后，但视图没有变化，这里需要使用 this.setState()，如果说state中的数据没有变化，直接这样执行就可以了。
 不执行的话，视图不会更新。

 其实，不论是props还是state被修改后，只要直接执行this.setSate(); 则视图会更新。

 数据变更后更新视图的方式： 
```javascript
 1. this.setState();//不论是否传参，都会更新视图

 2. this.forceUpdate();//强制更新，可以但不推荐

 3. this.replaceState({});//替换所有的state对象，一般不会使用

 测试后发现无效的方法：
 1. this.render();//对state也没有效果，原因不明
 2. this.setProps();//提示不存在这个方法，但网上说es6中才不存在
 3. this.replaceProps({});//同样提示方法不存在 
     
```

4. 渲染指定标签:
```javascript
React.DOM.li(null,"haha");//<li>haha</li>
Reach.Dom.p(null,"I am p");//<p>I am p</p>
```

5. React.createFactory() 可以把组件转成一个函数
```javascript
var My=React.createFactory(Mydiv);
ReactDOM.render(
    my({title:"I am title"}), //给组件传参
    document.querySelector("#app")
)
```
6. 是否可以把模板独立写，像vue一样？

7. 父子间通讯：
```javascript
var Parent=React.createClass({
    getInitialState:function(){
        return {
            name:"lilei",
            age:99,
            money:0,
        }
    },
    getMoney(m){
      console.log(m);
      this.setState({
          money:m
      })
    },
    render:function(){
        return <div>
                 <h3>name:{this.state.name} |age:{this.state.age}</h3>
                 <h4>parent.name:{this.props.name}</h4>
                 <p>{this.state.name}'s money:{this.state.money}</p>
                 <Child onadd={this.getMoney} name={this.props.name+"/"+this.state.name}/>
              </div>
    }
})

var Child=React.createClass({
    getInitialState(){
        return {
            money:0,
            name:"It is lilei's Child!"
        }
    },
    render(){
        return <div>
            <p>child name:{this.props.name}/{this.state.name}</p>
            <button onClick={()=>this.props.onadd(++this.state.money)}>赚钱</button>
        </div>;
    }
})


ReactDOM.render(
    <Parent name="lilei's parent"/>,
    document.querySelector("#app")
)
```

8. 


