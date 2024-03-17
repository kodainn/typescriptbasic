interface Point {
  x: number
  y: number
}

function printPoint(point: Point) {
  console.log(point.x, point.y, point.z)
}

//インターフェースは拡張できる
interface Point {
  z: number
}

printPoint({ x: 100, y: 100, z: 100 })

//インターフェースのすべて満たさないとエラー
// class MyPoint implements Point {
//     x: number;
//     y: number;
// }

class MyPoint2 implements Point {
  x: number
  y: number
  z: number

  constructor() {
    this.x = 1
    this.y = 2
    this.z = 3
  }
}

interface Colorful {
  color: string
}

interface Circle {
  redius: number
}

//複数のインターフェースを新たなインターフェースとして継承できる
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "赤",
  redius: 10
}
