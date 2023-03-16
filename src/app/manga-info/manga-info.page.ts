import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-manga-info',
  templateUrl: './manga-info.page.html',
  styleUrls: ['./manga-info.page.scss'],
})
export class MangaInfoPage implements OnInit {

  id: any;
  manga: any = {
    id_manga: 1,
    name_manga: "Shingeky no Kyojin",
    id_author: 1,
    cap_manga: 139,
    genre_manga: "Shounen",
    debut_manga: "2009-09-09T00:00:00.000Z",
    cover_manga: "https://mangadex.org/covers/304ceac3-8cdb-4fe7-acf7-2b6ff7a60613/12158456-0511-468b-be37-8d2aa3772723.png",
    status_manga: "Finished",
    name_author: "Hajime Isayama"
  }
  saved: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  formatDate(date: any) {
    return moment(date).format('YYYY-MM-DD')
  }

  toggleButton() {
    this.saved = !this.saved;
  }

}
