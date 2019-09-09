// The Javascript array - week 36

// a)
var boys = ["Peter", "lars", "Ole"]
var girls = ["Janne", "hanne", "Sanne"]

// b)
var all = boys.concat(girls)
console.log(all)

// c)
console.log(all.join(","))
console.log(all.join("-"))

// d)
all.push("Lone")
all.push("Gitte")

// e)
all.unshift("Hans")
all.unshift("Kurt")

console.log(all)

// f)
all.shift()

// g)
all.pop()
console.log(all)

// h)
all.splice(3,2)
console.log(all)

// i)
all.reverse()
console.log(all)

// j)
all.sort()
console.log(all)

// k)
var lowerCaseArray = all.map((x)=>x.toLowerCase()).sort()
console.log(lowerCaseArray.map(x=>x.charAt(0).toUpperCase().concat(x.slice(1,x.length))))

// l)
var upperCaseArray = all.map((x)=>x.toUpperCase())
console.log(upperCaseArray)

// m)
var filteredArray = all.filter(x => (x.charAt(0) === 'L') || (x.charAt(0) === 'l'))
console.log(filteredArray)
