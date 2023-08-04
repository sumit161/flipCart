import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './sheared/component/products/products.component';
import { SingleProductComponent } from './sheared/component/single-product/single-product.component';
import { NavbarComponent } from './sheared/component/navbar/navbar.component';
import { CreateComponent } from './sheared/component/create/create.component';
import { DashbordComponent } from './sheared/component/dashbord/dashbord.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OneComponent } from './sheared/SubjectBehaSubject/component/one/one.component';
import { TwoComponent } from './sheared/SubjectBehaSubject/component/two/two.component';
import { ThreeComponent } from './sheared/SubjectBehaSubject/component/three/three.component';
import { FormComponent } from './sheared/SubjectBehaSubject/component/form/form.component';
import { FormsComponent } from './sheared/subjectbehSubj/shared/component/forms/forms.component';
import { JaneComponent } from './sheared/subjectbehSubj/shared/component/jane/jane.component';
import { FebComponent } from './sheared/subjectbehSubj/shared/component/feb/feb.component';
import { MarchComponent } from './sheared/subjectbehSubj/shared/component/march/march.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleProductComponent,
    NavbarComponent,
    CreateComponent,
    DashbordComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FormComponent,
    FormsComponent,
    JaneComponent,
    FebComponent,
    MarchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
