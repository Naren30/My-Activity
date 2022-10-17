import { Component, OnInit } from '@angular/core';
import { Registration} from '../Registration';
import { RegistrationService} from '../service/registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registers: Registration[]=[];

  constructor(private registerService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.registerService.getUserList().subscribe(data => {
      this.registers = data;
    });
  }

  userDetails(id: number){
    this.router.navigate(['user-details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number){
    this.registerService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

}
