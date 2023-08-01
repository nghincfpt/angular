import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // check lỗi
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule, ToastrModule.forRoot(),], // Gộp các module vào một lần imports
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
