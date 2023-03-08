import { Component } from '@angular/core';
import { OpenAiProxyClient } from '../open-ai-common/open-ai-proxy-client'

@Component({
  selector: 'app-open-ai-grammer',
  templateUrl: './open-ai-grammer.component.html',
  styleUrls: ['./open-ai-grammer.component.css']
})
export class OpenAiGrammerComponent {

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
      "action": "Correct this to standard English",
      "payload": this.prompt
    };

    this.openAiProxyClient.callOpenAiProxy(data).then(resp =>this.apiResponse=resp);
  }

}
