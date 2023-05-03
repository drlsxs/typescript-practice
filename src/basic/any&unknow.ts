let value: unknown;
value = 1;
value = true;
let value1: unknown = value;
let value2: any = value;
// @ts-ignore
let value3: number = value;  //错误的
// @ts-ignore
let value4: string = value; //错误的
//该 unknown 类型只能分配给 any 类型和 unknown 类型本身。

let nums: unknown;
//unknown 类型在被确定为某个类型之前，不能被进行诸如函数执行、实例化等操作，一定程度上对类型进行了保护。