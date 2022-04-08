import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor() {

  }


  ngOnInit(): void {
  }



  onRetrievePost() {
    console.log();
  }

  onDeletePost(postData: { title: string; content: string }) {
    console.log(postData);
  }

  onUpdatePost(postData: { title: string; content: string }, id: number) {
    console.log(postData);
  }

  onRetrievePosts() {
    console.log();
  }

}
