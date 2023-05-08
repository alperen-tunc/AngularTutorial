import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTutorial';
  myVideoID = 42;
  myAktiv = 'aktiv';

  myClick2(){
    window.alert("funktioniert...")
  }
}
