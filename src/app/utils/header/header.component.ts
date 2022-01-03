import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isMenuCollapsed = true;
  
  constructor(private titlePage:Title){}

  setTitle(title:string){
    this.titlePage.setTitle(title  + ' - Numéro Gagnant');
    this.isMenuCollapsed = true;
  }

  ngOnInit(): void {
  }

}
