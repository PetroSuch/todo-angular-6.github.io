import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MainService{
  
  constructor(private http: HttpClient){ 
    this.http.get('./assets/api.json').subscribe((res)=>{
      this.Employee = res;
    })
  }
   
  user:any = {
      'firstname':'',
      'lastname':'',
      'birthdate':'',
      'gender':'',
      'available':false,
      'salary':'',
      'tax':''
  }

  Employee:any = [ ]


}


