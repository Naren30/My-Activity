import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Payment } from '../Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private baseURL ="http://localhost:8057/api/payment";
  constructor(private httpClient: HttpClient) { }
  createPayment(payment: Payment): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, payment);
  }
}
