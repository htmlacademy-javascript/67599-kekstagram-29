// Функция для проверки длины строки
const checkLength = (str, maxLength) => str.length <= maxLength;

console.log(checkLength('Программирование', 20));
console.log(checkLength('Программирование', 10));

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (str) => {
  str = str.toLowerCase().replaceAll(' ', '');
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr === str;
};

console.log(checkPalindrome('Лёша на полке клопа нашёл '));
console.log(checkPalindrome('Кекс'));

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const getPositiveInteger = (str) => {
  str = str.toString();

  let num = '';

  for (let i = 0; i <= str.length - 1; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      num += str[i];
    }
  }

  return parseInt(num, 10);
};

console.log(getPositiveInteger('1 кефир, 0.5 батона'));
console.log(getPositiveInteger('а я томат'));
console.log(getPositiveInteger(-1));
