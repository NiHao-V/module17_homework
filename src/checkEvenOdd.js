export function checkEvenOdd(number) {
  if (number === null) {
    return "Вы отменили ввод";
  }

  number = parseFloat(number);

  if (isNaN(number)) {
    return "Вы ввели не числовое значение. Пожалуйста, введите число.";
  }

  if (number % 2 === 0) {
    return `Число ${number} - четное`;
  } else {
    return `Число ${number} - нечетное`;
  }
}