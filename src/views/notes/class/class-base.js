class Animal{
    constructor(name,weight){
        this.name = name;
        this._weight = weight;
    }
    get weight(){
        return this._weight + "kg";
    }
    run(){
        return `${this.name}正在以${(1000/this._weight).toFixed(2)}km/h的速度奔跑`;
    }
    bellow(){
        return `${this.name}开始叫！~~`;
    }
    static  fight(animal1,animal2){
        let winnerObj = animal2;
        if(animal1._weight>animal2._weight){
            winnerObj = animal1;
        }
        return `${winnerObj.name}以${winnerObj._weight}kg的体重胜出！！大家恭喜他！~！~`;
    }
}

class Dog extends Animal{
    constructor(name,nickName,weight){
        super(name,weight);
        this.nickName = nickName;
    }
    bellow(){
        return `${this.name}（${this.nickName}）发出汪汪的叫声`;
    }
}

let monkey = new Animal("猴子",25);
let tiger = new Animal("老虎",150);
let dogHuang = new Dog("小黄狗","卡小杰",10);

console.log(monkey.run(),monkey);
console.log(tiger.run(),tiger);
//静态方法居然可以以 functionName.XXX() 他是被如何储存的呢？
console.log(Animal.fight(tiger,monkey),Animal.prototype);

