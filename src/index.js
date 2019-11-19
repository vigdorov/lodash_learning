import array from 'lodash/array';

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

console.log(diff2_b);
