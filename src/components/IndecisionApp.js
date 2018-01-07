import React from 'react';
import AddOption from './AddOption.js';    //  import AddOption from './AddOption'; 
import Options from './Options.js';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption: undefined
    }
    
    handleDeleteOptions=()=>{
    //     this.setState(()=>{
    //         return {
    //             options:[]
    //         };
    //     }
    // );
      this.setState(()=>( { options:[] } ))
    }
    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>{
                return optionToRemove !== option
            })
        }))
    }
    handlePick=()=>{
        const rand=Math.floor(Math.random() * this.state.options.length);
        const option=this.state.options[rand];
        this.setState(()=>({selectedOption:option}))
    }
    handleAddOption=(option)=>{
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
    handleClearSelectedOption=()=>{
        this.setState(()=>({selectedOption:undefined}))
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
        
        const subtitle= 'Put your life in hands of computer';
        return (
            <div>
                 <Header subtitle={subtitle} />
                 <div className="container">
                 <Action 
                    hasoptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                 />
                 <div className="widget">
                 <Options 
                    opt={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                 />
                 <AddOption
                    handleAddOption={this.handleAddOption}
                  />
                  </div>
                  </div>
                  <OptionModal 
                     selectedOption={this.state.selectedOption}
                     handleClearSelectedOption={this.handleClearSelectedOption}
                  />
            </div>
       )

    }
}
