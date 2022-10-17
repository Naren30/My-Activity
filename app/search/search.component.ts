import { Component, OnInit} from '@angular/core';
import { Registration} from '../Registration';
import { RegistrationService} from '../service/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  id: number=0;
  register: Registration = new Registration();
  constructor(private registerService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.registerService.getUserById(this.id).subscribe(data => {
      this.register = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.registerService.updateUser(this.id, this.register).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/profile']);
  }
  

}
