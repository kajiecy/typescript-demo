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
}

let monkey = new Animal("猴子",25);
let tiger = new Animal("老虎",150);

console.log(monkey.run(),monkey);
console.log(tiger.run(),tiger);
