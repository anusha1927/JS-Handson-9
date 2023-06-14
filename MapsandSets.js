// Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef

//method 1
str = 'abcadeecfb';
strArr = str.split('');

for (let i = 0; i < strArr.length - 1; i++) {
	for (let j = i + 1; j < strArr.length; j++) {
		if (strArr[i] == strArr[j]) {
			strArr.splice(j, 1);
			j--;
		}
	}
}
console.log(strArr.join(''));

//method 2
strSet = new Set([...str]);
console.log(...strSet);



// Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

//method 1
let str = "abcadeecfb";
        let map = new Map();
        for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                let value = map.get(str[i]);
                map.set(str[i], value + 1);
            } else {
                map.set(str[i], 1);
            }
        }
        for (let [k, v] of map) {
            console.log(k + "=" + v);
        }
		
//method 2
function countAlphabets(str){
	const alphabetCount = {}
	for(let char of str){
		if (char in alphabetCount)	 alphabetCount[char]++
		else alphabetCount[char] = 1
	}
	for (let char in alphabetCount){
		console.log(`${char} = ${alphabetCount[char]}`);
	}
}
countAlphabets("abcadeecfb")

//method 3
function countAlphabets(str){
	const alphabetCount = new Map()
	for(let char of str){
		if (alphabetCount.has(char))	 alphabetCount.set(char, alphabetCount.get(char)+1)
		else alphabetCount.set(char, 1)
	}
	for (let [char, count] of alphabetCount){
		console.log(`${char} = ${count}`);
	}
}
countAlphabets("abcadeecfb")