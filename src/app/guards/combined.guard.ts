import { Injectable, Injector, InjectionToken, Type } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CombinedGuard implements CanActivate, CanActivateChild {

  constructor(private injector: Injector) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    /* | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree*/
    // const guards = (((route || { data: {} }).data || { guards: {} }).guards || { activate: [] }).activate || [];
    const guards: (InjectionToken<CanActivate> | Type<CanActivate>)[] = ((route || { data: {} }).data || { guards: {} }).guards || [];

    for (const guard of guards) {
      const instance: CanActivate = this.injector.get(guard);
      let result = await instance.canActivate(route, state);
      if (result instanceof Observable) {
        result = await result.toPromise();
      }
      if (result === false || result instanceof UrlTree) {
        return result;
      }
    }
    return true;
  }

  async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    /* | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree*/
    // const guards = (((childRoute || { data: {} }).data || { guards: {} }).guards || { activate: [] }).activateChild || [];
    const guards: (InjectionToken<CanActivateChild> | Type<CanActivateChild>)[]
      = ((childRoute || { data: {} }).data || { guards: {} }).guards || [];

    for (const guard of guards) {
      const instance: CanActivateChild = this.injector.get(guard);
      let result = await instance.canActivateChild(childRoute, state);
      if (result instanceof Observable) {
        result = await result.toPromise();
      }
      if (result === false || result instanceof UrlTree) {
        return result;
      }
    }
    return true;
  }
}
