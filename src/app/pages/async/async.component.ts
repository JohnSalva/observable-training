import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function GetXHR(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', (evt) => {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.responseText);
          }
        });
        xhr.addEventListener('error', (evt) => {
          reject(xhr.responseText);
        });
        xhr.open('GET', url, true);
        xhr.send();
      });
    }

    const btn1 = document.querySelector('#test_xhr') as HTMLButtonElement;
    const pre1 = document.querySelector('#xhr_result');

    async function RunTest() {
      const data1 = await GetXHR('https://cs8.scorpion.co/oauth/test') as string;
      pre1.textContent = 'ONE - ' + data1;
      const data2 = await GetXHR('https://cs8.scorpion.co/oauth/test') as string;
      pre1.textContent += '\n' + 'TWO - ' + data2;
      const data3 = await GetXHR('https://cs8.scorpion.co/oauth/test') as string;
      pre1.textContent += '\n' + 'THREE - ' + data3;
      pre1.textContent += '\n' + 'COMPLETE';
      btn1.disabled = false;
    }

    btn1.addEventListener('click', (e) => {
      btn1.disabled = true;
      RunTest();
      pre1.textContent = 'PROCESSING ...';
    });

  }
}
