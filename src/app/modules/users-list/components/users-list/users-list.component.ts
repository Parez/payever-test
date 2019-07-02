import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { User } from '../../../../models';
import { Pagination } from '../../../../models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
    displayedColumns = ['first_name', 'last_name', 'email'];
    page$: Observable<Pagination<User>>;
    users$: Observable<User[]>;
    pagesCount$: Observable<number>;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.page$ = this.activatedRoute.data
            .pipe(map((data: { users: Pagination<User> }) => data.users))
            .pipe(tap(console.log));
        this.users$ = this.page$.pipe(map((pagination) => pagination.data));
        this.pagesCount$ = this.page$.pipe(map((pagination) => pagination.total_pages));
    }

    pageChanged(event: PageEvent): void {
        const page: number = event.pageIndex + 1;
        this.router.navigate(['./'], { queryParams: { page } });
    }

    userSelected(user: User): void {
        this.router.navigate(['./user', user.id]);
    }
}
