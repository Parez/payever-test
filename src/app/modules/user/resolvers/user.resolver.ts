import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../shared/api.service';

@Injectable()
export class UserResolver implements Resolve<any> {
    constructor(private apiService: ApiService) {}

    resolve(route: ActivatedRouteSnapshot): any {
        const page: number = route.params['id'];
        return this.apiService.fetchUserById(page);
    }
}
