import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { OpenAiProxyClient } from '../open-ai-common/open-ai-proxy-client'

@Component({
  selector: 'app-open-ai-prompt',
  templateUrl: './open-ai-prompt.component.html',
  styleUrls: ['./open-ai-prompt.component.css']
})
export class OpenAiPromptComponent {

  pageMessage = 'Send a Prompt to OpenAI';
  apiResponse = '';
  prompt='';

  constructor(private openAiProxyClient:OpenAiProxyClient,
    private appService: AppService) {
  }

  ngOnInit() {
    this.appService.setPageMessage(this.pageMessage);
  }

  getOpenAIResponse() {
    const data = {
      "action": "",
      "payload": this.prompt
    };

    this.openAiProxyClient.callOpenAiProxy(data).then(resp =>this.apiResponse=resp);
  }
}
