class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.subOne=this.subOne.bind(this);
        this.ResetB=this.ResetB.bind(this);
        this.state={
            count:0
        }
    }
    addOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        }
        )
    }
    subOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            }
        }
    ) 
}
    ResetB(){
        this.setState((prevState)=>{
            return {
                count: 0
            }
        }
    )
    //We can also use this
    // this.setState({
    //         count:0
    //     }
    // )
    }
    componentDidMount(){
        const temp=localStorage.getItem('count');
        const count=parseInt(temp,10);
        if(!isNaN(count))
        {
          this.setState(()=>({count:count}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count)
        localStorage.setItem('count',this.state.count);
    }
    render(){
        return (
            <div> 
                  <h1>Count:{this.state.count}</h1>
                  <button onClick={this.addOne}>+1</button>
                  <button onClick={this.subOne}>-1</button>
                 <button onClick={this.ResetB}>Reset</button>
            </div>
        );

    }
}

ReactDOM.render(<Counter  />,document.getElementById('app'));
// let count=0;
// const addOne=()=>{
//     count=count+1;
//     renderCount();
//     console.log('addOne',count);
// } 
// const SubOne=()=>{
//  if(count>0)
//    count--;
//  renderCount();
//  console.log('subOne',count);
// } 
// const ResetB=()=>{
//  count=0;
//  renderCount();
//  console.log('Reset',count);
// } 

// var auto=document.getElementById('app');


// const renderCount=()=>{
//  const templateTwo=(
//      <div> 
//          <h1>Count:{count}</h1>
//          <button onClick={addOne}>+1</button>
//          <button onClick={SubOne}>-1</button>
//          <button onClick={ResetB}>Reset</button>
//      </div>
//  );
//  ReactDOM.render(templateTwo,auto);
// };
// renderCount();