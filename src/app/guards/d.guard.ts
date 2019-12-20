import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DGuard implements CanActivate {
  constructor() { }
  counter = 0;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const i = this.counter++;

    return new Promise((resolve, reject) => {
      console.log(`D gurad before ${i}`);

      setTimeout(() => {
        console.log(`D gurad after ${i}`);
        resolve(true);
      }, 2000);
    });
  }
}
