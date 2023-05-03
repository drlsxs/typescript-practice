//函数表达式
const add = function (x: number, y: number): string {
  return (x + y).toString();
};

//箭头函数、
const add2 = (x: number, y: number): string => (x + y).toString();

let triangle = {
  a: 10,
  b: 15,
  c: 20,
  area: function () {
    return () => {
      // this 为 any 类型
      const p = (this.a + this.b + this.c) / 2
      return Math.sqrt(p * (p - this.a) * (p - this.b) *(p - this.c))
    }
  }
}

const myArea = triangle.area()
console.log(myArea())

