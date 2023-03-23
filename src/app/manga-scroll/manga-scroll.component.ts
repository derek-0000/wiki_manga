import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manga-scroll',
  templateUrl: './manga-scroll.component.html',
  styleUrls: ['./manga-scroll.component.scss'],
  standalone:true,
  imports:[IonicModule, CommonModule, RouterModule]
})
export class MangaScrollComponent  implements OnInit {
  @Input() data?:any[];
  @Input() title?:string;

  constructor() {

  }

  ngOnInit() {
    console.log(this.data)
  }

}
