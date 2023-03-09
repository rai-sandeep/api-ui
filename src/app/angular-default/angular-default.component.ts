import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-angular-default',
  templateUrl: './angular-default.component.html',
  styleUrls: ['./angular-default.component.css']
})
export class AngularDefaultComponent {
  pageMessage = 'Welcome to API UI!';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.setPageMessage(this.pageMessage);
  }
}
