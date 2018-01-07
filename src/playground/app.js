class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick= this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
        this.state={
            options:[]
        }
    }
    handleDeleteOptions(){
    //     this.setState(()=>{
    //         return {
    //             options:[]
    //         };
    //     }
    // );
      this.setState(()=>( { options:[] } ))
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option
            })
        }))
    }
    handlePick(){
        const rand=Math.floor(Math.random() * this.state.options.length);
        const option=this.state.options[rand];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid item to add'
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists'
        }
        // this.setState((prevState)=>
        // {
        // return{
        //     options:prevState.options.concat([option])
        // }
        // })
        this.setState((prevState)=> ({  options:prevState.options.concat([option]) }))
    }
    componentDidMount(){
        try{
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options)
                this.setState(() =>( {options:options} ))
           // console.log('Fetching Data');
        }  catch(e){

        } 
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length)
        {
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
           // console.log('Saving Data');
        }
    }
    componentWillUnmount(){
        console.log('Component Unmount');
    }
    render() {
        
        const subtitle= 'Put your life in hands of computer!!!';
        return (
            <div>
                 <Header subtitle={subtitle} />
                 <Action 
                    hasoptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                 />
                 <Options 
                    opt={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                 />
                 <AddOption
                    handleAddOption={this.handleAddOption}
                  />
            </div>
       )

    }
}
const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
   )

}
Header.defaultProps={
    title:'Indecision'
};
const Action =(props)=>{
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasoptions}
            >What should i do?</button>
        </div>
   )

}

const Options=(props)=>{
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>RemoveAll</button>
         {(props.opt.length  === 0) && <p>Please Add Option to get Started</p>}
        {
            props.opt.map((option)=> (
            <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
            />))
        }
        </div>
   )
}

const Option =(props)=>{
    return (
        <div>
            Option: {props.optionText}
            <button
             onClick={(e)=>{
                 props.handleDeleteOption(props.optionText)
             }}
             >
             Remove 
             </button>
        </div>
   )

}

class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            state:undefined
        }
    }
    handleAddOption(e){
        
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        
    //     this.setState(()=>
    //    {
    //     return{
    //         error:error
    //     }
    //    })

       this.setState(()=>({ error:error}))

       if(!error){
        e.target.elements.option.value='';
       }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                   <input type="text" name="option"/>
                   <button>Add Option</button>
                </form>
            </div>
       )

    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));