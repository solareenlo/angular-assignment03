import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onLogs() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
