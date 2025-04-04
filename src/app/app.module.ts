import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [AppComponent, LoginComponent, SignInComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
