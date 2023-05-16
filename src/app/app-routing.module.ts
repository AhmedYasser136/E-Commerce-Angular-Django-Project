import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { ProductsDetailsComponent } from './Products/components/products-details/products-details.component';
import { ProductsListComponent } from './Products/components/products-list/products-list.component';
import { ShopingCartComponent } from './ShopingCart/component/shoping-cart/shoping-cart.component';
import { AuthModule } from './auth/auth.module';
// import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
// {path: 'Login',component: LoginComponent},
// {path: 'Register', component: RegisterComponent},
{path: 'productDetails', component: ProductsDetailsComponent},
{path: 'productList',component: ProductsListComponent},
{path: 'ShopingCart', component: ShopingCartComponent},
{path: 'auth', loadChildren: ()=> import ('./auth/auth.module').then (a=> a.AuthModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
