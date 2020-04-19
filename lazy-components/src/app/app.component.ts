import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)='getLazy()'>get lazy</button>
  `,
  styles: []
})
export class AppComponent {
  constructor(
      private viewContainerRef: ViewContainerRef,
      private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  async getLazy() {
    this.viewContainerRef.clear();
    const { LazyComponent } = await import('./lazy.component');
    this.viewContainerRef.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(LazyComponent)
    );
  }
}
