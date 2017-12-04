function phaseColor() {
 document.getElementById('AVL').className = 'colorchangeone'; 

 setInterval(function(){

  if (document.getElementById('AVL').className == 'colorchangeone' || document.getElementById('AVL').className == 'colorchange') {

   document.getElementById('AVL').className = 'colorchangetwo'; 

  } else if (document.getElementById('AVL').className == 'colorchangetwo') {

   document.getElementById('AVL').className = 'colorchangethree'; 

  } else if (document.getElementById('AVL').className == 'colorchangethree') {

   document.getElementById('AVL').className = 'colorchangefour'; 

  } else if (document.getElementById('AVL').className == 'colorchangefour') {

   document.getElementById('AVL').className = 'colorchangefive'; 

  } else if (document.getElementById('AVL').className == 'colorchangefive') {

   document.getElementById('AVL').className = 'colorchange'; 

  }
  }, 2000); 
}