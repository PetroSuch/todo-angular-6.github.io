import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public mainService:MainService) { }

  ngOnInit() {
  }

  formInValid:boolean = false;
  validateTax:boolean = true;
  popUp:boolean = false;
  saveObj(form:NgForm){
  	//this.formInValid = false;
  	/*if(this.mainService.user.salary == undefined || this.mainService.user.salary == null){
  		this.validateTax = true;
  	}else if(this.mainService.user.salary > 0 && this.mainService.user.tax == '' || this.mainService.user.salary > 0 && this.mainService.user.tax == null ){
  		this.validateTax = false
  	}*/
  	if(form.valid && this.validateTax){
  		if(this.mainService.user.id){
  			for(let k in this.mainService.Employee){
  				if(this.mainService.Employee[k]['id'] == this.mainService.user.id){
  					for(let i in this.mainService.Employee[k]){
  						this.mainService.Employee[k][i] = this.mainService.user[i]
  					}
  					this.popUp = false;
  					this.mainService.user = {};
  					return  false;
  				}
  			}
  			
  		}
  		this.mainService.user.id = this.mainService.Employee.length+1
  		this.mainService.Employee.push(this.mainService.user)
  		this.mainService.user = {};
  		this.popUp = false;
  	}else{
  		this.formInValid = true;
  	}
  }

  setEdit(id:number){
  	for (let i = 0; i < this.mainService.Employee.length; ++i) {
  		if(this.mainService.Employee[i]['id'] == id){
  			this.popUp = true;
  			this.mainService.user = this.mainService.Employee[i]
  		}
  	}
  }
  delete(id:number){
  	for (let i = 0; i < this.mainService.Employee.length; ++i) {
  		this.mainService.Employee.splice(i,1)
  	}
  }
}
