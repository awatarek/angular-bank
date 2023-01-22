import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "individual", title: "AngularBank - Individual", loadChildren: () =>  import("./landing").then(m => m.IndividualModule)},
  {path: "business", title: "AngularBank - Business", loadChildren: () =>  import("./landing").then(m => m.BusinessModule)},
  {path: "login", title: "AngularBank - Login", loadChildren: () =>  import("./login").then(m => m.LoginModule)},
  {path: "panel", title: "AngularBank - Panel", loadChildren: () =>  import("./panel").then(m => m.PanelModule)},
  {path: "", title: "AngularBank - Individual", loadChildren: () =>  import("./landing").then(m => m.IndividualModule)},
  {path: "**", title: "AngularBank - Not Found" , loadChildren: () =>  import("./landing").then(m => m.IndividualModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
