import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { IndexComponent } from './index/index.component';
import { MainService } from './services/main.service';
import { RequiredDirective } from './directive/required.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RequiredDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
