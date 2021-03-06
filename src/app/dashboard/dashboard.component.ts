import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('this is the logout');
    if(confirm('Do you want to logout?')){
      this.router.navigateByUrl('/login');
    } else {
      console.log('yay you\'re staying');
    }
  }

}
