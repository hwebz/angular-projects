import { isPlatformBrowser } from "@angular/common";
import { Inject, PLATFORM_ID } from "@angular/core";

export class CheckPlatformComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
