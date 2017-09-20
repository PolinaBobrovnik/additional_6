module.exports = function zeros(expression) {
  // your solution
    var count = 0; 
    var count2 = 0;
    var del5 = 0;
    var fArrMul = [];
    var arr = [];
    var fArrMulCC = [];
    var newArr;
	var exp = expression.split('*');
	for (var j=0; j<exp.length; j++) {
		var expressionArr = exp[j].split('');

  		for (var i=0; i<expressionArr.length; i++) {
  			if (expressionArr[i] === '!') {
  				if (expressionArr[i+1] !== '!') {
					newArr = (expressionArr.slice(0, i)).join('');
  					function factorial1(n) {
  						arr = [];
  						while (n>1) {
  							arr.push(n);
  							n--;
  						}
  						return arr;
					}
					fArrMul = factorial1(newArr);
				} else  {
					newArr = (expressionArr.slice(0, i)).join('');
  					function factorial2(n) {
  						arr = [];
  						while (n>=2) {
  							arr.push(n);
  							n = n-2;
  						}
  						return arr;
  					}
  					fArrMul = factorial2(newArr);
  				}	
		fArrMulCC = fArrMulCC.concat(fArrMul);
		break;
			}
		}
	}

	for (var k=0; k<fArrMulCC.length; k++) {
		if (fArrMulCC[k] % 5 == 0) {
			del5 = fArrMulCC[k]/5;
			count++
			if (del5%5 == 0){
				count++;

			}
		}
	}

	for (var k=0; k<fArrMulCC.length; k++) {
		if (fArrMulCC[k] % 2 == 0) {
			count2++;
		}
	}

	if (count2 == 0){
		count = 0;
	}
	return count;
}
	