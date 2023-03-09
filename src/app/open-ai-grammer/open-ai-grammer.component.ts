import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { OpenAiProxyClient } from '../open-ai-common/open-ai-proxy-client'

@Component({
  selector: 'app-open-ai-grammer',
  templateUrl: './open-ai-grammer.component.html',
  styleUrls: ['./open-ai-grammer.component.css']
})
export class OpenAiGrammerComponent {

  pageMessage = 'Fix English Grammar';
  apiResponse = '';
  prompt='';

  constructor(private openAiProxyClient:OpenAiProxyClient,
    private appService: AppService) {
  }

  ngOnInit() {
    this.appService.setPageMessage(this.pageMessage);
  }

  getOpenAIResponse() {
    console.log(this.prompt);
    const data = {
      "action": "Correct this to standard English",
      "payload": this.prompt
    };

    this.openAiProxyClient.callOpenAiProxy(data).then(resp =>this.apiResponse=resp);
  }

}
