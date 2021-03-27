import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |Observable<boolean> | Promise<boolean> {
        const token = !!localStorage.getItem('token');
        if(token){
            return true;
        }
        else{
            this.router.navigate(['']);
            return false;
        }
    }

}