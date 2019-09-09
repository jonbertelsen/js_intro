console.log('Html sjov med map og filter:')

var nameArray1 = ["Lars", "Peter", "Jan", "Ian"]

var html = '<ul>' + nameArray1.map((x)=>'<li>' + x + '</li>')  + '</ul>'
console.log(html)

var html2 = nameArray1.map((x)=>'<li>' + x + '</li>')
html2.unshift('<ul>')
html2.push('</ul>')
console.log(html2)
console.log(html2.join(""))

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

console.log('Nyere end 1999:')
console.log(cars.filter(x => x.year > 1999))
console.log('Volvoer:')
console.log(cars.filter(x => x.make === 'Volvo'))
console.log('Price < 5000:')
console.log(cars.filter(x => x.price < 5000))

function filterCars(cars, filterFunction){
    var result = []
    for (i = 0; i < cars.length; i++){
        if (filterFunction(cars[i]))
            result.push(cars[i])
    }
    return result;
}

console.log('Newer than 1999 function:')
console.log(filterCars(cars, x => x.year > 1999))
console.log('Volvoer:')
console.log(filterCars(cars, x => x.make === 'Volvo'))
console.log('Price < 5000:')
console.log(filterCars(cars, x => x.price < 5000))

console.log('SQL sjov:')

sqlcars = cars.filter(x => x.year > 1999).map(x => 'INSERT INTO cars (id,year,make,model,price) VALUES (' + x.id + ',' + x.year + ',' + x.make + ',' + x.model + ',' + x.price + ');')

console.log(sqlcars.join(""))
