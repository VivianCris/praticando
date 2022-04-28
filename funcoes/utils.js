// definição da função
function writeName(name, age) {
  document.write("My name is " + name);
  document.write("<br /><br />");
  document.write("My age is " + age);
  document.write("<br /><br />");
}

function sum(firstNumber, secondNumber) {
  document.write(
    "The sum of first number e the second number is " +
      firstNumber +
      secondNumber
  );
  document.write("<br /><br />");
}

// valor por semana / 7 = valor por dia
// valor por dia * 365 = valor por ano
// valor por ano / 12 =  valor por mes

function rentPerMonth(valuePerWeek) {
  let valuePerDay = valuePerWeek / 7;
  let valuePerYear = valuePerDay * 365;
  let valuePerMonth = valuePerYear / 12;

  document.write(
    "The rent is $ " + Math.round(valuePerMonth) + " dollars per month"
  );
  document.write("<br /><br />");
}

function findBiggestNumber(biggestNumber) {
  const numbers = [2, 99, 5, 1, 19, 23, 10, 189, 12, 39];

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
      biggestNumber = numbers[i];
    }
  }

  document.write(" The biggest number is " + biggestNumber);
  document.write("<br /><br />");
}

function findSmallestNumber(smallNumber) {
  const numbers = [2, 99, 5, 1, 19, 23, 10, 189, 12, 39];

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallNumber) {
      smallNumber = numbers[i];
    }
  }

  document.write("The smallest number is " + smallNumber);
  document.write("<br /><br />");
}

function calculateAverage(num1, num2, num3) {
  let numbers = [num1, num2, num3];

  let sumNumbers = 0;

  for (i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }

  let averageNumbers = sumNumbers / numbers.length;

  document.write("The average numbers is " + Math.round(averageNumbers));
  document.write("<br /><br />");
}

function ascendingNumbers(num1, num2, num3, num4, num5) {
  let numbers = [num1, num2, num3, num4, num5];

  let order = 0;

  function correctSort(a, b) {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return +1;
    }

    return 0;
  }

  order = numbers.sort(correctSort);

  document.write("The ascending order of the numbers is " + order);

  document.write("<br /><br />");
}

function descendingNumbers(num1, num2, num3, num4, num5) {
  let numbers = [num1, num2, num3, num4, num5];

  let order = 0;

  function reverseSort(a, b) {
    if (a < b) {
      return +1;
    }

    if (a > b) {
      return -1;
    }

    return 0;
  }
  order = numbers.sort(reverseSort);

  document.write("The descending order of the numbers is " + order);

  document.write("<br /><br />");
}

function double(number) {
  let double = number * 2;

  document.write("The double of the number is " + double);

  document.write("<br /><br />");
}
