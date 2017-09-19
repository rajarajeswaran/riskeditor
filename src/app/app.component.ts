import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapsed = true;

  title = 'Risk Editor';
  dynamicTabs:Array<string> = ['Dynamic1','Dynamic2'];

  model = {
    left: true,
    middle: false,
    right: false
  };

  addDynamictTab():void{

    this.dynamicTabs.push('Dynamic' + this.dynamicTabs.length)
  }
}
