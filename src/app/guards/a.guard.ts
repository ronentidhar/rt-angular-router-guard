import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, NavigationCancel } from '@angular/router';
import { of, Observable, race } from 'rxjs';
import { delay, tap, filter, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AGuard implements CanActivate {
  constructor(private router: Router) { }
  counter = 0;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const i = this.counter++;
    const result$ = of(true).pipe(
      tap(() => console.log(`A gurad before ${i}`)),
      delay(3000),
      tap(() => console.log(`A gurad after ${i}`)),
    );

    const cancel$ = this.router.events.pipe(
      filter(event => event instanceof NavigationCancel),
      map(() => false),
      tap(() => console.log(`A gurad canceled ${i}`)),
      first()
    );

    return race(result$, cancel$);
  }
}
