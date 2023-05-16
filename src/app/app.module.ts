import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Products/components/products-list/products-list.component';
import { ProductsDetailsComponent } from './Products/components/products-details/products-details.component';
import { ShopingCartComponent } from './ShopingCart/component/shoping-cart/shoping-cart.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ShopingCartComponent,
    // RegisterComponent,
    // LoginComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
