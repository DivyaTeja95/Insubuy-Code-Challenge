import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AgeValidator} from './quote-form/age.validator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { 
  FormsModule,   
 } from '@angular/forms';   

 import { TypeFilterPipe } from './quote-form/typeFilter.pipe';
 import { SectionFilterPipe } from './quote-form/sectionFilter.pipe';

import { HttpClientModule } from "@angular/common/http";
import { QuoteComponent } from './quote-form/quote/quote.component';
  

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    AgeValidator,
    QuoteComponent,
    TypeFilterPipe,
    SectionFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
