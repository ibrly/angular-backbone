import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-async-testing',
  templateUrl: './async-testing.component.html',
  styleUrls: ['./async-testing.component.scss']
})
export class AsyncTestingComponent implements OnInit {
  showAsyncComponent = false;
  showSyncComponent = false;



  ngOnInit(): void {
    setTimeout(() => {
        this.showAsyncComponent = true;
      }
      , 3000)
    this.showSyncComponent = true;

  }

}
