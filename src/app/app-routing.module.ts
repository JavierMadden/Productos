import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetproductComponent } from './components/Productos/getproduct/getproduct.component';
import { AddComponent } from './components/Productos/add/add.component'
import { EditComponent } from './components/Productos/edit/edit.component'
import { AddDetailsComponent } from './components/Productos/add-details/add-details.component';
const routes: Routes = [
  {path: 'listar', component: GetproductComponent},
  {path: 'add', component: AddComponent},
  {path: 'addDetails', component: AddDetailsComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
