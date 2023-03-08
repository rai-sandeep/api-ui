import { Component } from '@angular/core';
import { OpenAiProxyClient } from '../open-ai-common/open-ai-proxy-client'

@Component({
  selector: 'app-open-ai-prompt',
  templateUrl: './open-ai-prompt.component.html',
  styleUrls: ['./open-ai-prompt.component.css']
})
export class OpenAiPromptComponent {

  apiResponse = '';
  prompt='';

  constructor(private openAiProxyClient:OpenAiProxyClient) {
  }

  onInput(event: Event) {
    // Extract the input value from the event and convert it to a string
    this.prompt = (event.target as HTMLInputElement).value;
  }

  getOpenAIResponse() {
    const data = {
      "action": "",
      "payload": this.prompt
    };

    this.openAiProxyClient.callOpenAiProxy(data).then(resp =>this.apiResponse=resp);
  }
}
