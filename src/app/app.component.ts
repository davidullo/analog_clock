import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'clock';

  d!: Date;
  hr!: number;
  min!: number;
  sec!: number;
  hr_rotation!: number;
  min_rotation!: number;
  sec_rotation!: number;

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      this.d = new Date();
      this.hr = this.d.getHours();
      this.min = this.d.getMinutes();
      this.sec = this.d.getSeconds();
      this.hr_rotation = 30 * this.hr + this.min / 2;
      this.min_rotation = 6 * this.min;
      this.sec_rotation = 6 * this.sec;
    }, 1000);
  }
}
