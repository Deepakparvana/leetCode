// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


var climbStairs = function(n) {
  
    if (n <= 3) return n;
  
    let a = 1, b = 2;
  
    for(let i=3; i<=n; i++){
      let temp = a+b;
      a = b
      b = temp
    }
    
    return b;
    
  };


  console.log(climbStairs(3))