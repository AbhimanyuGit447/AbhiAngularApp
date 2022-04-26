import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counterApp/counter/counter.component';
import { CounterOutputComponent } from './counterApp/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counterApp/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counterApp/state/counter.reducer';
import { TaxCalComponent } from './taxCalukApp/tax-cal/tax-cal.component';
import { CalButtonsComponent } from './taxCalukApp/cal-buttons/cal-buttons.component';
import { CalOutputComponent } from './taxCalukApp/cal-output/cal-output.component';
import { salaryReducer } from './taxCalukApp/state/salary.reducer';
import { CounterInputComponent } from './counterApp/counter-input/counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { postsReducer } from './posts/state/posts.reducer';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,

    TaxCalComponent,
    CalButtonsComponent,
    CalOutputComponent,
    CounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    AddPostComponent,
    AboutComponent,
    ContactComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    FontAwesomeModule,
    StoreDevtoolsModule.instrument({logOnly: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
