let address: string = "Barker Street 2218";
let year: number = 2020;
// @ts-ignore
address = year; //错误
interface User2 {
  name: string;
  year: number;
}

let protagonist = {
  name: "Sherlock-Holmes",
  year: 1854,
  address: "Barer Street 2218",
}

let user2: User2 = protagonist;

