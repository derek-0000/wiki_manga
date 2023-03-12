import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})

export class MainPagePage implements OnInit {

  data:{id:number, image:string, name:string}[] = [
    {"id":0,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/58233f610abc458778ac5726573c8e0a.jpe", "name":"Wonder Egg Priority"},
    {"id":1,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48b9c687382510e7ae195f61fee65c61.jpe", "name":"Kaguya Sama - Love is War"},
    {"id":2,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpe", "name":"Fullmetall Alchemist"},
    {"id":3,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b407952122968b243e5c1e2b71d630d9.jpe", "name":"Lycoris Recoil"},
    {"id":4,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/dc24870ae3c042db983cae330ffe6014.jpe", "name":"Horimiya"},
    {"id":5,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/0d05002119251179e11dac9cadeaf155.jpe", "name":"Bocchi The Rock"},
    {"id":6,"image":"https://es.web.img3.acsta.net/pictures/22/07/04/14/30/5500974.jpg", "name":"Call of the Night"},
    {"id":7,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe", "name":"Chainsaw Man"},
    {"id":8,"image":"https://easycdn.es/1/series/p/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai_3684.jpg", "name":"Bunny-Girl Senpai"},
    {"id":9,"image":"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpe", "name":"Jujutsu Kaisen"},
  ]
  
  showIndex:number = 1
  constructor() { }

  ngOnInit() {
  }
  mangaPageHandler(next:boolean){
    next == true ? this.showIndex++ :this.showIndex--
    console.log(this.showIndex)
    console.log(this.showIndex*4)
    console.log(this.showIndex*4)
  }
}
