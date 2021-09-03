import { HostListener, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleSignedInSubscription:Subscription = new Subscription();

  isActive: boolean = false;
  isSignedIn: boolean = false;
  constructor() {

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout( ()=>{
      this.isActive = true;
    }, 1000)
  }
  /* @HostListener('window:scroll', ['$event']) onWindowScroll() {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element!.clientHeight) {
      element?.classList.add('navbar-inverse');
    } else {
      element?.classList.remove('navbar-inverse');
    }
  } */

  toggleSignedIn(){
    this.isSignedIn = !this.isSignedIn;
  }
  updateAdventure(){
    console.log("Update Adventure Called");
  }

}
