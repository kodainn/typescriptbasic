class Queue<T> {
  private array: T[] = []

  push(item: T) {
    this.array.push(item)
  }

  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>()
queue.push(111)
queue.push(112)

//number型じゃないからエラー
//queue.push('hoge');
