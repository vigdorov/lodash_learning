import array from 'lodash/array';
import {map} from 'lodash/collection';
import {split, trim} from 'lodash/string';

// Разделяет на массив на массивы с заданным размером, последний массив может быть меньшего размера
const chunk = array.chunk([1, 34, 2, 234, 2, 234, 7], 2);

// Убирает из массива все false элементы
const compact = array.compact([1, 34, 0, false, '', 'sdf', undefined, null, {}]);

// Объединяет массивы в один
const concat = array.concat([45, 3], ['sdf', 'ss'], [[true]]);

// Проверяет какиех элементов из первого массива нет в остальных
const  diff = array.difference([1, 2, 3], [1], [3, 7, 8]);

// Выполняет такой же поиск, но принимает iterate, который будет вызываться для каждого элемента перед сравнение
const diff2 = array.differenceBy([{x: '3'}, {x: '5'}, {x: '1'}], [{x: '5'}], (obj) => obj.x);
const diff2_b = array.differenceBy([{x: '3'}, {x: '5'}, {x: '1'}], [{x: '5'}], 'x');

// Удаляет N элементов в начале массива
const drop = array.drop([2, 5, 45, 6, 2, 12], 3);

// Удаляет N элементов с конца массива
const dropRight = array.dropRight([1, 2, 3, 4], 2);

// Удаляет с конца элементы до тех пор, пока обработка коллбек не вернет false
const dropRightWhile = array.dropRightWhile([12, 5, 7, 2, -5], (n) => n < 3);

// Тоже самое, но отбрасывает элементы с начала
const dropWhile = array.dropWhile([1, 2, 3, 4, 5], n => n < 2);

const tagsString = '   sdf  , sd df sd   ,   sd  . sd  , sf_ 0f';
const tagsArray  = split(tagsString, ',');
const trimTagsArray = map(tagsArray, tag => {
   const trimTag = trim(tag, ' ');
   return trimTag;
});





