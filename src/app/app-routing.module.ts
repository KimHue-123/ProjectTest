import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { BlogComponent } from './blog/blog.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { PublisherComponent } from './publisher/publisher.component';


const routes: Routes = [{path: 'Login', component: LoginComponent},
                        {path: 'About', component: AboutComponent},
                        {path: 'Contact', component: ContactComponent},
                        {path: 'Home', component: HomeComponent},
                        {path: 'Customers', component: CustomerComponent},
                        {path: 'AddCustomer/:id', component: AddCustomerComponent},
                        {path: 'Products', component: ProductComponent},
                        {path: 'Blogs', component: BlogComponent},
                        {path: 'Category', component: BookCategoryComponent},
                        {path: 'Publisher', component: PublisherComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
