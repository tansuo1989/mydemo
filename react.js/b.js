
var Myp=React.createClass({
    render(){
        // return <p>{this.props.title}</p>
        return React.DOM.li(null,this.props.title)
    }
})

var Parent=React.createClass({
    getInitialState:function(){
        return {
            name:"lilei",
            age:99,
            money:0,
            num:0,
        }
    },
    getMoney(m){
      console.log(m);
      this.setState({
          money:m.money,
          num:m.num
      },()=>console.log("finish")
    )
    },
    render:function(){
        return <div>
                 <h3>name:{this.state.name} |age:{this.state.age}</h3>
                 <h4>parent.name:{this.props.name}</h4>
                 <p>{this.state.name}\'s money:{this.state.money}</p>
                 <Child onadd={this.getMoney} name={this.props.name+"/"+this.state.name}/>
                 <Child2 num={this.state.num}/>
              </div>
    }
})

var Child=React.createClass({
    getInitialState(){
        return {
            money:0,
            name:"It is lilei's Child!",
            num:1,
        }
    },
    render(){
        return <div>
            <p>child name:{this.props.name}/{this.state.name}</p>
            <button onClick={()=>this.props.onadd({money:++this.state.money,num:++this.state.num})}>赚钱</button>
        </div>;
    }
})

var Child2=React.createClass({
    render(){
      return <div>
          <h3>I am Child2</h3>
          <p>num:{this.props.num}</p>
      </div>;
    }
})

ReactDOM.render(
    <Parent name="lilei's parent"/>,
    document.querySelector("#app")
)

// var Fac=React.createFactory(Myp);

// ReactDOM.render(
//     // <Myp title="I am title"/>,
//     Fac({title:"I am factory"}),
//     document.querySelector("#app")
// )

