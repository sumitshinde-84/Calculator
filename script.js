let str ='';
let num='';
let num2='';
let opt='';
let rest=[];
let n = ['1','2','3', '4', '5', '6', '7' ,'8', '9','0']
count=0;
point=0;

bool = false
let result;
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



let eql = document.querySelector('.isEql')
eql.addEventListener('click',getEqual)

let On = document.querySelector('.ON');
On.addEventListener('click',getOn)


// (e)=>{
    
//     str=''
//     para2.textContent=`${str}`
//     e.target.addEventListener('click',(e)=>{
    
//         str='0'
//         para2.textContent=`${str}`
//         return

// })
        
// })
// }  

function getOn(){

    str='0'
    para2.textContent=`${str}`
    On.style.background='red'
       
    
}   
   
function getOff(){

    str=''
    para2.textContent=`${str}`
    
       
    
}  
    



function getOne(){
    
    str+='1'
    para2.textContent=`${str}`
    
       
    
}

function getTwo(){
   
    str+='2'
    
    para2.textContent=`${str}`
       
    
}

function getThree(){
    
    str+='3'
    para2.textContent=`${str}`
    
       
    
}

function getFour(){
    
    str+='4'
    para2.textContent=`${str}`
    
       
    
}


function getFive(){
   
    str+='5'
    para2.textContent=`${str}`
    
       
    
}
function getSix(){

    str+='6'
    para2.textContent=`${str}`
    
       
    
}

function getSeven(){
   
    str+='7'
    para2.textContent=`${str}`
    
       
    
}

function getEight(){
    
    
    str+='8';
    para2.textContent=`${str}`
    
        
    
}

function getNine(){
    
    str+='9';
    para2.textContent=`${str}`
    
        
    
}

function getZero(){
    
    str+='0';
    para2.textContent=`${str}`
    
        
}

function getDZero(){
   
    str+='00';
    para2.textContent=`${str}`
}

function getPoint(){
   
    str+='.';
    para2.textContent=`${str}`
}

function getPlus(){
    if(num!=''){
        num2=str
        para2.textContent=`${num2}`
        cal(num,num2,opt)
        num=para2.textContent;
        para2.textContent=`${num}`
        str=''
    }else{
        num=str
        para2.textContent=`${num}`
        str=''
    }
  opt='+'
}

function getMin(){

    
    if(num!=''){
        num2=str
        cal(num,num2,opt)
        num=para2.textContent;
        para2.textContent=`${num}`
        str=''
    }else{
        num=str
        str=''
    }
  opt='-'
  
  
}

function getDevide(){
    
    if(num!=''){
        num2=str
        cal(num,num2,opt)
        num=para2.textContent;
        para2.textContent=`${num}`
        str=''
    }else{
        num=str
        str=''
    }
  opt='/'
    
  }

  function getMultiply(){
    
    if(num!=''){
        num2=str
        cal(num,num2,opt)
        num=para2.textContent;
        para2.textContent=`${num}`
        str=''
    }else{
        num=str
        str=''
    }
  opt='X'
    
    
  }

  function getMod(){
   
    if(num!=''){
        num2=str
        cal(num,num2,opt)
        num=para2.textContent;
        para2.textContent=`${num}`
        str=''
    }else{
        num=str
        str=''
    }
  opt='%'

  }

function getEqual(){
    
   num2=str;
   cal(num,num2,opt)
   
       
}




// function filterOP(str,num){
   
   
//     para.textContent=`${str}`
//     console.log({str})

//     str = str.split('');
//     console.log({str})


// for(i=0;i<str.length;i++){
   
//     if(str[i] in n && count==0  && num==''){
//    num+=str[i];
//    console.log({num})
//     }
 
//    else if(str[i]=='.' && point==0){
//     num+=str[i];
//     point++;
//     console.log({num})
//     }

//     else if((str[i]=='+' || str[i] =='-' || str[i] =='/' || str[i] =='x' || str[i] =='%') && count==0)
//     {
//         opt+=str[i]
//         bool=true
//         count++;
//         console.log({opt})
//         continue;
//     }else if(str[i] in n  && count>0)
//     {

//         num2+=str[i];
//         console.log({num2})

//     }else if(count==1 && (str[i]=='+' || str[i] =='-' || str[i] =='/' || str[i] =='x' || str[i] =='%')  )
//     {

//        rest+=str.slice(i)
//        console.log(rest)
//        break;
//     }
//     else if(str[i]=='.' && point ==1)
//     {
        
//     num2+=str[i]
//     console.log({num2})
// }




//  cal(num,num2,opt)

// }


function cal(num,num2,opt){
    num =parseFloat(num)
    num2=parseFloat(num2)



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

          
} 



para2.textContent=`${result}`
result = String(result)


}



  







