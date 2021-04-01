import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //DEKLARASI Kategori Endpoint
  public trending_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=trending";
  public kesehatan_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=kesehatan";
  public entertainment_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=entertainment";
  public lifestyle_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=lifestyle";
  public olahraga_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=olahraga";
  public otomotif_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=otomotif";
  public pendidikan_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=pendidikan";
  public ekonomi_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=ekonomi";
  public sains_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=sains";
  public teknologi_url:string="http://apisearch.sasbuzz.com/redis-demo/get-json.php?kategori=teknologi";
  //-----------------------------------------------------------------------------------------------------------------------------------------------//
  //DEKLARASI Media Endpoint
  public detik_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=detik";
  public okezone_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=okezone";
  public republika_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=republika";
  public kompas_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=kompas";
  public liputan6_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=liputan6";
  public merdeka_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=merdeka";
  public suara_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=suara";
  public antaranews_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=antaranews";
  public tribunnews_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=tribunnews";
  public cnnid_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=cnnindonesia";  
  public tempo_url:string="http://apisearch.sasbuzz.com/redis-demo/media/get-json.php?media=tempo";  
  //-----------------------------------------------------------------------------------------------------------------------------------------------//
  constructor(public http:HttpClient) { }
  //KATEGORI ENDPOINT
  //method pemanggilan data berita trending
  getTrendingNews(){
    return this.http.get(this.trending_url);
  }
  //method pemanggilan data berita kesehatan
  getKesehatanNews(){
    return this.http.get(this.kesehatan_url);
  }  
  //method pemanggilan data berita entertainment
  getEntertainmentNews(){
    return this.http.get(this.entertainment_url);
  }  
  //method pemanggilan data berita lifestyle
  getLifestyleNews(){
    return this.http.get(this.lifestyle_url);
  }  
  //method pemanggilan data berita olahraga
  getOlahragaNews(){
    return this.http.get(this.olahraga_url);
  }  
  //method pemanggilan data berita otomotif
  getOtomotifNews(){
    return this.http.get(this.otomotif_url);
  }  
  //method pemanggilan data berita pendidikan
  getPendidikanNews(){
    return this.http.get(this.pendidikan_url);
  }  
  //method pemanggilan data berita ekonomi
  getEkonomiNews(){
    return this.http.get(this.ekonomi_url);
  }
  //method pemanggilan data berita sains
  getSainsNews(){
    return this.http.get(this.sains_url);
  }
  //method pemanggilan data berita ekonomi
  getTeknologiNews(){
    return this.http.get(this.teknologi_url);
  }
  //---------------------------------------------------------------------//
  //---------------------------------------------------------------------//
  //MEDIA ENDPOINT
  //method pemanggilan data berita trending
  getDetikNews(){
    return this.http.get(this.detik_url);
  }
  getOkezoneNews(){
    return this.http.get(this.okezone_url);
  }
  getRepublikaNews(){
    return this.http.get(this.republika_url);
  }
  getKompasNews(){
    return this.http.get(this.kompas_url);
  }
  getLiputan6News(){
    return this.http.get(this.liputan6_url);
  }
  getMerdekaNews(){
    return this.http.get(this.merdeka_url);
  }
  getSuaraNews(){
    return this.http.get(this.suara_url);
  }
  getAntaraNews(){
    return this.http.get(this.antaranews_url);
  }
  getTribunNews(){
    return this.http.get(this.tribunnews_url);
  }
  getCNNIDNews(){
    return this.http.get(this.cnnid_url);
  }
  getTempoNews(){
    return this.http.get(this.tempo_url);
  }
}