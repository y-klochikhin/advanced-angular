import {Directive, ElementRef, NgZone, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {CustomPreloadingStrategyService} from "./custom-preloading-strategy.service";
import {Subscription} from "rxjs";

@Directive({
  selector: '[appPreload]'
})
export class PreloadDirective implements OnInit, OnDestroy {
  private routerLink: string;
  private stopListen: () => void = () => {};
  private routeLinkPreloadSubscription: Subscription;

  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2,
      private preloadingService: CustomPreloadingStrategyService,
      private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.routerLink = this.elementRef.nativeElement.getAttribute('routerLink');

      if (!this.routerLink) {
        return;
      }

      this.routerLink = this.routerLink.replace('/', '');

      this.stopListen = this.renderer.listen(this.elementRef.nativeElement, 'mouseover', () => {
        this.preloadingService.routeLinkPreload.next(this.routerLink);
      });

      this.routeLinkPreloadSubscription = this.preloadingService.routeLinkPreload.subscribe(routeLink => {
        if (routeLink === this.routerLink) {
          this.stopListen();
          this.routeLinkPreloadSubscription.unsubscribe();
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.stopListen();
    this.routeLinkPreloadSubscription.unsubscribe();
  }
}
