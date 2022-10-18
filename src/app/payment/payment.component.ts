import { Component, OnInit } from '@angular/core';
import { Payment } from '../Payment';
import { PaymentService } from '../service/payment.service';
import { Router } from '@angular/router';
// import{ MatDialog } from '@angular/material/dialog';
// import{PopupComponent}from '../popup/popup.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
payment: Payment= new Payment();
  constructor(private paymentService: PaymentService,private router:Router ) { }

  ngOnInit(): void {
  }
onSubmit(){
console.log(this.payment);
this.savePayment();
}
savePayment(){
  this.paymentService.createPayment(this.payment).subscribe( data =>{
    console.log(data);
   
    this.openDialog();
  },
  error => console.log(error));
  
}
goToPaymentList(){
  this.router.navigate(['/home']);
}
openDialog(){
  // this.dialogRef.open(PopupComponent);
  alert("Payment Successfull !!");
  this.goToPaymentList();
}

}
