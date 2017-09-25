import { Component,  Inject } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public isCollapsed = true;
  public isCollapsed1 = false;

  title = 'Risk Editor';


}
