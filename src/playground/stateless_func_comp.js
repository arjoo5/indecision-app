const user=(props)=>{
    return(
        <div>
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
        </div>
    )
};
ReactDOM.render(<user name='arjoo' age={22} />,document.getElementById('app'));