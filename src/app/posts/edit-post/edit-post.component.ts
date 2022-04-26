import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post!: Post;
  postForm!: FormGroup;
  postSubscription!: Subscription;
  constructor(private route : ActivatedRoute, private store : Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
     this.postSubscription = this.store.select(getPostById, { id }).subscribe(data => {
        this.post = data;
        this.createForm();
        
      })
    })
  }

  createForm(){
    this.postForm = new FormGroup({
      title : new FormControl(this.post.title),
      description : new FormControl(this.post.description),
      image : new FormControl(this.post.image)
    });
  }

  ngOnDestroy(){
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

}
 