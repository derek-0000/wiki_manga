import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {environment} from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-manga-info',
  templateUrl: './manga-info.page.html',
  styleUrls: ['./manga-info.page.scss'],
})
export class MangaInfoPage implements OnInit {

  id: any;
  user: any;
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
  list: Array<Number> = [1,3,5,7];

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = await this.storage.get("name");
    console.log(this.user);
    this.getManga();
  }

  formatDate(date: any) {
    return moment(date).format('YYYY-MM-DD')
  }

  toggleSaved() {
    const params = {username: this.user, id_manga: this.id}
    try {
      if(this.saved) {
        this.http.post(`${environment.baseURL}add_list`, params).subscribe(
          (response: any) => {
            this.list.push(this.id);
          }
        )
      } else {
        this.http.put(`${environment.baseURL}remove_list`, params).subscribe(
          (response: any) => {
            const index = this.list.findIndex(id => id == this.id);
            if (index != -1) this.list.splice(index, 1);
          }
        )
      }
    } catch (error) {
      console.log(error);
    }
  }

  get saved() {
    const inList = this.list.filter(id => id == this.id);
    if (inList.length == 1) return true;
    return false;
  }

  getManga() {
    try {
      this.http.get(`${environment.baseURL}mangas/read/${this.id}`).subscribe(
        (response: any) => {
        if (response?.success) {
          this.manga = response.success[0];
        }
      })  
    } catch (error) {
      console.log(error);
    }
  }

  async getList() {
    this.list = await this.storage.get("mangas");
  }

}
