import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './sheared/component/dashbord/dashbord.component';
import { ProductsComponent } from './sheared/component/products/products.component';
import { CreateComponent } from './sheared/component/create/create.component';
import { SingleProductComponent } from './sheared/component/single-product/single-product.component';
import { FormComponent } from './sheared/SubjectBehaSubject/component/form/form.component';
import { OneComponent } from './sheared/SubjectBehaSubject/component/one/one.component';
import { TwoComponent } from './sheared/SubjectBehaSubject/component/two/two.component';
import { ThreeComponent } from './sheared/SubjectBehaSubject/component/three/three.component';
import { FormsComponent } from './sheared/subjectbehSubj/shared/component/forms/forms.component';
import { JaneComponent } from './sheared/subjectbehSubj/shared/component/jane/jane.component';
import { FebComponent } from './sheared/subjectbehSubj/shared/component/feb/feb.component';

const routes: Routes = [
  { path: '', component: DashbordComponent },
  // { path: 'Subject', component: FormComponent },
  // { path: 'one', component: OneComponent },
  // { path: 'two', component: TwoComponent },
  // { path: 'three', component: ThreeComponent },
  // { path: 'forms', component: FormsComponent },
  // { path: 'jane', component: JaneComponent },
  // { path: 'feb', component: FebComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Products/:id', component: SingleProductComponent },
  { path: 'create', component: CreateComponent },
  { path: 'Products/:id/edit', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
