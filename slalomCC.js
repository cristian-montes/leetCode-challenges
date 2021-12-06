//it is a circular printer wheel with the letters A through Z in sequence. It wraps so A and Z are adjecent. The printer has a pointer that is initially at 'A'. moving from any character takes a second. It can move in any direction. Given a string of letters, what is the minimum time needed to print the string. Assume the printing itself does not take any time. Only consider the time it takes for the printer to move.

function getTimes(s) {
	let vowels = []
	const strings = [...s];

	for (let i = 1; i <= 26; i++) {
		let values = i - 1
		let keys = 64 + i

		if (values <= 25) {
			vowels.push(String.fromCharCode(keys))
		}
	}

	const str1 = vowels.indexOf('A')
	const str2 = vowels.indexOf(s[0])
	let numb = Math.min(Math.abs(str1 - str2), 26 - Math.abs(str1 - str2));

	for (let i = 1; i < strings.length; i++) {
		const str1 = vowels.findIndex((val) => val == [strings[i]])
		const str2 = vowels.findIndex((val) => val == [strings[i - 1]])
		let result = Math.abs(str1 - str2)

		if (result > 13) {
			numb += 26 - result
		} else {
			numb += result
		}
	}
    console.log(numb);
	return numb
}

// let s = "AZGB"
// getTimes(s);

