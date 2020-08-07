import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { MeComponent} from './me/me.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'me', component: MeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
