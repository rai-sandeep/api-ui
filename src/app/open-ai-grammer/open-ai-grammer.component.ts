import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-open-ai-grammer',
  templateUrl: './open-ai-grammer.component.html',
  styleUrls: ['./open-ai-grammer.component.css']
})
export class OpenAiGrammerComponent {

  apiResponse = '';
  prompt='';

  onInput(event: Event) {
    // Extract the input value from the event and convert it to a string
    this.prompt = (event.target as HTMLInputElement).value;
  }

  getOpenAIResponse() {
    const data = {
      model: "text-davinci-003",
      prompt: "Correct this to standard English:\n"+this.prompt,
      temperature: 0,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    };

    axios.post('https://api.openai.com/v1/completions', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      }
    })
    .then(response => {
      console.log(response);
      this.apiResponse = response.data.choices[0].text;
    })
    .catch(error => {
      console.log(error);
      this.apiResponse = 'Error occurred: ' + error.message;
    });
  }

}
