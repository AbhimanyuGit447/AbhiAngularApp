import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import  {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm! : FormGroup ;

  faPlusCircle = faPlusCircle;

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      image : new FormControl()
    })
  }

  onAddPost(){
    console.log(this.postForm);

    const post : Post = {
      title : this.postForm.value.title,
      description : this.postForm.value.description,
      image : this.postForm.value.image
    };

    this.store.dispatch(addPost({post}));
    
  }

}
