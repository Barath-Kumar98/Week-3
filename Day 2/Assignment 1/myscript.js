function fibonacci() {
    var v1 = document.getElementById("input1").value;
    n1 = 1;
    n2 = 1;
    n3 =0;
    var result = document.getElementById("demo");
    result.innerHTML = n1 + "<br>";
    result.innerHTML += n2 + "<br>";
    for (i=1;i<=parseInt(v1)-2;i++) {
       
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;

        result.innerHTML += n3 + "<br>";
        
    }
}
/* Resursive flow*/
function callRecursive() {
    var v1 = document.getElementById("input1").value;
    var result = document.getElementById("demo");
   for(i=1; i<=parseInt(v1); i++) {
    result.innerHTML += fibonacciRecursion(i) + "<br>";
   }

}

function fibonacciRecursion(n) {
    if(n == 0){
		return 0;
	}
	if(n == 1 || n == 2){
			return 1;
		}
	return fibonacciRecursion(n-2) + fibonacciRecursion(n-1);
}


