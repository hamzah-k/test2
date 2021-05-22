import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './Layouts/default/default.component';
import { DashboredComponent } from './modules/dashbored/dashbored.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  { path: '', component: DefaultComponent, children: [{path: '', component: DashboredComponent}, {path: 'posts', component: PostsComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
