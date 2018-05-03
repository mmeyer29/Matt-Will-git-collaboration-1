var students = [{
    name: 'Will',
    age: 27
  },
  {
    name: 'Matt',
    age: 27
  }
];

var numbers = [3, 5, 6, 6];

const product = numbers.reduce((total, number) => total += number);
return product
