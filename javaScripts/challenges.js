
// Challenge 1 START
const challenge1 = document.getElementById('challenge1');
const arrayToReverse = ['sense.','make', 'all', 'will', 'This'];

const reverseArray = (flipMe) => {
  let flippedArray = [];
  for (let i = 0; i < flipMe.length; i++) {
    const arrayPosition = (flipMe.length - (i + 1));
    flippedArray[i] = flipMe[arrayPosition] + ' ';
  }
  challenge1.innerHTML = flippedArray;
};

reverseArray(arrayToReverse);

// Challenge 1 END

// Challenge 2 START

const challenge2 = document.getElementById('challenge2');
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
// "Oh powerful [stringElement], we humans offer our unconditional surrender!"

const greetAliens = (aliensToGreet) => {
  let stringToPrint = '';
  for (let i = 0; i < aliensToGreet.length; i++) {
    stringToPrint += `<h3>Oh powerful ${aliensToGreet[i]}, we humans offer our unconditional surrender!</h3>`;
  }
  challenge2.innerHTML += stringToPrint;
};

greetAliens(aliens);

// Challenge 2 END

// Challenge 3 START

const challenge3 = document.getElementById('challenge3');
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = (babyArray) => {
  const arrayToPrint = [];
  babyArray.forEach((item) => {
    arrayToPrint.push(` baby ${item}`);
  })
  challenge3.innerHTML += arrayToPrint;
};

convertToBaby(animals);

// Challenge 3 END

// Challenge 4 START

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log('Challenge 4 Answer: ', smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

// Challenge 4 END

// Challenge 5 START

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('Challenge 5 Answer: No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (arrayOfStuff) => {
  arrayOfStuff.forEach((item) => {
    politelyDecline(item);
  })
};

const grudginglyAccept = (veg) => {
  console.log(`Challenge 5 answer: Ok, I guess I will eat some ${veg}.`)
};

const acceptEverything = (arrayOfStuff) => {
  arrayOfStuff.forEach((item) => {
    grudginglyAccept(item);
  });
};

declineEverything(veggies);
acceptEverything(veggies);

// Challenge 5 END

// Challenge 6 START

const challenge6 = document.getElementById('challenge6');
const numbersYay = [2, 7, 9, 171, 52, 33, 14]

const squareNumbers = (numArray) => {
  const squaredNumbers = numArray.map((num) => {
    return (' ' + (num * num));
  })
  challenge6.innerHTML += squaredNumbers;
};

squareNumbers(numbersYay);

// Challenge 6 END

// Challenge 7 START

const challenge7 = document.getElementById('challenge7');
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = (arrayOfGreetings) => {
  const consoleGreeting = arrayOfGreetings.map((item) => {
    return item.toUpperCase();
  });
  return consoleGreeting;
};

console.log('Challenge 7 Answer: ', shoutGreetings(greetings))

// Challenge 7 END

// Challenge 8 START

const challenge8 = document.getElementById('challenge8');
const yearsArray = [1999, 2000, 1950, 1930, 100, 5, 200034];

const sortYears = (arrayOfYears) => {
  sortedYears = arrayOfYears.sort((a, b) => {
    return b - a;
  });
  challenge8.innerHTML += sortedYears;
};

sortYears(yearsArray);

// Challenge 8 END

// Challenge 9 START

const challenge9 = document.getElementById('challenge9');
let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

const justCoolStuff = (array1, array2) => {
  // I do not know how to use the filter method on two arrays and return only the similar items, I would love learn. Only other thing I can think of is to use the filter method on one of the arrays and use .includes() to check if each value exists in the other array.
  const arrayToPrint = [];
  array1.forEach((item) => {
    array2.forEach((string) => {
      if (item === string) {
        arrayToPrint.push(item);
      }
    });
  });
  challenge9.innerHTML += arrayToPrint;
};

justCoolStuff(arr1, arr2); // Should return ['this']

// Challenge 9 END

// Challenge 10 START

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

const meal2 = [{name: 'arugula', source: 'plant'}, {name: 'chicken', source: 'animal'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

const isTheDinnerVegan = (mealArray) => {
  let isVegan = true;
  mealArray.forEach((item) => {
    if (item.source !== 'plant') {
      isVegan = false;
      return;
    }
  });
  return isVegan;
};

console.log('Challenge 10 Answer', isTheDinnerVegan(meal)); // Should return true
console.log('Challenge 10 Answer showing it identifies if meal is not vegan', isTheDinnerVegan(meal2)); // Should return false

// Challenge 10 END


// Challenge 11 START

const dogFactory = (name, breed, weight) => {
  const newDog = {
    name: name,
    breed: breed,
    weight: weight,
  };
  return newDog;
};

console.log('Challenge 11 Answer: ',dogFactory('Joe', 'Pug', 27));
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

// Challenge 11 END

