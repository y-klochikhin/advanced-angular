import { Component } from '@angular/core';
import {heavyTask} from "./heavy-task.function";

@Component({
  selector: 'app-root',
  template: `
      <div>
        <label>Without worker</label>
        <input (input)="runHeavyTask()">
      </div>
      <div>
        <label>With worker</label>
        <input (input)="runHeavyTaskInWorker()">
      </div>
      <p>
        Done heavy task count: {{doneHeavyTaskCount}}
      </p>
  `,
  styles: []
})
export class AppComponent {
  doneHeavyTaskCount = 0;
  worker = new Worker('./my-worker.worker', {type: 'module'});

  constructor() {
    this.worker.postMessage('Hello');
    this.worker.onmessage = ({data}) => {
      console.log(data);
    };
  }

  runHeavyTask() {
    heavyTask();
    this.doneHeavyTaskCount++;
  }

  runHeavyTaskInWorker() {
    this.worker.postMessage('run');
    this.worker.onmessage = ({data}) => {
      if (data === 'done') {
        this.doneHeavyTaskCount++;
      }
    };
  }
}
