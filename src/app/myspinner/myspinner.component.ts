import { Component } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-myspinner',
  standalone: true,
  imports: [ NgxSpinnerModule ],
  template: `
  
    <ngx-spinner  bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#48f3ee" type = "square-jelly-box" [fullScreen] = "true"><h1 style="color: white" > Rithvik... </h1></ngx-spinner>
  `,
  styles: ``
})
export class MyspinnerComponent {
  constructor(private spinner: NgxSpinnerService) {}

    
  ngOnInit(){
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    }
}
