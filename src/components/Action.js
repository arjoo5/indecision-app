import React from 'react';

const Action =(props)=>(
    <div >
        <button className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasoptions}
        >What should i do?</button>
    </div>
)

export default Action;