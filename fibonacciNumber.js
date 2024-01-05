function fibonacciNumber(n){
    if(n == 0){
        console.log(0);
        return;
    }
    if(n >= 1){
        console.log(0);
        console.log(1);
    }

    let last = 1;
    let secondLast = 0;
    for(i = 2; i <= n; i++){
        let ans = last + secondLast;
        console.log(ans);
        secondLast = last;
        last = ans;
    }
}

fibonacciNumber(6);