# week12

### Вопросы 💎

1. Какие кавычки можно использовать для создания строк в JS и в чём разница между ними?

   Одинарные, двойные и обратные. Одинарные и двойные работают одинаково, отражают строку внутри них. Даже если внутри записано число, все равно читается, как строка. Обратные кавычки позволяют делать абзацы внутри строки, а также в них можно вставлять произвольные выражения, обернув их в ${…}.

2. Какими методами можно найти подстроку в строке? Приведите пример.

- Метод indexOf() возвращает индекс (позицию) в первое вхождение указанного текста в строку.
  'ITGirls'.indexof('T'); // 1
  /_ Если таких символов в строке несколько,
  метод вернёт индекс первого из них: _/
  /_ Если символа в строке нет, indexOf вернёт -1: _/
  /_ indexOf чувствителен к регистру _/

- Метод lastIndexOf() возвращает индекс последнего вхождения указанного текста в строку.
  'ITGirls ITGirls'.lastIndexOf('s'); // 14

- Похожим образом работает метод search() — он тоже ищет строки по заданному значению и возвращает позицию совпадения:
  const str = "Я живу в Москве";
  console.log(str.search("Москве")); // 9

- Метод includes позводяет проверить, есть ли в строке набор символов.
  'Гарри Поттер и узник Азкабана'.includes('Гарри Поттер'); // true

3. Самостоятельно разберитесь, зачем нужен специальный символ `\n`?

   Чтобы отображать текст после него с новой строки.

4. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`

```jsx
let str = "настя";
str = "Н" + str.substr(1);
console.log(str);
```

5. Какой из вариантов округления делает это по математическим правилам?

   Math.round(); до ближайшего целого числа

   toFixed(n) округляет число до n знаков после запятой также по матем правилам

6. Как сгенерировать случайное число от 1 до 100?

   Math.random(); генерирует случайное число от 0 до 1. Потом его можно отмасшабировать.

   ```jsx
   function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() \* (max - min + 1)) + min;
   }
   console.log(getRandomInt(1, 100));
   ```

7. Что выведет в консоль?

```jsx
const x = "Солнце";

console.log("The string length is " + x.length);
```

"The string length is 6"

8. Каким будет результат в представленном ниже фрагменте кода?

```jsx
const upperText = "ВелоСипед";
document.write(upperText.toUpperCase());
```

ВЕЛОСИПЕД

9. Каким будет результат в приведенном ниже фрагменте кода?

```jsx
let str = "розы такие розы";
str.replace("розы", "красивые");
```

Пока никаким. Если дополнить выводом в консоль, то "красивые такие розы".

```jsx
let str = "розы такие розы";
let str1 = str.replace("розы", "красивые");
console.log(str1);
```

10. Что выведет в консоль?

```jsx
const str = "abcdefghij";
console.log("(2,3): " + str.substr(2, 3));
```

"(2,3): cde"
