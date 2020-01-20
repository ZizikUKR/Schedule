import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleViewNavMenu(event) {
    event.target.closest(".nav").classList.toggle('open');
  }

  public navigateToProjects(): void {
    // this.router.navigateByUrl('/projects');
  }

  public navigateToDashBoard(): void {
    // this.router.navigateByUrl('/dashboard');
  }

  public navigateToToolShelf(): void {
    // this.router.navigateByUrl('/tool-shelf');
  }

  public navigateToToolNetWork(): void {
    // this.router.navigateByUrl('/network');
  }

}
