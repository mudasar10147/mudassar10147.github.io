import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent implements OnInit {
  clicked: boolean = false;
  displayBlock = {
    display: 'block'
  }
  emptyDisplayBLock = {}
  constructor(
  ) { }

  ngOnInit(): void {
  }
  openMenu(){
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
  getDisplayBlock(){
    return this.clicked ? this.displayBlock : this.emptyDisplayBLock;
  }
  logOut(){
    console.log("Logout")
  }
  getInfo(){
    console.log("getInfo")
  }

}
