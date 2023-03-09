import { Component} from '@angular/core';
import { delay } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageMessage='';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getPageMessageChanged()
      .pipe(delay(0))
      .subscribe((pageMessage) => {
        this.pageMessage = pageMessage;
      });
  }
}
