import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination, User } from '../../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    fetchUsers(page): Observable<any> {
        return this.http.get<Pagination<User>>('https://reqres.in/api/users?page=' + page);
    }

    fetchUserById(id: number): Observable<User> {
        return this.http
            .get<{ data: User }>(`https://reqres.in/api/users/${id}`)
            .pipe(map((resp) => resp.data));
    }
}
