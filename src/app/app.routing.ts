import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
	{
	  path:'',
	  component:IndexComponent
	}
];
@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRouting {}