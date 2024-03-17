//値が解されることがないのでneverで定義している
function error(message: string): never {
  throw new Error(message)
}

function foo(x: string | number | number[]): boolean {
  if (typeof x === "string") {
    return true
  } else if (typeof x === "number") {
    return false
  }

  return error("Never happens")
}

//neverは条件分岐もれがないことを保証するために使用する
