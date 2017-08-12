import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundComponent } from './fund/fund.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RecommendComponent } from './recommend/recommend.component';
import { FutureProductComponent } from './future-product/future-product.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';
import { ToBuyComponent } from './to-buy/to-buy.component';
const appRoutes: Routes = [
  { path: 'fund', component: FundComponent , children: [
    { path: '', component: RecommendComponent },
    { path: 'recommend', component: RecommendComponent },
    { path: 'product', component: ProductComponent },
    { path: 'futureProduct', component: FutureProductComponent },
    { path: 'fundDetails', component: FundDetailsComponent },
    { path: 'toBuy', component: ToBuyComponent }
      ]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [FundComponent, ProductComponent, RecommendComponent, FutureProductComponent, FundDetailsComponent, ToBuyComponent]
})
export class FundModule { }
