// 原始值
type brand = string;
type used = true | false;
const str: brand = "imooc";
const state: used = true;

// 联合类型
type month = string | number

const currentMonth2: month = 'February'
const nextMonth: month = 3


interface Admin {
  id: number,
  administrator: string,
  timestamp: string
}

interface User {
  id: number,
  groups: number[],
  createLog: (id: number) => void,
  timestamp: number
}

type T = Admin & User


type Tree<T, U> = {
  left: T,
  right: U
}

const tree:Tree<string, number> = {left:'12', right: 3
}





