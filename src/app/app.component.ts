import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'clock';

  hr_rotation: number = 0;
  min_rotation: number = 0;
  sec_rotation: number = 0;

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      let d = new Date();
      let hr = d.getHours();
      let min = d.getMinutes();
      let sec = d.getSeconds();

      this.hr_rotation = 30 * hr + min / 2;
      this.min_rotation = 6 * min;
      this.sec_rotation = 6 * sec;
    }, 1000);
  }
}
