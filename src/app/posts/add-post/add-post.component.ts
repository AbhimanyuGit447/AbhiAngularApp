import { Component, OnInit } from '@angular/core';
import  {faPlusCircle} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
