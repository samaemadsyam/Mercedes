import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { languge } from '../model/languge';
import { List } from '../model/list';
import { Auth } from '../service/auth';
@Component({
  selector: 'app-navbar',
    standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.html',
styleUrls: ['./navbar.css']
})
export class Navbar {


  
   constructor(public auth : Auth){}
  imgUrl: string = 'img/Picture1.png';
  SearchText: string = '';
  cliced(){
    alert('this is Art!');
  }
  E: string = 'English';
  A: string = 'Arabic';
  F: string = 'Français'; 
  D: string = 'Deutsch';
 logedIn! :boolean
ngOnInit(){
  this.logedIn = this.auth.isAuthenticated();

}
ngOnDestroy(){
  this.logedIn = false;
}

logout() {
    this.auth.logout();
  }



















  isMenuOpen = false;

  toggleLanguageMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
//   selectedCategoryId: number = 0;
//  lan:languge[]=[
//  { id:1,name:'English'},
//  { id :2,name:'Arabic'},
//   { id:3,name:'Français'},
//   { id:4,name:'Deutsch'}
//  ]
// lists:List[]=[
//   {id:1,name:'Art'},
//   {id:2,name:'Sustaiblility'},
// ]

}
