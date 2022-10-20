


// let expr=''l;


// let inputBox = document.querySelector('.input-f');
// inputBox.style='text-align: right;align-item:center;'


// let para =document.createElement('p')
// inputBox.appendChild(para)
// para.style='font-size:30px'
// let breakT = document.createElement('br');
// inputBox.appendChild(breakT)

// let para2 = document.createElement('p');
// inputBox.appendChild(para2);
// para2.style='font-size:50px'

// let sevenBtn = document.querySelector('.seven')
// sevenBtn.addEventListener('click',seven)

// let eightBtn = document.querySelector('.eight')
// eightBtn.addEventListener('click',eight)

// let nineBtn = document.querySelector('.nine')
// nineBtn.addEventListener('click',nine)

// let fourBtn = document.querySelector('.four');
// fourBtn.addEventListener('click',four)

// let fiveBtn = document.querySelector('.five')
// fiveBtn.addEventListener('click',five)

// let sixBtn = document.querySelector('.six')
// sixBtn.addEventListener('click',six)

// let oneBtn = document.querySelector('.one')
// oneBtn.addEventListener('click',one)

// let twoBtn = document.querySelector('.two')
// twoBtn.addEventListener('click',two)

// let threeBtn = document.querySelector('.three');
// threeBtn.addEventListener('click',three)

// let zroBtn = document.querySelector('.zero');
// zroBtn.addEventListener('click',zero)

// let dZeroBtn = document.querySelector('.d-zero');
// dZeroBtn.addEventListener('click',Dzero)

// let decimalBtn = document.querySelector('.decimal');
// decimalBtn.addEventListener('click',decimal)

// let DevideBtn = document.querySelector('.devide');
// DevideBtn.addEventListener('click',Devide)

// let multBtn = document.querySelector('.mul')
// multBtn.addEventListener('click',multiply)

// let plusBtn = document.querySelector('.plus')
// plusBtn.addEventListener('click',plus)

// let modulasBtn = document.querySelector('.mod')
// modulasBtn.addEventListener('click',mod)

// let min = document.addEventListener('.min')
// min.addEventListener('click',minus)


// let equalBtn = document.querySelector('.equal');
// equalBtn.addEventListener('click',equal)


// function decimal(){
//   expr+='.'
  
//   para.innerHTML=`${expr}`
 

// }



// function seven(){
// expr+='7+'
// para2.textContent=`${expr}`


// }

// function eight(){
//   para2.textContent=''
//   expr+='8'
//   para2.textContent=`${expr}`
 

//   }

//  function nine(){
//     expr+='9'
//     para2.textContent=`${expr}`
   
    
//     }

//   function four(){
//       expr+='4'
//       para2.textContent=`${expr}`
     
//       }
//    function five(){
//       expr+='5'
//       para2.textContent=`${expr}`
      
//       }

// function six(){

//       expr+='6'
     
//       para2.textContent=`${expr}` 
     
//       }

//    function one(){

//     expr+='1'
  
//     para2.textContent=`${expr}`    
  
//      }

//     function two(){

//       expr+='2'
   
//       para2.textContent=`${expr}`     
  
//        }

       
//      function three(){
//         expr+='3'
//       para2.textContent=`${expr}`
            
     
//          }

//          function zero(){

//           expr+='0'
        
//           para2.textContent=`${expr}`     
        
//            }

//            function Dzero(){

//             expr+='00'
//             para2.textContent=`${expr}`

//            }   
         
         
        

//  function multiply(){

//  expr+='*'
// calc(expr)
        
//      }          
 
//      function Devide(){

//       expr+='/'
//       calc(expr)
                          
             
//           }


//      function plus(){

//       expr+='+'
//       calc(expr)
                          
             
//           }

//   function auto(){

//   alert('this feature is tempeory disabled')
                   
//               }
      
//                 function mod(){

//                   expr+='%'
//                   calc(expr)
                
                          
                         
//                       }   

//                       function minus(){

//                         expr+='-'
//                         calc(expr)
                                
                               
//                             }

//                             function equal(){

//                               expr+='='
                             
                             
                          
                                      
//                             }               
                        
                            
                    

// function calc (expr) {
 
//   if(para.textContent=='+' || para.textContent=='-' || para.textContent=='/' || para.textContent=='x'   )
//   {
//     para.textContent=''    
//   para.textContent=`${opt}`
    
//       }

//   var chars = expr.split("");
//   var n = [], op = [], index = 0, oplast = true;

//   n[index] = "";

//   // Parse the expression
//   for (var c = 0; c < chars.length; c++) {

//       if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
        
//           op[index] = chars[c];
//           index++;
//           n[index] = "";
//           oplast = true;
//       } else {
//           n[index] += chars[c];
//           oplast = false;
          
//       }
  

//   // Calculate the expression
//   opt = op[0]
//   expr = parseFloat(n[0]);
  
//   firstNum = n[0]
//   secondNum = n[1]
//   // para2.innerHTML=`${secondNum}`
//   para.textContent=`${opt}`



//   for (var o = 0; o < op.length; o++) {
//       var num = parseFloat(n[o + 1]);
 
 
//       switch (op[o]) {
//           case "+":
//               expr = expr + num;
//               para.textContent='+'
//               break;
//           case "-":
//               expr = expr - num;
//               break;
//           case "*":
//               expr = expr * num;
//               break;
//           case "/":
//               expr = expr / num;
//               break;
//       }
//   }
//   expr = expr.toFixed(4)
 
 
//   return expr;
// }


   
   
// }
      





