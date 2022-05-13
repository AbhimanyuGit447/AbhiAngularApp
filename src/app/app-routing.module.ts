import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CounterInputComponent } from "./counterApp/counter-input/counter-input.component";
import { CounterComponent } from "./counterApp/counter/counter.component";
import { HomeComponent } from "./home/home.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { EditPostComponent } from "./posts/edit-post/edit-post.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";


const routes : Routes = [
    {
        path : '', component : HomeComponent
    },
    {
        path : 'counterApp',
        loadChildren : () => import('./counterApp/counter.module').then(m => m.CounterModule)
    },
    
    {
        path : 'about', component : AboutComponent
    },
    {
        path : 'contact', component : ContactComponent
    },
    {
         path : 'posts',
         loadChildren : () => import('./posts/posts.module').then(m => m.PostsModule)
    },
    {
        path : 'auth',
        loadChildren : () => import('./auth/auth.module').then((m) => m.AuthModule),
    },  
 
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
   
}