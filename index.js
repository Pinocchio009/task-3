const customer = prompt('what is your name')

//reply ok
const goods = prompt('This are the goods available now (either fish, meat, pepper):')

// input the goods you want
const cart = prompt('what do you want to buy')

let result;

while( cart == 'fish', 'meat', 'pepper'){
  console.log(`You just purchsed ${cart}`)
  return result
}

if (cart == 'fish') {
  result = `hello ${customer}, the ${cart} you requested is sold for 2naira, and has been added to your cart`
}
else if (cart == 'meat') {
  result = `hello ${customer}, the ${cart} you requested for is sold for 10 naira, and has been added to your cart`
}
else if (cart == 'pepper') {
  result = `hello ${customer}, the ${cart} you requested for is sold for 1 naira, and has been added to your cart`
}
else if (cart != goods) {
  result = ' we are out of stock'
}

console.log(` ${result}`)