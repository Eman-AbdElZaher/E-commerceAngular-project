import { AbstractControl } from "@angular/forms";

export function checkImg(control:AbstractControl)
{
  const Img=  control.get('Img');
   
  if(Img.dirty )
  {
   let extention=  Img.value;
  let dot= extention.slice(-4);
  if(dot=='.')
      return Img && dot[0]!='.'
  ? {'img_valid':true}
  :null;
  }
 
  return null;
}

