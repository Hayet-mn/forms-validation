function vowelBack(s){

    const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var regex =/[!@#$%^&*(),.?:{}|<>]/g
    if(regex.test(s)|| s===''  ){
      return false;
    }
     s.toLowerCase(0);
    var arr= s.split('');
    
    var arr2=[]
    var cr=0;
    var v=0;
    var vlr=""
    
      var n=1;
      while(n <= alph.length){
       if(n === alph.length)
      
       arr.map(function(x) {
         if(x === "c" || x === "o"){
        cr = alph.findIndex((element) => element === x )
    
          vlr =alph[cr - 1]
          if(vlr == 'c' || vlr == 'o' ||vlr == 'd' ||vlr == 'e'  ){
           arr2.push(x)
          }
          else{arr2.push(vlr);}
          }
    
    else if(x === "d" ){
     cr = alph.findIndex((element) => element === x )
     vlr =alph[cr - 3]
      if(vlr == 'c' || vlr == 'o' ||vlr == 'd' ||vlr == 'e'  ){
           arr2.push(x)
          }
          else{arr2.push(vlr);}
    
    
    }
    else if(x === "e" ){
      cr = alph.findIndex((element) => element === x )
     vlr =alph[cr - 4]
      if(vlr == 'c' || vlr == 'o' ||vlr == 'd' ||vlr == 'e'  ){
           arr2.push(x)
          }
          else{arr2.push(vlr);}
     
    }
    else if(x === "a" || x === "i" || x === "u" || x === "y"){
      cr = alph.findIndex((element) => element === x )
      if(cr - 5 <= 0){v=(alph.length)-5;
        vlr =alph[v]}
       else {vlr =alph[cr - 5];}
      if(vlr == 'c' || vlr == 'o' ||vlr == 'd' ||vlr == 'e'  ){
           arr2.push(x)
          }
          else{arr2.push(vlr);}
    
    }
    
     else{cr = alph.findIndex((element) => element === x )
           if(cr + 9 > alph.length ){
            v=(cr+9)-alph.length 
            vlr =alph[v]          }
            else{vlr =alph[cr + 9]}
      if(vlr == 'c' || vlr == 'o' ||vlr == 'd' ||vlr == 'e'  ){
           arr2.push(x)
          }
          else{arr2.push(vlr);}
     }
       })
      
    
    n = n+1 ;
    
    }
    
    
    
    return arr2;
    
    
    }
    
    console.log(vowelBack("rr"))
    
    