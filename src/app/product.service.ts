import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private_http: Http) { };

  @Input('../assets/album.json') _albumUrl: string

  private getAlbum(id:number) {
    this._http.get(this._albumUrl)
  }
  

}

