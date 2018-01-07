import React from 'react';
import Option from './Option.js';

const Options=(props)=> (
    <div>
        <div className="widget-header">
          <h3 className="title">Your Options </h3>
          <button className="button button--link"
          onClick={props.handleDeleteOptions}>
           RemoveAll
          </button> 
        </div>
    
     {(props.opt.length  === 0) && <p className="widget-add">Please Add Option to get Started</p>}
    {
        props.opt.map((option,index)=> (
        <Option 
        key={option} 
        optionText={option} 
        count={index+1}
        handleDeleteOption={props.handleDeleteOption}
        />))
        
    }
    </div>
)

export default Options;