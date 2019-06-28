import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleComponent } from './example/example.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { HttpClientModule } from '@angular/common/http';

import {UserService} from './user.service';
import { ObservableRxjsComponent } from './observable-rxjs/observable-rxjs.component';
import { CombinationComponent } from './combination/combination.component';
import { WijmoExampleComponent } from './wijmo-example/wijmo-example.component';
import { ChildItemsGridComponent } from './child-items-grid/child-items-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    LoginComponent,
    ExampleComponent,
    ObservableRxjsComponent,
    CombinationComponent,
    WijmoExampleComponent,
    ChildItemsGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    WjChartModule,
    WjGridModule,
    // WjInputModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }