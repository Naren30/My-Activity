import { Component, OnInit } from '@angular/core';
import { Registration} from '../Registration';
import { RegistrationService} from '../service/registration.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 register: Registration=new Registration();
  constructor(private registerService:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.registerService.createUser(this.register).subscribe(data=>{
      console.log(data);
      this.goToLoginPage();
    },
    error=> console.log(error));
  }
  goToLoginPage(){
    this.router.navigate(['/profile']);
  }
  onSubmit(){
    console.log(this.register);
    this.saveUser();
  }
}
