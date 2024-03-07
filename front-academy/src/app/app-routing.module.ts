import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminContactComponent } from './shared/admin-contact/admin-contact.component';
import { AdminOrderComponent } from './shared/admin-order/admin-order.component';
import { AdminReviewComponent } from './shared/admin-review/admin-review.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './shared/terms-of-use/terms-of-use.component';
import { AddProductComponent } from './shared/add-product/add-product.component';
import { register } from 'swiper/element/bundle';

register();

const routes: Routes = [
 
  {
    path: 'admincontact',
    component: AdminContactComponent,
  },
  {
    path: 'add',
    component: AddProductComponent,
  },
  {
    path: 'adminorders',
    component: AdminOrderComponent,
  },
  {
    path: 'adminreviews',
    component: AdminReviewComponent,
  },

  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
 
 
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-conditions',
    component: TermsOfUseComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
