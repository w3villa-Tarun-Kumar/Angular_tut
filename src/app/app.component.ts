import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarun';
  data='i am from parent';
  formsubmitfunction(value:any){
    console.warn(value);
  }

}
