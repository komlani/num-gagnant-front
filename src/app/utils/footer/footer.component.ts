import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  date: number;

  constructor(private titlePage:Title){
    this.date = new Date().getFullYear();
  }

  setTitle(title:string){
    this.titlePage.setTitle(title  + ' - Numéro Gagnant');
  }

  ngOnInit(): void {
  }

}
