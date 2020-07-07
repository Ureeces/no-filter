/******************
 * YOUR CODE HERE *
 ******************/
 const onlyOdds = function(numbers) {
  // No filter method
  const odds = [];

  for(let num of numbers) {
    const isOdd = num % 2 !== 0 ? true : false;
    if(isOdd) {
      odds.push(num);
    }
  }

  // Using filter method
  const odds2 = numbers.filter(num => num % 2 !== 0);
  return odds2;
}

const onlyEvens = function(numbers) {
  // No filter method
  const evens = [];

  for(let num of numbers) {
    const isEven = num % 2 === 0 ? true : false;
    if(isEven) {
      evens.push(num);
    }
  }

  // Using filter method
  const evens2 = numbers.filter(num => num % 2 === 0);
  return evens2;
}

const shortNamesOnly = function(names) {
  // No filter method
  const shortNames = [];

  for(let name of names) {
    if(name.length < 7) {
      shortNames.push(name);
    }
  }

  // Using filter method
  const shortNames2 = names.filter(name => name.length < 7);
  return shortNames2;
}

const dNames = function(names) {
  // No filter method
  const dNS = [];

  for(let name of names) {
    let firstLetter = name[0].toUpperCase();
    if(firstLetter === "D") {
      dNS.push(name);
    }
  }

  // Using filter method
  const dNS2 = names.filter(name => name[0].toLowerCase() === "d");
  return dNS2;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
