//1. var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5]sắp xếp theo thứ tự tăng dần và giảm dần. In ra các kết quả.
//tăng dần
 var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
 myNumbers.sort(function(a, b){return a - b});
 console.log(myNumbers);
  //giảm dần
  var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
 myNumbers.sort(function(a, b){return b - a});
 console.log(myNumbers);

 //2. Dùng forEach() để in ra các số nhỏ hơn 0 ở mảng myNumbers.
 var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
  myNumbers.forEach(function(e){  
      if(e < 0){
          console.log(e); 
      }     
   })

   //3. Dùng while() và do while() để in ra các số lớn hơn 0 ở mảng myNumbers
   //while
   var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
    
   var i = 0;
   while (i < myNumbers.length); {
       if (myNumbers[i] > 0){
           console.log(myNumbers[i]);
       i++;
       }
    }
     // do while
     var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
     var i = 0;
     do {
         if (myNumbers[i] > 0){
            console.log(myNumbers[i]);
        i++ 
        
         } 
         
        
    } while (i < myNumbers.length)
    

    //4. Dùng if..else và switch..case để in ra theo điều kiện sau:các số  ở mảng myNumbers chia hết cho 3: in ra: <Số> chia hết cho 3. ví dụ: 8 chia cho 3 dư 2 (mỗi số 1 dòng) ,tương tự với chia hết cho 3 dư 1, và dư 2
    //if ..else
    var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
    var i = 0;
    while (i < myNumbers.length){
        if (myNumbers[i] % 3 == 0) {
        console.log(myNumbers[i] + ' ' + 'chia hết cho 3');
        i++;
    
      }else if (myNumbers[i] % 3 == 1){
          console.log(myNumbers[i] + ' ' + 'chia 3 dư 1');
         i++;
      }else{
          console.log(myNumbers[i] + ' ' +'chia 3 dư 2');
          i++;
      }
    }
    
    //switch..case
    var myNumbers = [3, 5, 12, 1, 4, -4, 8, 5];
    var i = 0;
    while (i < myNumbers.length){
        switch (myNumbers[i]) {
            case myNumbers[i] % 3 == 0:
                console.log(myNumbers[i] + ' ' + 'chia hết cho 3')
                i++;
                break;
            case myNumbers[i] % 3 == 1:
                console.log(myNumbers[i] + ' ' + 'chia 3 dư 1')
                i++;
                break;
            default:
                console.log(myNumbers[i] + ' ' + 'chia 3 dư 2')
                i++;
                break;
    }
}
    
    

    