interface Clothes {
  color?: string; //可选属性
  size: string;
  price: number;

  [propName: string]: any; //任意属性
}

function getClothesInfo(clothes: Clothes) {
  console.log(clothes.price);
}

let myClothes: Clothes = {
  size: "XL",
  price: 0,
  active: true,
  age: 20,
};

let clothes = {
  color: "block",
  price: 0
}

// @ts-ignore
getClothesInfo(clothes); //错误的
getClothesInfo(myClothes);

interface AnimalInterface {
  name: string;

  eat(m: string): string;
}

class Dog2 implements AnimalInterface{
  name: string;

  eat(m: string): string {
    return `${this.name}吃肉${m}分钟`;
  }


  constructor(name: string) {
    this.name = name;
  }
}

const doa = new Dog2("Lm");
const res = doa.eat("20");
console.log(res);