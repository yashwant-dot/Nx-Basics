import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string; 

  constructor(private router: Router) {}

  handleSubmit(): void {
    if(!this.email || !this.password) {
      alert('Please enter all fields');
      return;
    }

    this.router.navigate(['/dashboard']);
  }

}
