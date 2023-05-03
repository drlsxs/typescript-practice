let currentMonth: string | number

currentMonth = 'February'
currentMonth = 2


//字面量
type Scanned = true | false
type Result = { status: 200, data: object } | { status: 500, request: string}


interface Dog {
  name: string,
  eat: () => void,
  destroy: () => void
}

interface Cat {
  name: string,
  eat: () => void,
  climb: () => void
}

let pet: Dog | Cat
pet!.name    // OK
pet!.eat()   // OK
// @ts-ignore
pet!.climb() // Error


// 可识别联合类型
interface Rectangle {
  type: 'rectangle',
  width: number,
  height: number
}

interface Circle {
  type: 'circle',
  radius: number
}

interface Parallelogram {
  type: 'parallelogram',
  bottom: number,
  height: number
}

function area(shape: Rectangle | Circle | Parallelogram) {
  switch (shape.type) {
    case 'rectangle':
      return shape.width * shape.height
    case 'circle':
      return Math.PI * Math.pow(shape.radius, 2)
    case 'parallelogram':
      return shape.bottom * shape.height
  }
}

let shape: Circle = {
  type: 'circle',
  radius: 10
}

console.log(area(shape))



