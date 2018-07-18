import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  creds: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.creds = {
      email: null,
      password: null

    }
  }

  login(){

    if(this.creds.email && this.creds.password){
      console.log('can login');
      this.router.navigateByUrl('/dashboard');      
    } else {
      alert('you\'re missing something');
    }
  }

}
