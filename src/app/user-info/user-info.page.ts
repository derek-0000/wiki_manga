import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  /* list:{id:number, cover:string, name:string}[] = [
    {"id":0,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/58233f610abc458778ac5726573c8e0a.jpe", "name":"Wonder Egg Priority"},
    {"id":1,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48b9c687382510e7ae195f61fee65c61.jpe", "name":"Kaguya Sama - Love is War"},
    {"id":2,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpe", "name":"Fullmetall Alchemist"},
    {"id":3,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b407952122968b243e5c1e2b71d630d9.jpe", "name":"Lycoris Recoil"},
    {"id":4,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/dc24870ae3c042db983cae330ffe6014.jpe", "name":"Horimiya"},
    {"id":5,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0d05002119251179e11dac9cadeaf155.jpe", "name":"Bocchi The Rock"},
    {"id":6,"cover":"https://es.web.img3.acsta.net/pictures/22/07/04/14/30/5500974.jpg", "name":"Call of the Night"},
    {"id":7,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe", "name":"Chainsaw Man"},
    {"id":8,"cover":"https://easycdn.es/1/series/p/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai_3684.jpg", "name":"Bunny-Girl Senpai"},
    {"id":9,"cover":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpe", "name":"Jujutsu Kaisen"},
  ] */

  manga_url:string="http://192.168.137.212:3000/mangas/read_all"
  list_url:string="http://192.168.137.212:3000/read_list";
  li:any;
  data=[];
  list=[];
  user:string="Wiki2";

  showIndex:number = 1
  constructor(public http : HttpClient) { }

  ngOnInit() {
    this.http.get(this.manga_url).subscribe(res =>{
      this.li=res;
      this.data=this.li.success;
      console.log(this.data);
    });
    this.http.get(this.list_url).subscribe(res =>{
      this.li=res;
      this.list=this.li.success;
      console.log(this.list);
    });
  }
}
