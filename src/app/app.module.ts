import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllrecordComponent } from './component/allrecord/allrecord.component';
import { LoginComponent } from './component/login/login.component';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './component/home/home.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { EditblogComponent } from './component/editblog/editblog.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from "primeng/api";
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllrecordComponent,
    HomeComponent,
    EditblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    ConfirmDialogModule,
    MessagesModule,
    ToastModule,
    TooltipModule
  
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
