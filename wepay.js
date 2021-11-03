//----------------------------------------------------------//
function carlos(x){
    const array = [1,2,3,4,5,6,7,8,9,10,11,12];
    let a = 0;
    let idx = 0;
    
    while (a < x) {
        if (array[idx] % 2 === 0) {
            a += array[idx]
        }
        idx += 1;
    }
    console.log(a + ", " + idx);
    
    }



//----------------------------------------------------------//
    class Sample {
        constructor() {
            this.a = 1;
            this.b = 1;
        }
    
        functionOne(a) { //5
            this.b = this.b + a; //6
            
        }
    
        functionTwo(b) {//4
            for (let i = 0; i < this.b; i++) {
                this.a += b;
            }
        }
    
        print() {
            console.log(this.a + ", " + this.b);
        }
    }
    /*
    What values of x, y, and z are needed to print "25, 6"?
    
    */
    const s = new Sample();
    s.functionOne(1);
    s.functionTwo(2);
    s.functionOne(3);
    s.print();


   
//----------------------------------------------------------//
function func(a) {
    if (a <= 0) {
        return 1;
    }
    if (a % 2 == 0) {
      console.log(a)
        return a;
    } else {
        return (func(a-1) + func(a - 2));
    }
}