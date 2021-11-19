import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/Productos/add/add.component';
import { EditComponent } from './components/Productos/edit/edit.component';
import { GetproductComponent } from './components/Productos/getproduct/getproduct.component';
import { FormsModule } from '@angular/forms';
import { ServiceProductService } from './services/service-product.service'
import { HttpClientModule } from '@angular/common/http';
import { AddDetailsComponent } from './components/Productos/add-details/add-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    GetproductComponent,
    AddDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
