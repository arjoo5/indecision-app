console.log("App running");

var app={
    name:'arjoo' ,
    class:'mca',
    options:[]
};
function getname(name)
{
    if(name)
    return <h1> name: {name}</h1> ;

}
const onFormSubmit=(e)=> {
    e.preventDefault();
     const option=e.target.elements.option.value;
      
     if(option)
     {
         app.options.push(option);
         e.target.elements.option.value='';
     }
     FormRender();
}
const removeAll=()=>{
    app.options.length=0;    //or app.options=[];
    FormRender();
}
const Change=()=>{
    const rand=Math.floor(Math.random() * app.options.length);
    const option=app.options[rand];
    alert(option);
}
var auto=document.getElementById('app');
//const numbers=[12,56,58];

    const FormRender=()=>{
        const template2=(
            <div> 
                 {getname(app.name)}
                <p>class {app.class ?app.class:'not known' }</p>
                <p>{(app.options && app.options.length>0)? 'Here are your options'  :'no option'}</p>
                <p>{app.options.length}</p>
                <button onClick={removeAll}>Remove</button>
                <button disabled={app.options.length==0} onClick={Change}>What Should I do</button>
                {
                    /* numbers.map((number)=>{     it is used to change array elements value
                        return <p key={number}>Number:{number}</p>;
                    })*/
                }
                <ol>
               {
                        app.options.map((option)=>
                    {
                        return <li key={option}>Item:{option}</li>;
                    })
                }
                </ol>
                <form onSubmit={onFormSubmit}>
                   <input type="text" name="option"/>
                   <button>Add Option</button>
                </form>
            </div>
            );
       
            ReactDOM.render(template2,auto);
            
    }
    FormRender();