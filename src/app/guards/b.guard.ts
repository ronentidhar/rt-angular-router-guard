import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree {
    console.log('Cancel navigation and redirect to app');

    const url = '/';
    const tree: UrlTree = this.router.parseUrl(url);
    return tree;
  }
}
