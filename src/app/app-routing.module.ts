import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "individual", loadChildren: () =>  import("./landing").then(m => m.IndividualModule)},
  {path: "business", loadChildren: () =>  import("./landing").then(m => m.BusinessModule)},
  {path: "login", loadChildren: () =>  import("./login").then(m => m.LoginModule)},
  {path: "panel", loadChildren: () =>  import("./panel").then(m => m.PanelModule)},
  {path: "", loadChildren: () =>  import("./landing").then(m => m.IndividualModule)},
  {path: "**", loadChildren: () =>  import("./landing").then(m => m.IndividualModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
