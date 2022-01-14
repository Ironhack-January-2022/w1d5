// https://doesitmutate.xyz/ - here you can check it the array method
// mutates the array or not


console.log('array methods')

// map - changes every element of the array

const nums = [1, 2, 3, 4, 5]


// const num = 4
// multiply(num)

// console.log(multiply)

// function multiply(number) {
// 	return number * 2
// }

const res = nums.map(function (number) {
	return number * 3
})

console.log(res)
console.log(nums)


const names = ['john', 'paul', 'george']

// use map to create an array that contains all the names
// prefixed with 'mr' -> 'mr john', 

const prefixed = names.map(function (name) {
	return 'mr ' + name
})

console.log(prefixed)

const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65
	},
	{
		name: "Claudia Lopez",
		firstProject: 45,
		secondProject: 95
	},
	{
		name: "Carolina Perez",
		firstProject: 85,
		secondProject: 72
	}
];

// 1. use map to reformat the array. the result should be an 
// array that only contains the names of the students
// ["Tony Parker", "Marc Banchini", ...]

// 2. map over students and create an array like this:
// [{name: <name of the student>, total: <prjct1 + prjct2>}]

// 1.
const studentNames = students.map(function (student) {
	return student.name
})

console.log(studentNames)

// 2.
const totals = students.map(function (student) {
	return { name: student.name, total: student.firstProject + student.secondProject }
})
console.log(totals)

console.clear()

// reduce - reduces an array to a single value

const nums2 = [2, 4, 6]

// sum up all the numbers from an array
const sum = nums2.reduce(function (accumulator, currentValue) {
	console.log('acc: ', accumulator)
	console.log('val: ', currentValue)
	return accumulator + currentValue
}, 0)

console.log(sum)

const words = ['foo', 'bar', 'baz']
// sum of all the string lengths
const wordsSum = words.reduce(function (acc, val) {
	console.log('iteration')
	return acc + val.length
}, 0)
console.log(wordsSum)

console.clear()


const people = [
	{ name: "Candice", age: 25 },
	{ name: "Tammy", age: 30 },
	{ name: "Allen", age: 49 },
	{ name: "Nettie", age: 21 },
	{ name: "Stuart", age: 17 }
];


// sum up all the ages of all people

const sumAges = people.reduce(function (sum, person) {
	return sum + person.age
}, 0)

console.log(sumAges)

const product = {
	name: "AmazonBasics Apple Certified Lightning to USB Cable",
	price: 7.99,
	manufacter: "Amazon",
	reviews:
		[
			{
				user: "Pavel Nedved",
				comments: "It was really usefull, strongly recommended",
				rate: 4
			},
			{
				user: "Alvaro Trezeguet",
				comments: "It lasted 2 days",
				rate: 1
			},
			{
				user: "David Recoba",
				comments: "Awesome",
				rate: 5
			},
			{
				user: "Jose Romero",
				comments: "Good value for money",
				rate: 4
			},
			{
				user: "Antonio Cano",
				comments: "It broked really fast",
				rate: 2
			},
		]
}

// sum up all the rates of this product using reduce

// const rates = 


const rates = product.reviews.reduce(function (sum, review) {
	return sum + review.rate
}, 0)

console.log(rates)
console.clear()

// filter - iterates over an array and returns a new array
// containing all the elements that match the provided function 

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8]

// filter out the even numbers

const evens = nums3.filter(function (num) {
	// if (num % 2 === 0) {
	// 	return true
	// } else {
	// 	return false
	// }
	// shorter - use the boolean expression directly
	return num % 2 === 0
})
console.log(evens)

const largerThanThree = nums3.filter(function (num) {
	return num > 3
})
console.log(largerThanThree)

const places = [
	{
		title: "Awesome Suite 20' away from la Rambla",
		price: 200,
		type: "Private Room",
		pool: true,
		garage: false
	},
	{
		title: "Private apartment",
		price: 190,
		type: "Entire Place",
		pool: true,
		garage: true
	},
	{
		title: "Apartment with awesome views",
		price: 400,
		type: "Entire Place",
		pool: false,
		garage: false
	},
	{
		title: "Apartment in la Rambla",
		price: 150,
		type: "Private Room",
		pool: false,
		garage: true
	},
	{
		title: "Comfortable place in Barcelona´s center",
		price: 390,
		type: "Entire place",
		pool: true,
		garage: true
	}
];

// 1. filter out all the places with a price above 300
const priceAbove300 = places.filter(function (place) {
	// if (place.price > 300) {
	// 	return true
	// } return false
	// shorter
	return place.price > 300
})

console.log(priceAbove300)
// 2. write a function getTitlesOfPlacesWithPool(){} - that gets an
// array and returns an
// array that only contains the titles of places that have a pool
function getTitlesOfPlacesWithPool(arr) {
	// filter out the pools
	const withPool = arr.filter(function (place) {
		if (place.pool) {
			return true
		} return false
		// shorter
		// return place.pool
	})
	// map to only titles
	const onlyTitles = withPool.map(function (place) {
		return place.title
	})
	// return onlyTitles
}


// function getTitlesOfPlacesWithPool(arr) {
// 	return arr.filter(function (place) {
// 		return place.pool
// 	}).map(function (place) {
// 		return place.title
// 	})
// }

const titles = getTitlesOfPlacesWithPool(places)
console.log(titles)

console.clear()

// reversing a string

const str = 'hello world'

// <array>.reverse() -> reverses an array
const arr = [1, 2, 3]
arr.reverse()
console.log(arr)

// change a string to an array -> split()
const splitArr = str.split('')
// you can use split to calculate the num of occurences
// in a string
const numOfL = str.split('l').length - 1
console.log(numOfL)
console.log(splitArr)


// reverse the created array 
splitArr.reverse()
console.log(splitArr)

// change an array to a string -> <array>.join()
const reversed = splitArr.join('*')
console.log(reversed)

// reversing a string in one line
const s = 'rick sanchez'

const rev = s.split('').reverse().join('')
console.log(rev)