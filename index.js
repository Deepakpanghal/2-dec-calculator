    let calculator = {
           'add' : function(){
           let addition= this.key1+this.key2;
            console.log(addition);
         },
           'subtract':function(){
            let subtraction=this.key1-this.key2;
            console.log(subtraction);
        },
            'multiply': function(x,y){
            let multiplication=this.x * this.y;
            console.log(multiplication);
         },
            'divide':function(){
             let division= this.key1/this.key2;
             console.log(division);
         },
       };
            let data_set1={
           'key1':53,
           'key2':44,
         }
            let data_set2={
            'x':28,
            'y':32,
         }

            let bind = calculator.add.bind(data_set1);
                       bind();
     
             calculator.add.call(data_set1);
             calculator.subtract.call(data_set1);
             calculator.multiply.call(data_set2);
             calculator.divide.call(data_set1);
