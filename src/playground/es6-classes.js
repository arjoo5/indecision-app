class Person {
    constructor(name='not known',age=0){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return `hi I am ${this.name} and my age is ${this.age}`;
    }
}
class Student extends Person
{
    constructor(name,age,major)
    {
        super(name,age);
        this.major=major;
    }
    hasMajor() {
    return !!this.major;
    }
    getDescription(){
        let descrip=super.getDescription();
        if(this.hasMajor()){
            descrip +=`Their maajor is ${this.major}`;
        }
        return descrip;
    }
}
const me=new Student('Arjoo',22,'Computer Science');
console.log(me.getDescription());
const other=new Student();
console.log(other.getDescription());
 
