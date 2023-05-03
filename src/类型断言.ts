// const user = {};
// user.nickname = "drlsxs";
// console.log(user);

interface User {
  nickname: string;
  admin: boolean;
  groups: number[];
}

const user = {} as User;
user.nickname = "Evan";
user.admin = true;
user.groups = [2, 6];

const user3 = <User>{};
user3.nickname = "Evan";

