import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Input() searchbarWidth: string = "100%";
  constructor() { }

  ngOnInit(): void {
  }

}
