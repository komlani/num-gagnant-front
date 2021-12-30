import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'num-gagnant';
  data: any[] = [];
  firstItem: any;

  constructor(private afs: AngularFirestore)  {
   afs.collection('numeros', ref => ref.limit(10)).get().subscribe(
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
}
