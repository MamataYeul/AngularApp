import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { AuthGuard } from "./auth.guard";
import { ContactusComponent } from "./contactus/contactus.component";
import { DemopostComponent } from "./demopost/demopost.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { OrdersModule } from "./orders/orders.module";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { PostdetailsComponent } from "./postdetails/postdetails.component";
import { RegistrationformComponent } from "./registrationform/registrationform.component";
import { UnSavedChangesGuard } from "./un-saved-changes.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent }, //localhost:4200//bydefault login component will open
  { path: "home", component: HomeComponent }, //localhost:4200// home
  { path: "aboutus", component: AboutusComponent }, //localhost: 4200//aboutus
  { path: "contactus", component: ContactusComponent }, //localhost:4200//contactus
  { path: "registrationform", component: RegistrationformComponent }, //localhost:4200//regisrationform
  { path: "gallery", component: GalleryComponent }, //localhost:4200//gallery
  { path: "post", component: DemopostComponent },
  { path: "postdetails/:id", component: PostdetailsComponent },
  {path:'adduser',component:AdduserComponent,canDeactivate:[UnSavedChangesGuard]},
  { path: "product",canActivate:[AuthGuard], loadChildren: "./product/products.module#ProductsModule" }, //syntax of lazy loading approach
  { path: "orders", loadChildren: "./orders/orders.module#OrdersModule" },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ], //forRoot(routes)satic method for our application
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {
    console.log("Routing Module called");
  }
}
