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

let t: Admin & User

t!.administrator // 合法 Admin.administrator: string
t!.groups        // 合法 User.groups: number[]
t!.id            // 合法 id: number
t!.timestamp     // 合法 timestamp: never
