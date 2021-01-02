async function printnln(...val) {
	if (val[0] !== NaN) {
		var n = val[0];
		var l = val.length;
		var str = "";
		for (let i = 0; i < n; i++) {
			str += `\n`;
		}
		for (let i = 1; i < l - 1; i++) {
			console.log(val[i], str);
		}
		console.log(val[l - 1]);
	} else {
		for (i of val) {
			console.log(`${i}`);
		}
	}
}

module.exports = printnln;
