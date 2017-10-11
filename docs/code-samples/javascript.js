// Source: http://es6-features.org

const callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}

odds = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

this.nums.forEach(v => {
  if (v % 5 === 0) this.fives.push(v)
})

function f(x, y = 42, ...a) {
  return (x + y) * a.length
}

let parser = (input, match) => {
  for (let pos = 0, lastPos = input.length; pos < lastPos; ) {
    for (let i = 0; i < math.length; i++) {
      match[i].pattern.lastIndex = pos
      let found
      if ((found = match[i].pattern.exec(input)) !== null) {
        match[i].action(found)
        pos = match[i].pattern.lastIndex
        break
      }
    }
  }
}

let report = match => {
  console.log(JSON.stringify(match))
}

parser("Foo 1 Bar 7 Baz 42", [
  { pattern: /^Foo\s+(\d+)/y, action: match => report(match) },
  { pattern: /^Bar\s+(\d+)/y, action: match => report(match) },
  { pattern: /^Baz\s+(\d+)/y, action: match => report(match) },
  { pattern: /^\s*/y, action: match => {} },
])

class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y)
    this.width = width
    this.height = height
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y)
    this.radius = radius
  }
  static defaultCircle() {
    return new Circle("default", 0, 0, 100)
  }
}

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1
    return {
      next() {
        [pre, cur] = [cur, pre + cur]
        return { done: false, value: cur }
      }
    }
  }
}

for (let n of fibonacci) {
  if (n > 1000) break
  console.log(n)
}

let fibonacci = function*(numbers) {
  let pre = 0, cur = 1
  while (numbers-- > 0) {
    [pre, cur] = [cur, pre + cur]
    yield cur
  }
}

for (let n of fibonacci(1000))
  console.log(n)

let numbers = [...fibonacci(1000)]

function fetchAsync(url, timeout, onData, onError) {}
let fetchPromised = (url, timeout) => {
  return new Promise((resolve, reject) => {
    fetchAsync(url, timeout, resolve, reject)
  })
}
Promise.all([
  fetchPromised("http://backend/foo.txt", 500),
  fetchPromised("http://backend/bar.txt", 500),
  fetchPromised("http://backend/baz.txt", 500)
]).then(data => {
  let [foo, bar, baz] = data
  console.log(`Success: foo:${foo} bar:${bar} baz=${baz}`)
}, err => {
  console.error(err)
})
