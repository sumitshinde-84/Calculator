let str ='';
let exp=''
let num='';
let num2='';
let opt='';
let result;
bool = false
let expHistory = []
expHistory.length=50


let inputBox = document.querySelector('.input-f');
inputBox.style='text-align: right;align-item:center;'

let para =document.createElement('p')
inputBox.appendChild(para)
para.style='font-size:30px'

let breakT = document.createElement('br');
inputBox.appendChild(breakT)

let para2 = document.createElement('p');
inputBox.appendChild(para2);
para2.style='font-size:50px'


// events of digit section

let one = document.querySelector('.one')
one.addEventListener('click',getOne);

let two = document.querySelector('.two');
two.addEventListener('click',getTwo);

let three = document.querySelector('.three');
three.addEventListener('click',getThree)

let four = document.querySelector('.four');
four.addEventListener('click',getFour);

let five = document.querySelector('.five');
five.addEventListener('click',getFive);

let six = document.querySelector('.six');
six.addEventListener('click',getSix);

let seven = document.querySelector('.seven')
seven.addEventListener('click',getSeven)

let eight= document.querySelector('.eight');
eight.addEventListener('click',getEight)

let nine = document.querySelector('.nine')
nine.addEventListener('click',getNine);

let zero = document.querySelector('.zero')
zero.addEventListener('click',getZero)

let zeroD = document.querySelector('.d-zero')
zeroD.addEventListener('click',getDZero)

// let auto = document.querySelector('.auto')
// auto.addEventListener('click',getAutoRpl)


// events of sign section 


let decimal = document.querySelector('.decimal')
decimal.addEventListener('click',getPoint)

let plus = document.querySelector('.plus')
plus.addEventListener('click',getPlus)

let min =document.querySelector('.min')
min.addEventListener('click',getMin)

let Devide = document.querySelector('.divide');
Devide.addEventListener('click',getDevide)

let multiply = document.querySelector('.mul');
multiply.addEventListener('click',getMultiply);

let mod = document.querySelector('.mod');
mod.addEventListener('click',getMod)

let root = document.querySelector('.root')
root.addEventListener('click',getRoot)

let eql = document.querySelector('.isEql')
eql.addEventListener('click',getEqual)


// events for some function keys

let On = document.querySelector('.ON');
On.addEventListener('click',getOn)

let signChange = document.querySelector('.signCh')
signChange.addEventListener('click',getSignChange)


let backSpace = document.querySelector('.clear')
backSpace.addEventListener('click',getBackSpace)


// function keys section 

function getSignChange(){
    if(str.includes('-')){
        str =str.split('')
        console.log(str)
        str.shift('-')
        str =str.join()
        str = str.replace(',','')
        para2.textContent=`${str}`
        console.log(str)
    }
    else if(!str.includes('-')){
        str =str.split('')
        console.log(str)
        str.unshift('-')
        console.log(str)
        
        str =str.join()
        str = str.replace(',','')
        para2.textContent=`${str}`
        console.log(str)
    }
}     



function getOn(){
    
    
    para2.textContent=`0`
    str=''
    opt=''
    exp=''
    num=''
    num2=''
    On.style.background='red'
     para.textContent=''
     if(para2.textContent=='0'){
     setTimeout(getOff,10000) ;}
    
}   

function getOff(){
    
    
    para2.textContent=``
    str=''
    On.style.background='red'
     para.textContent=''  
    
}     


function getBackSpace(){

    let paraStr = para2.textContent
    let paraStr2 = paraStr.split('')
    
    console.log(paraStr2)
    paraStr2.pop();
    
    console.log(paraStr2)
    paraStr =paraStr2.join('');
    
        str=paraStr
    
    console.log(paraStr2)
    para2.textContent=`${paraStr}`
    
    } 

// digit keys section 


function getOne(){
    
   if(bool==true){
    str=''
    para2.textContent=`${str}`
    bool=false
   }
    str+='1'
    para2.textContent=`${str}`
       
}


function getTwo(){
   
    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='2'
    para2.textContent=`${str}`
    
}


function getThree(){
    
    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='3'
    para2.textContent=`${str}`

}



function getFour(){
    
    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='4'
    para2.textContent=`${str}`

}


function getFive(){
   
    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='5'
    para2.textContent=`${str}`
   
}


function getSix(){

    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='6'
    para2.textContent=`${str}`

}


function getSeven(){
   
    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='7'
    para2.textContent=`${str}`
 
}


function getEight(){

    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='8';
    para2.textContent=`${str}`
   
}

function getNine(){

    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='9';
    para2.textContent=`${str}`
      
}


function getZero(){

    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='0';
    para2.textContent=`${str}`
        
}

function getDZero(){

    if(bool==true){
        str=''
        para2.textContent=`${str}`
        bool=false
       }
    str+='00';
    para2.textContent=`${str}`

}


// operation section or symbols section 


function getPoint(){

    if(str.includes('.')){
        return
    }

    str+='.';
    para2.textContent=`${str}`

}


function getPlus(){
    
    if(para.textContent!=''){
        para.textContent=''
        para.textContent=`${result}`
    }

    if(num!=''){
        num2=str
        exp+=num2;
        para2.textContent=`${num2}`
        cal(num,num2,opt)
        exp=''
        num=para2.textContent;
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='+'
        exp+=opt
    }else{
        num=str
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='+'
        exp+=opt
    }
  ;
}


function getMin(){

    if(para.textContent!=''){
        para.textContent=''
        para.textContent=`${result}`
    }

    if(num!=''){
        num2=str
        exp+=num2;
        para2.textContent=`${num2}`
        cal(num,num2,opt)
        exp=''
        num=para2.textContent;
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='-'
        exp+=opt
    }else{
        num=str
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='-'
        exp+=opt
    }
  
}


function getDevide(){
    if(para.textContent!=''){
        para.textContent=''
        para.textContent=`${result}`
    }

    if(num!=''){
        num2=str
        exp+=num2;
        para2.textContent=`${num2}`
        cal(num,num2,opt)
        exp=''
        num=para2.textContent;
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='/'
        exp+=opt
    }else{
        num=str
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='/'
        exp+=opt
    }
    
  }


  function getMultiply(){
    
    if(para.textContent!=''){
        para.textContent=''
        para.textContent=`${result}`
    }

    if(num!=''){
        num2=str
        exp+=num2;
        para2.textContent=`${num2}`
        cal(num,num2,opt)
        exp=''
        num=para2.textContent;
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='X'
        exp+=opt
    }else{
        num=str
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='X'
        exp+=opt
    }
    
  }



  function getMod(){
   
    if(para.textContent!=''){
        para.textContent=''
        para.textContent=`${result}`
    }

    if(num!=''){
        num2=str
        exp+=num2;
        para2.textContent=`${num2}`
        cal(num,num2,opt)
        exp=''
        num=para2.textContent;
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='%'
        exp+=opt
    }else{
        num=str
        exp+=num;
        para2.textContent=`${num}`
        str=''
        opt='%'
        exp+=opt
    }

  }


  function getRoot(){
   
    if(para.textContent!=''){
        para.textContent=''
        para.textContent=`${result}`
    }
      num=str
    para.textContent=`root of ${num}`
     cal(num,'0.5','root')
 
  }


function getEqual(){
    
   num2=str;
   exp+=str;
   cal(num,num2,opt)
   para.textContent=`${exp}`
   expHistory.unshift(exp)
   if(bool!=false){
    bool = true;
   exp=''
   para.textContent=`${exp}`
   }

}


// calculation function which does various operations


function cal(num,num2,opt){
    num =parseFloat(num)
    num2=parseFloat(num2)

    para.textContent=`${exp}`

switch(opt) {

    case '+':
        result = num+num2
        break;

    case '-':
        result = num-num2
        break;
    
    case '/':
        result = num/num2
        break;

    case 'X':
        result = num*num2
        break;

    case '%':
        result = num%num2
        break;

    case 'root':
        result = num**num2
        break;
           
} 

if(result>99999999999){
    
    alert("please try to do small calculations")
     
   
}else{
    if(String(result).includes('.')){
result= result.toFixed(4)

}

para2.textContent=`${result}`

bool = false;
result = String(result)

}


}

// function getAutoRpl(i){

//     for(let i=0;i<expHistory.length;){

//         para2.textContent=`${expHistory[i]}`
       
//        setTimeout(incerementI,600)
//        function incerementI(i){
//          i++
           
//        }
//     }


// }

  







