import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-binding-task';
  isButtonDisabled:boolean = false;
  textToBeDisplayed:string = "";
  someOneIsTyping(event:any){
    this.isButtonDisabled=false;
    this.textToBeDisplayed = event.target.value;
  }
  buttonGotClicked(event:any){
    if(this.textToBeDisplayed === "submitted" ){
      this.isButtonDisabled=true;
   }
  }
}
