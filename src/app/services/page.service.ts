import { Injectable } from '@angular/core';
import { Pages } from '../models/pages';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getPages(){
    return Pages;
  }
}
