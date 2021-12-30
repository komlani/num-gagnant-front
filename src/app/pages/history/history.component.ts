import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  data: any[] = [];
  firstItem: any;

  constructor(private afs: AngularFirestore)  {
    afs.collection('numeros', ref => ref.orderBy('createdAt', 'desc').limit(25)).get().subscribe(
      res => {
        const arr: any[] = []
        res.docs.forEach( item => {
          arr.push(item)
        })
       if (arr.length) {
         this.data = arr;
       }
      }
    )
   }

  ngOnInit(): void {
  }

}
