import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './product/product';
import { Face } from './face/face';
import { Footer } from './footer/footer';
import { Login } from './login/login';
import { AuthGuard } from './guardes/auth-guard';

export const routes: Routes = [
 {path:'face',component:Face},
{path:'footer',component:Footer},
{path:'login',component:Login},
{ path: 'Product', component: Product ,canActivate:[AuthGuard]},



{path:'',redirectTo:'login',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

