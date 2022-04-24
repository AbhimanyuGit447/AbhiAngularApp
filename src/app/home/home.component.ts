import { Component, OnInit } from '@angular/core';

import {faLinkedin, faYoutube, faGithub, faHackerrank, faAngular} from '@fortawesome/free-brands-svg-icons'

import {faDownload} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  myLinkedinIcon = faLinkedin;

  faLinkedin = faLinkedin
  faYoutube = faYoutube
  faGithub = faGithub
  faHackerrank = faHackerrank
  faAngular = faAngular
  faDownload = faDownload
  constructor() { }

  ngOnInit(): void {
  }

  sites : string[]  = [
      'Leetcode','Linkedin','Youtube', 'Github'
  ]


}
