import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import {UsersResolver} from './resolvers/users.resolver';

@NgModule({
    declarations: [UsersListComponent],
    imports: [SharedModule, UsersListRoutingModule, MatPaginatorModule, MatTableModule],
    providers: [UsersResolver],
})
export class UsersListModule {}
