import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { DirectiveComponent } from './directive/directive.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { HooksComponent } from './hooks/hooks.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { BindingComponent } from './binding/binding.component';
import { BindComponent } from './bind/bind.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';
import { StructuralDirectiveAssignmentComponent } from './structural-directive-assignment/structural-directive-assignment.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { DemoComponent } from './demo/demo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { PipepracticeComponent } from './pipepractice/pipepractice.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filter.pipe';
import { FilterpipeassignComponent } from './filterpipeassign/filterpipeassign.component';
import { Servicecard1Component } from './servicecard1/servicecard1.component';
import { Servicecard2Component } from './servicecard2/servicecard2.component';
import { ServicecontactComponent } from './servicecontact/servicecontact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GenderPipe } from './gender.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
// import { ProductsModule } from './product/products.module';
// import { OrdersModule } from './orders/orders.module';
import { AdduserComponent } from './adduser/adduser.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { BindingDataComponent } from './binding-data/binding-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CompassignComponent } from './compassign/compassign.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ServersComponent,
    DirectiveComponent,
    NgswitchComponent,
    AttriComponent,
    CustdirDirective,
    HooksComponent,
    DirassignComponent,
    BindingComponent,
    BindComponent,
    SimpleformComponent,
    ReactiveformComponent,
    ReactiveFormAssignmentComponent,
    StructuralDirectiveAssignmentComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    DemoComponent,
    PipedemoComponent,
    CountPipe,
    PipepracticeComponent,
    FilterpipeComponent,
    FilterPipe,
    FilterpipeassignComponent,
    Servicecard1Component,
    Servicecard2Component,
    ServicecontactComponent,
    AboutusComponent,
    ContactusComponent,
  
    HomeComponent,
    LoginComponent,
    GenderPipe,
    GalleryComponent,
    RegistrationformComponent,
    PagenotfoundComponent,
    DemopostComponent,
    PostdetailsComponent,
    AdduserComponent,
    RapidapiComponent,
    TemplatedrivenformComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    BindingDataComponent,
    NgForComponent,
    NgIfComponent,
    CompassignComponent
   
  ],
  imports: [
    BrowserModule,
    // ProductsModule,
    // OrdersModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App module called');
    
  }
 }
