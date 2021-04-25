import { AbstractControl } from "@angular/forms";

export function checkQuantity(control:AbstractControl)
{
  const Quantity=  control.get('Quantity');
   console.log(Number.parseInt( Quantity.value))
  if(Quantity.value!=null&&(parseInt( Quantity.value)!=0) && ( parseInt(Quantity.value))<0)
  {
      return {'q_valid':true}
  }
 
  
   return null;
}