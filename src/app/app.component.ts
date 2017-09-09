import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Risk Editor';
  dynamicTabs:Array<string> = ['Dynamic1','Dynamic2'];

  addDynamictTab():void{

    this.dynamicTabs.push('Dynamic' + this.dynamicTabs.length)
  }
}
