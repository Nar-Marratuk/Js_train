 // Рекурсивная замена %
function isEven(num){
    if(num < 0 || num === 1) return false
    if(num == 0) return true
    return isEven(num - 2)
}

// замена map

function maps(arr, func) {
    if (!Array.isArray(arr) || !arr.length || typeof func !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0, len = arr.length; i < len; i++) {
            result.push(func(arr[i]))
        } 
        return result
    }
}

//замена filter

function filters(arr, func) {
	if (!Array.isArray(arr) || !arr.length || typeof func !== 'function') return [];
	else {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			if (func(arr[i])){
				result.push(arr[i]);
			}
		}
		return result;
	}
}

//замена reduce

function filters(arr, func, startValue) {
	if (!Array.isArray(arr) || !arr.length || typeof func !== 'function') return [];
	else{
		let value = startValue !== undefined ? startValue : arr[0];
		for (let i = 0; i < arr.length; i++) {
			value = func(value, arr[i]);
		}
	}
}

