// 1. Rounding a number
console.log(Math.round(2.2)); // 2
console.log(Math.round(2.8)); // 3
console.log(Math.round(2.5)); // 3

// Rounding cents or dollars
// lets say we want to find 10% tax on two products
// one product price is $20.95 and another is $7.99
// first convert to cents and then find the tax amount
console.log((2095 + 799) * 0.1); // = 289.40000000000003

// we want to round this floating number first
console.log(Math.round((2095 + 799) * 0.1)); // 289 cents

// now convert back to dollar
console.log(Math.round((2095 + 799) * 0.1) / 100); // $2.89
