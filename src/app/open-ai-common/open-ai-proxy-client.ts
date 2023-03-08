import { constants } from './constants'
import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OpenAiProxyClient {

  callOpenAiProxy(data: Object): Promise<string> {
    return axios.post(constants.openAiProxy, data, {
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(response => {
        console.log(response);
        return response.data.text;
      })
      .catch(error => {
        console.log(error);
        return 'Error occurred: ' + error.message;
      });
  }
}