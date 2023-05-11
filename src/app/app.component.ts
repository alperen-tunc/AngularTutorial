import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ForChildComponent} from "./for-child/for-child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{
  title = 'angularTutorial';
  myVideoID = 42;
  myAktiv = 'aktiv';

  @ViewChild(ForChildComponent)
  forChild: ForChildComponent = new ForChildComponent();


  myClick2(){
    window.alert("funktioniert...")
  }

  ngAfterViewInit(): void {
    console.log(this.forChild.sait);
  }
}
