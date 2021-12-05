import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { PageService } from '../services/page.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentPage = 1;
  users:User[]=[];
  pages;
  searchString:string;
  isLoad=false;
  constructor(
    private userService:UserService,
    private pageService:PageService,
    private authService:AuthService
  ) {
    this.getUsers(this.currentPage);
    this.getPages();
  }
  getUsers(page:number){
    this.userService.getUsers(page)
      .subscribe(data=>{
        this.users = data.data;
        this.isLoad=true;
      })
  }
  setPage(page:number){
    this.currentPage=page;
    this.getUsers(page);
  }
  getPages(){
    this.pages = this.pageService.getPages();
  }

  logout(){
    this.authService.logout();
  }




  checkCurrentPage(page:number){
    if(this.currentPage===page){
      return "page-item active";
    }else{
      return "page-item";
    }
  }

}
