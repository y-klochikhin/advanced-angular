import {AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p (click)="handle()" (mousewheel)="oftenHandle()">
      child works! Click count: {{clickCount}}
    </p>
    <app-grandchild></app-grandchild>
  `,
  styles: [
  ]
})
export class ChildComponent implements DoCheck, AfterViewInit {
  clickCount = 0;

  constructor(private app: ApplicationRef, private changeDetector: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    //this.changeDetector.detach();
  }

  ngDoCheck(): void {
    console.log('ChildComponent.ngDoCheck');
  }

  handle() {
    this.clickCount++;
    //this.app.tick(); // all components
    //this.changeDetector.detectChanges(); // current component + children
    fetch('https://code.jquery.com/jquery-3.4.1.min.js')
        .then(res => console.log('Fetch response status: ' + res.status));
  }

  oftenHandle() {}
}

