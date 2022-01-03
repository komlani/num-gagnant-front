import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  firstItem: any;

  constructor(private afs: AngularFirestore)  {
    registerLocaleData(localeFr, 'fr');
   afs.collection('numeros', ref => ref.orderBy('createdAt', 'desc').limit(5)).get().subscribe(
     res => {
       const arr: any[] = []
       res.docs.forEach( item => {
         arr.push(item)
       })
      if (arr.length) {
        this.firstItem = arr.shift();
        this.data = arr;
      }
     }
   )
  }

  ngOnInit(): void {
  }

}
