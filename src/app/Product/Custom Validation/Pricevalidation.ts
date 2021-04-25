import { AbstractControl } from "@angular/forms";

export function checkPrice(control:AbstractControl)
{
  const Price=  control.get('Price');
  // console.log("a"+isFinite(Price.value))
  //console.log("b"+isNaN(Price.value))
   if(Price.touched)
  {
    console.log("touch");
     if((isFinite(Price.value)))
   { console.log("number");
     if(parseInt(Price.value)>0)
     {console.log("great than zero");
       return  {'Pvalid':true}
      }
  }
}
  //  else{console.log("3")
  return null;
 
  
  // if(Price.pristine )
  // {
  //     return null;
  // }
  // return Price &&Price.value>0
  // ? {'P_valid':true}
  // :null;
}