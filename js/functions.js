// Функция для проверки длины строки
const checkLength = (str, maxLength) => str.length <= maxLength;

checkLength('Программирование', 20);

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (str) => {
  if (typeof str !== 'string') {
    str = str.toString();
  }

  str = str.replaceAll(' ', '').toLowerCase();
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr === str;
};

checkPalindrome('Лёша на полке клопа нашёл ');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const getPositiveInteger = (str) => {
  if (typeof str !== 'string') {
    str = str.toString();
  }

  let num = '';

  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      num += str[i];
    }
  }

  return parseInt(num, 10);
};

getPositiveInteger('1 кефир, 0.5 батона');
