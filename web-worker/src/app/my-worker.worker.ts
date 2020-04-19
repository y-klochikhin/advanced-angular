/// <reference lib="webworker" />

import {heavyTask} from "./heavy-task.function";

addEventListener('message', ({ data }) => {
  if (data === 'run') {
    heavyTask();
    postMessage('done');
    return;
  }

  const response = `worker response to ${data}`;
  postMessage(response);
});
