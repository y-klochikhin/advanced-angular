import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input
} from '@angular/core';

@Component({
  selector: 'app-push',
  template: `
    <div>
      {{title}} <input (change)="title = $event.target.value" [value]="title">
    </div>
    <div>{{object | json}}</div>
    <div>{{array | json}}</div>
    <button (click)="mutateArray()">mutate array</button>
    <button (click)="newArray()">new array</button>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements DoCheck {
  title = 'on push';
  array = [];

  @Input() object: any = {};

  constructor(changeDetector: ChangeDetectorRef) {
    //setInterval(() => changeDetector.markForCheck(), 1000); // mark current and all to root, in async pipe used
  }

  ngDoCheck(): void {
    console.log('PushComponent.ngDoCheck');
  }

  mutateArray() {
    this.array.push(Math.random());
  }

  newArray() {
    this.array = [...this.array];
    this.array.push(Math.random());
  }
}
