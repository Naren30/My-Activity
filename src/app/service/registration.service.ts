import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../Registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
private baseUrl="http://localhost:8057/api/users";

  constructor(private httpClient:HttpClient) { }

  createUser(register:Registration):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,register);
  }
  updateUser(id: number, register:Registration): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, register);
  }
  getUser(): Observable<Registration[]>{
    return this.httpClient.get<Registration[]>(`${this.baseUrl}`);
  }
  getUserById(id: number): Observable<Registration>{
    return this.httpClient.get<Registration>(`${this.baseUrl}/${id}`);
  }
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
   
  getUserList(): Observable<Registration[]>{
    return this.httpClient.get<Registration[]>(`${this.baseUrl}`);
  }
}
