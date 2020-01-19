function reverse(string){

    var str='';
    for(let i=string.length -1 ; i>=0; i--){
      
        str= str + string[i]; 

    
    }
    return str;
}

reverse("Hello");

var string23=""
function reverseRecursive(str){


    if(str.length ===1){
        return str[0] ;
    }
    else{
           let callback = reverseRecursive(str.slice(1))  + str[0];
          return   callback;
    }

}

var re = reverseRecursive("Hello");
console.log(re);



function permuationRecursion(string){

    var result =[];
    if(string.length ===1){
      result.push(string);
      return result;
    }

   for(let i=0; i< string.length; i++){

      let firstChar = string[i];
      let chartLeft = string.slice(0,i) + string.slice(i+1);
      let innerPermutation = permuationRecursion(chartLeft);
      
      for(let j=0; j< innerPermutation.length; j++){
          
        result.push(firstChar + innerPermutation[j]);  
    }


   }

   return result;

}

let perm =permuationRecursion("abc");
console.log(perm);

