import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDS_thel3UmAcBA2feaOIl2q-dkPdQ70gQ",
      authDomain: "ng-recipe-book-80661.firebaseapp.com",
    });
  }
}
