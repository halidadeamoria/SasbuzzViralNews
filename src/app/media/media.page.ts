import { Component, OnInit, ViewChild } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
  selectTabs = 'detik';
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
    this.api.getDetikNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  detik(){
    this.api.getDetikNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  okezone(){
    this.api.getOkezoneNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  republika(){
    this.api.getRepublikaNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  kompas(){
    this.api.getKompasNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  liputan6(){
    this.api.getLiputan6News().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  merdeka(){
    this.api.getMerdekaNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  suara(){
    this.api.getSuaraNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  antara(){
    this.api.getAntaraNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }  
  tribun(){
    this.api.getTribunNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  cnnID(){
    this.api.getCNNIDNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }
  tempo(){
    this.api.getTempoNews().subscribe(result=>{
      console.log(result);
      this.newsData=result['data'];
    });
  }

}
