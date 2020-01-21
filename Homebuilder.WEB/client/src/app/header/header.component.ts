import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleView: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleViewMenu() {
    this.toggleView = !this.toggleView;
  }
}
