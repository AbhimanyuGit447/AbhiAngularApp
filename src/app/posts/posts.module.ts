import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";
import { POST_STATE_NAME } from "./state/posts.selector";


const routes : Routes = [
    {
        path : '', component : PostsListComponent,
        children : [
            {
                path : 'add', component : AddPostComponent
            },
            {
               path : 'edit/:id', component : EditPostComponent
            }
           
        ]
   }
]

@NgModule({
    declarations : [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    imports : [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature(POST_STATE_NAME, postsReducer)],

})

export class PostsModule {

}