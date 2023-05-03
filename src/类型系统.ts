// 1.布尔类型 ， true/false 值

const registered: boolean = true;
const todo: boolean = false;

// 2.数字类型，二进制，十进制，十六进制
let num: number = 3;
let point: number = 0.34;
let hexLiteral: number = 0xff00d;
let binaryLiteral: number = 0b1010;
let notANumber: number = NaN;

// 3.字符串类型 双引号或单引号表示
let program: string = "sherll homele";
let pargraph: string = "Dr. jons walk in a dark road";


// 4.void 类型 表示函数没有返回值
function doNothing(): void {
  let a = 10;
}

// 5.null和undefined类型 ， null和undefined是所有类型的子类型
let empty: number = null;
let list: number[] = undefined;

/*
*  6.数组类型
*   + 元素后面接上 []
*   + 使用数组泛型
* */
let lists: number[] = [1, 2, 3];
let names: string[] = ["jude", "bob"];
let lists2: Array<number> = [1, 2, 3];
let names2: Array<string> = ["jude", "bob"];

// 7.any类型
let input: any = 'nothing';
input = 0;
input = true;
input = [];
input = null;
input = undefined;
input = {};


// 8.object类型，非原始类型
let obj: object;









