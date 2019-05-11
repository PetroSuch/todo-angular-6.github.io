import {ElementRef, Output,Input, Directive,HostListener, OnChanges, EventEmitter} from '@angular/core';

@Directive({
  selector: '[requireInput]'
})
export class RequiredDirective implements OnChanges {
  @Output()validate  =  new EventEmitter();
  @Input("conditionRequired") conditionRequired: boolean;
  constructor(private element: ElementRef){
      
  }
  ngOnChanges(){
    let value = this.element.nativeElement.value
    setTimeout(()=>{
      let value = this.element.nativeElement.value
      if(this.conditionRequired && value == ''){
        this.validate.emit(false)
        this.element.nativeElement.classList.add('error-b')
      }else{
        this.validate.emit(true)
        this.element.nativeElement.classList.remove('error-b')
      }
    },200)
   
  }
   @HostListener("keyup", ["$event"]) 
   keyup(event){
    let value = this.element.nativeElement.value
    if(value == '' && this.conditionRequired){
      this.validate.emit(false)
      this.element.nativeElement.classList.add('error-b')
    }else{
      this.validate.emit(true)
      this.element.nativeElement.classList.remove('error-b')
    }
   }
}