// 布尔类型
// let bool:boolean = false
let bool: boolean
bool = false
// bool = 1

// 数值类型
let num: number = 123
// num = 'abs'
num = 0b111011 // 二进制
num = 0o73 // 八进制
num = 0x7b // 十六进制

// 字符串类型
let str: string
str = 'asd'
str = `数值是${num}`
console.log(str)

// 数组类型
// [1, 2, 3]
// 写法一
let arr1: number[] // 表示数值的元素必须都是数字类型
arr1 = [5, 2]

// 写法二
let arr2: Array<number> // 表示arr2类型为数组，数组的元素类型为数字
let arr3: (string | number)[] // 表示arr3类型为数字，数组元素类型可以是字符串或者数字
arr3 = [1, 's']

// 元组类型
// 1、类似于数组
// 2、元组固定长度（2.6版本后），如何长度小于或者大于规定将会报错，2.6版本前超出长度的值类型要在初始化定义的类型中
// 3、固定位置上的类型，如果长度和位置上的类型不对应则报错
let tuple: [string, number, boolean]
tuple = ['str', 1, true]

// 枚举类型
// 使用enum声明
enum Roles {
  SUPER_ADMIN,
  ADMIN = 4, // 自定义序列号
  USER
}
console.log(Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER) // 输出 0 4 5 序列号，序列号是自动的，也可以是自定义的
console.log(Roles[4]) // ADMIN 通过索引值取名字

// 如：后端返回一个0代表超级管理员，前端做相应的操作
// let role: number = 0
// if (role === Roles.SUPER_ADMIN) {console.log('超级管理员')}

// any 类型：任意类型
let value: any
value = 'abc'
value = true
value = 1
let arr4: any[]

// void 类型：没有任何类型，如函数没返回值
// 可以给void类型赋值 undefined 和 null(需要关闭严格模式)
const consoleText = (text: string): void => {
  console.log(text)
}

let v: void
v = undefined
consoleText('text')

// null 和 undefined，null 和 undefined是其他类型的子类型，可以给其他类型赋值unll或undefined(需要关闭严格模式)
let u: undefined
u = undefined
// u = 2 // 报错
let n: null
n = null
// n = 'str' // 报错

// num = undefined
// num = null

// never 类型是任何任意类型的子类型，即never的值可以赋值给其他任何类型；没有任何类型是never的子类型，除了never的值
const errorFunc = (msg: string): never => {
  throw new Error(msg)
}
// errorFunc('abd')

const infiniteFunc = (): never => {
  while (true) {}
}

// object
let obj = {
  name: 'tom'
}
let obj2 = obj
obj2.name = 'jack'
function getObject(obj: object): void {
  console.log(obj)
}
getObject(obj2)

// 类型断言
// 语法 1、 (<类型>目标): (<string>target) 2、(目标 as 类型)：(target as string)，jsx只能使用这种语法
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
getLength('string')
