// const s1 = Symbol()
// console.log(s1)

// const s2 = Symbol()

// console.log(s1 === s2)

// const s3 = Symbol('3') // 传参为了区分
// console.log(s3)

// const s4 = Symbol('zyh')

// 不可以和其他类型做运算

// console.log(s4.toString())
// console.log(s4)
// console.log(Boolean(s4));
// console.log(!s4);

// let prop = 'name1'
// const info = {
//   name: 'zyh',
//   [prop]: 'zyh',
//   [`my${prop}`]: 'zyh'
// }
// console.log(info)

// const s5 = Symbol('name')
// const info2 = {
//   [s5]: 'zyh',
//   age: 18,
//   sex: 'man'
// }
// console.log(info2)
// info2.s5 = 'zyh'

// 遍历
// for (const key in info2) {
//   console.log(key)
// }

// console.log(Object.keys(info2))
// console.log(Object.getOwnPropertyNames(info2))
// console.log(JSON.stringify(info2))

// console.log(Object.getOwnPropertySymbols(info2))

// console.log(Reflect.ownKeys(info2))

// 静态方法
// Symbol().for()  Symbol().keyFor()
const s6 = Symbol('zyh')
const s7 = Symbol('zyh')

// 会拿传入的字符全局找，是否已经有使用for创建的值，有使用就直接返回已经存在的值，没有找到就创建
const s8 = Symbol.for('zyh')
const s9 = Symbol.for('zyh')
// console.log(s8===s9) // true
// console.log(s6 === s7) // false

// console.log(Symbol.keyFor(s8)) // zyh 放回Symbol.for注册的标识
// console.log(Symbol.keyFor(s6)); // undefined
