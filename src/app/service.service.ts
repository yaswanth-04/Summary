import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'https://localhost:7154/api';

  constructor( private http : HttpClient) { }
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
formData.append('file', file, file.name);
return this.http.post('${this.apiUrl}/Upload', formData);
  }
  // getAccountData(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/Account`);
  // }
  getAllAccountData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Account/GetAllDetails`);
  }
  getAllAccountDetailsData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/Account/GetAllSumDetails`);
  }

  
}
