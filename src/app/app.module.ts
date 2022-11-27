import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { StandaloneCmpComponent } from './standalone-cmp/standalone-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StandaloneCmpComponent,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    HttpClientModule,
    PostModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
