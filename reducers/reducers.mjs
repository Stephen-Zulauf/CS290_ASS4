/*
 * Stephen Zulauf - zulaufs@osu.edu
 */

/*
 * Don't change the declaration of this function.
 */
function reducer1(previousValue, currentValue) {
  /*
    If this function is passed to reduce(), any non-numeric value in the array will be skipped and the sum of only the numeric values in the array will be returned.
    If all the values in the array are non-numeric, then the value 0 will be returned.
    */

  if (typeof previousValue !== "number") {
    previousValue = 0;
  }
  if (typeof currentValue !== "number") {
    currentValue = 0;
  }
  previousValue += currentValue;

  return previousValue;
}

/*
 * Don't change the declaration of this function.
 */
function reducer2(previousValue, currentValue) {
  /*If this function is passed to reduce() and the array contains any non-numeric values, this function will throw the exception TypeError.
    Otherwise, the sum of all the values in the array will be returned. 
    */
  if (typeof previousValue !== "number") {
    throw new TypeError(
      `non-numerical type variable ${previousValue} passed to reducer`
    );
  }
  if (typeof currentValue !== "number") {
    throw new TypeError(
      `non-numerical type variable ${currentValue} passed to reducer`
    );
  }
  previousValue += currentValue;

  return previousValue;
}

// Don't add or change anything below this comment.
export { reducer1, reducer2 };
