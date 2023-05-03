interface User {
  id: number;
  phone: string;
  nickname: string;
  readonly department: string;
}

class Token {
  private secret: string | unknown;
  public accessExp: number = 60 * 60;
  public refreshExp: number = 60 * 60 * 24 * 30 * 3;
}

let user4: keyof User; // let user4: "id" | "phone" | "nickname" | "department"
type token = keyof Token;  // type token = "accessExp" | "refreshExp"

class Token2{
  public secret: string = 'ixeFoe3x.2doa'
  public accessExp: number = 60 * 60
  public refreshExp: number = 60 * 60 * 24 * 30 * 3
}

type token2 = keyof Token2
type valueType = Token2[token2] // type valueType = string | number
type secret = Token2['secret'] // type secret = string


