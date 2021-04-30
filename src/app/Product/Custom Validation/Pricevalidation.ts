import { AbstractControl } from "@angular/forms";

export function checkPrice(control:AbstractControl)
{
  const Price=  control.get('price');
 
   if(Price.touched)
  {
    console.log("touch");//for test
     if((isFinite(Price.value)))
   { console.log("number");//for test
     if(parseInt(Price.value)>0)
     {console.log("great than zero");//for test
       return  {'Pvalid':true}
      }
  }
}
 
  return null;
 
  
}