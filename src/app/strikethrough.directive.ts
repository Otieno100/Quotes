import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor( private elem:ElementRef) {
this.elem.nativeElement.style.backgroundColor = "#3CAEA3";
   }

}
