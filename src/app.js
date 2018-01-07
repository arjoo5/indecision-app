/*import validator from 'validator';
console.log(validator.isEmail('test@gmail.com')); */
  
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/style.scss';


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
// class OldSyntax {
//     constructor(){
//         this.name='mika';
//     }
//     get(){
//         return `hi mi ${this.name}`;
//     }
// }
// const old=new OldSyntax();
// console.log(old.get());


// class NewSyntax{
//    name='jen';
//    get=()=>{
//     return `hi mi ${this.name}`;
// }
// }
// const newS=new NewSyntax();
// const getN=newS.get;
// console.log(getN());
