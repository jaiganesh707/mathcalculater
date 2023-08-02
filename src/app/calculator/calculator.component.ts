import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  result:number=0;

  selectedValue:String='';
  message:String='please enter one Operation';
  value1:number=0;
  value2:number=0;


  doCalculate()
  {
    if(this.selectedValue=="add"){
      this.result=this.value1+this.value2;
      console.log(this.result);
    }
    else if (this.selectedValue=="sub"){
      this.result=this.value1-this.value2;
      console.log(this.result);
    }
    else if (this.selectedValue=="mul"){
      this.result=this.value1*this.value2;
      console.log(this.result);
    }
    else if (this.selectedValue=="div"){
      this.result=this.value1/this.value2;
      console.log(this.result);
    }
    else {   
      alert(this.message)
      console.log(this.message);
    }
  }
  getSelectedValue(event:any){
    this.selectedValue=event.target.value;  
    console.log(this.selectedValue);
  }




  
  
}
