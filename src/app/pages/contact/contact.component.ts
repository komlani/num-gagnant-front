import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  title = '';
  message = '';

  constructor(private afs: AngularFirestore) { 
    this.initialize()
  }

  ngOnInit(): void {
  }

  initialize() {
    this.name = '';
    this.email = '';
    this.title = '';
    this.message = '';
  }

  onSubmit() {
    this.afs.collection('messages').add({ name: this.name, email: this.email, title: this.title, message: this.message}).then(
      () => {
        this.initialize()
        // console.log(res.id)
        window.alert('Envoyé avec success!')
      }
    ).catch( err => {
      window.alert('Echec lors de l\'envoi. Veuilez reessayer plus tard!')
    })
  }

}
