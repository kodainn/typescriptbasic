interface Userk {
  name: string
  age: number
  email: string
}

type UserKey = keyof Userk

const key1: UserKey = "name"
//const key2: UserKey = 'phone';

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const userk: Userk = {
  name: "Takuya",
  age: 36,
  email: "test@example.com"
}

const userName = getProperty(userk, "name")

//const userGender = getProperty(userk, 'general');

//存在するキーなのかコンパイルの時点で検証できる
