import { Component, OnInit } from '@angular/core';
import { Registration} from '../Registration';
import { RegistrationService} from '../service/registration.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  id: number=0;
  register: Registration=new Registration();
  constructor(private route: ActivatedRoute, private registerService: RegistrationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.register = new Registration();
    this.registerService.getUserById(this.id).subscribe( data => {
      this.register = data;
    });
  }
}
