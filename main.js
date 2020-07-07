/******************
 * YOUR CODE HERE *
 ******************/
 const onlyOdds = function(numbers) {
  const odds = [];

  for(let num of numbers) {
    const isOdd = num % 2 !== 0 ? true : false;
    if(isOdd) {
      odds.push(num);
    }
  }

  return odds;
}

const onlyEvens = function(numbers) {
  const evens = [];

  for(let num of numbers) {
    const isEven = num % 2 === 0 ? true : false;
    if(isEven) {
      evens.push(num);
    }
  }

  return evens;
}

const shortNamesOnly = function(names) {
  const shortNames = [];

  for(let name of names) {
    if(name.length < 7) {
      shortNames.push(name);
    }
  }

  return shortNames;
}

const dNames = function(names) {
  const dNS = [];

  for(let name of names) {
    let firstLetter = name[0].toUpperCase();
    if(firstLetter === "D") {
      dNS.push(name);
    }
  }

  return dNS;
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
