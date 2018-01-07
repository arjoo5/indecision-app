class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.show=this.show.bind(this);
        this.state= {
            visib:false
        }

    }
    show(){
            this.setState((prevState)=>{
                return {
                    visib: !prevState.visib,
                };
            }
            );
        }
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.show}>{this.state.visib ? 'hide deatails' : 'show details'}</button>
            {this.state.visib && (
                <div>
                  <p> hey. there are some details </p>
                </div>
            )}
          </div>
        )
    }
}
ReactDOM.render(<Visibility />,document.getElementById('app'));
// let value=true;
// let option='Show Details';
// const show=()=>{
//     if(value)
//     {
//         option='Hide Details';
//         value=false;
//         render();
//     }
//     else
//     {
//         option='Show Details';
//         value=true;
//         render();
//     }
// }
// const auto=document.getElementById('app');
// const render=()=>{
//     const template=(
//         <div>
//           <h1>Visibility Toggle</h1>
//           <button onClick={show}>{option}</button>
//           <p>{!value&&'THis is the text'}</p>
//         </div>
//     );
//     ReactDOM.render(template,auto);
// }
// render();

