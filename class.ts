class Point2 {
  x: number
  y: number

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  moveX(n: number): void {
    this.x += n
  }

  moveY(n: number): void {
    this.y += this.y
  }
}

class Point3D extends Point2 {
  z: number

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y)
    this.z = z
  }

  moveZ(n: number): void {
    this.z += n
  }
}

const point = new Point2()
point.moveX(10)
console.log(`${point.x}, ${point.y}`)

const point3D = new Point3D()
point3D.moveX(10)
point3D.moveZ(20)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`)

interface IUser {
  name: string
  age: number

  sayHello: () => string
}

class User implements IUser {
  name: string
  age: number

  constructor() {
    this.name = ""
    this.age = 0
  }

  sayHello(): string {
    return `こんにちは、私の名前は${this.name}、${this.age}歳です。`
  }
}

const user = new User()
user.name = "Takayu"
user.age = 36
console.log(user.sayHello())
