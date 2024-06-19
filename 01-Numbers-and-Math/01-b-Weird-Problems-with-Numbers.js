/*
if you add $0.1 + $0.2 it gives $0.30000000000000004
because computers cant calculate floating numbers accurately sometimes
*/
console.log(0.1 + 0.2); // = $0.30000000000000004

/*
to solve this problem, convert the dollar into cents then add it
and again convert back to dollar
*/

console.log((0.1 * 100 + 0.2 * 100) / 100); // = $0.3
