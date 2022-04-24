import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterInputComponent } from "./counterApp/counter-input/counter-input.component";
import { CounterComponent } from "./counterApp/counter/counter.component";
import { HomeComponent } from "./home/home.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";


const routes : Routes = [
    {
        path : '', component : HomeComponent
    },
    {
        path : 'counterApp', component : CounterComponent,
         
    },
    {
         path : 'posts', component : PostsListComponent,
         children : [
             {
                 path : 'add', component : AddPostComponent
             }
         ]
    }
    
 
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
   
}