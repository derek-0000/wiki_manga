import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-likes',
  templateUrl: './user-likes.page.html',
  styleUrls: ['./user-likes.page.scss'],
})
export class UserLikesPage implements OnInit {
  data:{id_manga:number, cover_manga:string, name_manga:string}[] = [
    {"id_manga":0,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/58233f610abc458778ac5726573c8e0a.jpe", "name_manga":"Wonder Egg Priority"},
    {"id_manga":1,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48b9c687382510e7ae195f61fee65c61.jpe", "name_manga":"Kaguya Sama - Love is War"},
    {"id_manga":2,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpe", "name_manga":"Fullmetall Alchemist"},
    {"id_manga":3,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b407952122968b243e5c1e2b71d630d9.jpe", "name_manga":"Lycoris Recoil"},
    {"id_manga":4,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/dc24870ae3c042db983cae330ffe6014.jpe", "name_manga":"Horimiya"},
    {"id_manga":5,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0d05002119251179e11dac9cadeaf155.jpe", "name_manga":"Bocchi The Rock"},
    {"id_manga":6,"cover_manga":"https://es.web.img3.acsta.net/pictures/22/07/04/14/30/5500974.jpg", "name_manga":"Call of the Night"},
    {"id_manga":7,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe", "name_manga":"Chainsaw Man"},
    {"id_manga":8,"cover_manga":"https://easycdn.es/1/series/p/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai_3684.jpg", "name_manga":"Bunny-Girl Senpai"},
    {"id_manga":9,"cover_manga":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpe", "name_manga":"Jujutsu Kaisen"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
