//相同类型元素组成成为数组，不同类型元素组成了元组（Tuple）

const lists3: [string, number] = ['Sherlock', 12];

declare function rest(...args: [number, string, boolean]): void

declare function rest1(arg1: number, arg2: string, arg3: boolean): void

rest(1, "na", true);


