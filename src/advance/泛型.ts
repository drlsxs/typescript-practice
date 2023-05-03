function identify(arg: number): number {
  return arg;
}

function identify2(arg: string): string {
  return arg;
}

function identifys<T>(arg: T): T {
  return arg;
}

//多个类型参数
function extend<T, U>(first: T, second: U): T & U {
  for (const key in second) {
    (first as T & U)[key] = second[key] as any;
  }
  return first as T & U;
}

//泛型参数默认类型
function min<T = number>(arr: T[]): T {
  let min = arr[0];
  arr.forEach((value) => {
    if (value < min) {
      min = value;
    }
  });
  return min;
}

// 泛型接口

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identify3<T>(arg: T): T {
  return arg;
}

let myIdentify: GenericIdentityFn<number> = identify3;
myIdentify(12);


// 泛型类
class MinClass {
  public list: number[] = [];

  add(num: number) {
    this.list.push(num);
  }

  min(): number {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}


class MinClass2<T> {
  public list: T[] = [];

  add(num: T) {
    this.list.push(num);
  }

  min(): T {
    let minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;

  }



}

let m = new MinClass2<string>();
m.add("hello");
m.add("world");
m.add("generic");

console.log(m.min());


// 泛型约束
interface User {
  username: string;
}

function info<T extends User>(user: T): string {
  return "imooc " + user.username;
}


type Args = number | string;
class MinClass3<T extends Args>{}

// @ts-ignore
const n = new MinClass3<boolean>(); //错误

// 多重类型泛型约束

interface Sentence {
  title: string;
  content: string;
}

interface Music {
  url: string;
}

class Classic<T extends Sentence & Music> {
  private prop: T;


  constructor(prop: T) {
    this.prop = prop;
  }

  info() {
    return {
      url: this.prop.url,
      title: this.prop.title,
      content: this.prop.content,
    }
  }
}
