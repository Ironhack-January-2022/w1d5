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
