class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePick= this.handlePick.bind(this);
        this.handleAddOption= this.handleAddOption.bind(this);
        this.state={
            options:[]
        }
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            };
        }
    );
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
        this.setState((prevState)=>
        {
        return{
            options:prevState.options.concat([option])
        }
        })
    }
    render() {
        const title='Indecision';
        const subtitle='Put your life in hands of computer';
        return (
            <div>
                 <Header title={title} subtitle={subtitle} />
                 <Action 
                    hasoptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                 />
                 <Options 
                    opt={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                 />
                 <AddOption
                    handleAddOption={this.handleAddOption}
                  />
            </div>
       )

    }
}
class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
       )

    }
}
class Action extends React.Component{
   
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasoptions}
                >What should i do?</button>
            </div>
       )

    }
}
class Options extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.handleRemoveAll=this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll(){
    //     console.log(this.props.opt);
    //     alert('Remove');
    // }
    render() {
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
            {
                this.props.opt.map((option)=> <Option key={option} optionText={option} />)
            }
            </div>
       )

    }
}
class Option extends React.Component{
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
       )

    }
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
        
        this.setState(()=>
       {
        return{
            error:error
        }
       })
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