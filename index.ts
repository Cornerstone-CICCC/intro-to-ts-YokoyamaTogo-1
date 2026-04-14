function doubleNumber(num: number): number {
  return num * 2
}

function squareNumber(num: number): number {
  return num * num
}

function isEven(num: number): boolean {
  return num % 2 === 0
}

function isAdult(age: number): boolean {
  return age >= 18
}

function reverseString(text: string): string {
  return text.split('').reverse().join('')
}

function capitalizeString(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

console.log('doubleNumber:', doubleNumber(6))
console.log('squareNumber:', squareNumber(5))
console.log('isEven:', isEven(8))
console.log('isAdult:', isAdult(20))
console.log('reverseString:', reverseString('togoyokoyama'))
console.log('capitalizeString:', capitalizeString('togoyokoyama'))
