import { Component, OnInit, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-dark.css';

@Component({
  selector: 'illustartion',
  standalone: true,
  imports: [],
  templateUrl: './illustration.component.html',
  styleUrl: './illustration.component.scss',
})
export class IllustrationComponent implements OnInit, AfterViewInit {
  public displayCode: string = `
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const transition = [35, 36, 37, 38, 42, 43, 63];
const asciiMessage = [
  76, 105, 118, 101, 32, 73, 109, 109, 101, 100, 105, 97, 116, 101, 108, 121,
];

let m = '';

for (const asciiVal of asciiMessage) {
  for (const char of shuffle(transition)) {
    process.stdout.write(m + String.fromCharCode(char));
    await sleep(50);
    console.clear();
  }

  m = m + String.fromCharCode(asciiVal);
  process.stdout.write(String.fromCharCode(asciiVal));

  console.clear();
}`;

  public ngOnInit(): void {
    hljs.registerLanguage('javascript', javascript);
  }

  public ngAfterViewInit(): void {
    hljs.highlightAll();
  }
}
