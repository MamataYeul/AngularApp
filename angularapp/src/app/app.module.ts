import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectiveComponent } from './directive/directive.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { HooksComponent } from './hooks/hooks.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { BindingComponent } from './binding/binding.component';
// import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';
import { StructuralDirectiveAssignmentComponent } from './structural-directive-assignment/structural-directive-assignment.component';
import { CustdirassignDirective } from './custdirassign.directive';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { DemoComponent } from './demo/demo.component';





@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectiveComponent,
    NgswitchComponent,
    AttriComponent,
    CustdirDirective,
   
    HooksComponent,
    DirassignComponent,
    BindingComponent,
    // SimpleformComponent,
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
  

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
