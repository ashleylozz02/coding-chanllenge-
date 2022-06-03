//Create a function that takes two dates
/// and returns the number
///of days between the first and second date.

///examples//
////
//getDays(
//new Date("June 14, 2019"),

/////new Date("June 20, 2019")
///); ///➞ 6

/// 1.creating function/// //es6//
///2.Inside my function nameing parameter in  frist and second///
//3. we going to use the date object for this promblem that is method that fetche times and date
//4. creating our dates with const so it cant be change
///5./ One day in milliseconds mutiply 1000 60 60 24 = days
///6. using math.round method which fuction returns the value of number rounded to the nearest integer
//6.// Calculating the time difference between two dates
let getDays = (first, second) => {
  const date1 = new Date(first);
  const date2 = new Date(second);
  const oneDay = 1000 * 60 * 60 * 24;

  const diffTime = date2.getTime() - date1.getTime();

  const diffDays = Math.round(diffTime / oneDay);

  return diffDays;
};
///console.log / using node to see results came out
console.log(getDays("June 14,2019", "June 20,2019")); ///prints out 6
