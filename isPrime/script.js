
let boool = true;
while(boool){
	var numberCheck = prompt("enter number");
	if(isNaN(numberCheck)){
	 alert(numberCheck + " is not a number");
	 }else{
		boool=false;
	}
}
bool=null;
let combinetionCount=(function factorial (n) {
	if(n==0){
		return 1;
	}else{
		return n *  factorial(n-1);
	}
}(numberCheck.length));


function primeNumber(number){
	if(number==2){
		return true;
	}else if(number>1){
		for (var i = Math.ceil(number/2); i > 1; i--) {
			if(number%i!=0){
				return true;
			}else{
				return false;
			}
		}
	}else{
		return false;
	}

};
for(let i=0;i<combinetionCount;i++){

}
console.log(primeNumber(numberCheck));
