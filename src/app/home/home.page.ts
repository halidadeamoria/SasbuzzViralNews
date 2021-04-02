import { Component, OnInit, ViewChild } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectTabs = 'trending';
  public newsData:any;

  constructor(public api:ApiService, private browser:InAppBrowser) {
    const options: InAppBrowserOptions = {
      toolbar: 'no',
      location: 'no',
      zoom: 'no'
    }
 }
  OpenBrowser(url:string, target:string, options:string){
    const link = url;
    this.browser.create(link,target,options);
  }
  
  ngOnInit() {
    this.api.getTrendingNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  trending(){
    this.api.getTrendingNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  kesehatan(){
    this.api.getKesehatanNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  entertainment(){
    this.api.getEntertainmentNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  lifestyle(){
    this.api.getLifestyleNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  olahraga(){
    this.api.getOlahragaNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }   
  otomotif(){
    this.api.getOtomotifNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  pendidikan(){
    this.api.getPendidikanNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  ekonomi(){
    this.api.getEkonomiNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  sains(){
    this.api.getSainsNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  teknologi(){
    this.api.getTeknologiNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  
}
