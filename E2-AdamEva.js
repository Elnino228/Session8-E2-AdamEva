const Apple=function () {
    this.weight=10;
    this.decrease=function () {
        if (this.weight>0){
            this.weight--;
        } else alert('da an het Tao');
    }
    this.isEmpty=function () {

    }
    this.getWeight=function () {
        return this.weight;
    }
}
const Human=function () {
    this.isMale=function () {
        l(this.isMale);
    }
    this.setGender=function (gender) {
        if (gender=='male'){
            this.isMale=true;
        } else  {
            this.isMale=false;
        }
    }
    this.checkApple=function (apple) {
        if (apple.getWeight()>0){
            return true;
        }
        return false;
    }
    this.eat=function (apple) {
        if (apple.getWeight()>0){
            apple.decrease();
            this.weight++;
        } else alert('Da an het Tao');
    }
    this.say=function (str) {
        l(str);
    }
    this.getName=function () {
        return this.name;
    }
    this.setName=function (name) {
        this.name=name;
    }
    this.getWeight=function () {
        return this.weight;
    }
    this.setWeight=function (weight) {
        this.weight=weight;
    }
    
}
const l=console.log;
let adam=new Human();
adam.setName('Adam');
adam.setWeight(50);
adam.setGender('male');
let eva=new Human();
eva.setName('Eva');
eva.setWeight(40);
eva.setGender('female');
let apple=new Apple();
adam.eat(apple);
eva.eat(apple);
adam.say('hello');
eva.say("hi");
l(apple.getWeight());
l(adam.getWeight());
l(eva.getWeight());