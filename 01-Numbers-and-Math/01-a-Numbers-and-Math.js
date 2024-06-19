// Todo: let's say we have a cart which has two items of $10.9 and one $20.95
// simple calculation

console.log(10.9 * 2 + 20.95); // = $42.75

// NOTE: Order of operation (Order of precedence)
// Multiplication/ Division is done first and Addition/ Subtraction is done later

/*
NOTE: Order of operation (Order of precedence)
Multiplication/ Division is done first and Addition/ Subtraction is done later.

If we get multiplication and division only, the order of the operation
will be left to right

Example, if its (4*5/10) = 4 * 5 first and then divided by 10

Same with addition/ subtraction.
*/

/*
Use of bracket.
if you use bracket, the inside operation will be done first
example, (1+1) * 3, first will be 1+1=2 then * 3 = 6

*/

// Todo: add shipping fee $4.99
console.log(10.9 * 2 + 20.95 + 4.99); // =$47.74

// Todo: find the 10% tax amount
console.log((10.9 * 2 + 20.95 + 4.99) * 0.1); // =$4.774
