import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    user$: Observable<User>;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.user$ = this.activatedRoute.data.pipe(map((data: { user: User }) => data.user));
    }

    back(): void {
        this.router.navigate(['/users']);
    }
}
