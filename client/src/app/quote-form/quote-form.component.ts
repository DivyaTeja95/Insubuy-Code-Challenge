import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  model:QuoteFormViewModel = {
    policyMax:'',
    age:null,
    startDate:'',
    endDate:'',
    citizenship:'',
    mailingState:'' 
  }
  result: ResultModel[] = null;
  nameAsc:boolean = true;
  priceAsc:boolean = true;
  typeFilter:string="";
  sectionFilter:string="";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  submitForm(): void{
    let url = "http://localhost:8080/quotes";
    this.http.get<{quotes:ResultModel[]}>(url).subscribe(
      res => {
        this.result=res.quotes;
        console.log(this.result);
      },
      err => {
        alert("An error while submitting the form!");
      }
    );
  }

  sortByName():void{
    console.log("sorting");
    if(this.nameAsc){
      this.result.sort((a,b)=>(a.name>b.name) ? 1 : -1);
      this.nameAsc=false;
    }
    else{
      this.result.sort((a,b)=>(a.name>b.name) ? -1 : 1);
      this.nameAsc=true;
    }
    console.log(this.result);
  }

  sortByPrice():void{
    console.log("sorting");
    if(this.priceAsc){
      this.result.sort((a,b)=>(Number(a.price)> Number(b.price)) ? 1 : -1);
      this.priceAsc=false;
    }
    else{
      this.result.sort((a,b)=>(Number(a.price)> Number(b.price)) ? -1 : 1);
      this.priceAsc=true;
    }
    console.log(this.result);
  }

  alert1(){
    console.log(this.sectionFilter);
  }

}

export interface QuoteFormViewModel{
  policyMax:string;
  age:number;
  startDate:string;
  endDate:string;
  citizenship:string;
  mailingState:string;
}

export interface ResultModel{
  id:string;
  name:string;
  description:string;
  price:string;
  type:string;
  section:string;
  bestSellers:boolean;
}