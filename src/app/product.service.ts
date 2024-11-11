import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  endpointUrl = 'https://jsonplaceholder.org/comments';
  userLoggedIn = new BehaviorSubject<boolean>(false);
constructor(private http:HttpClient){
}

getProducts(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

getData(){
  return this.http.get(this.endpointUrl);
}

assignUserData(data:boolean){
  this.userLoggedIn.next(data);
}
      
}
