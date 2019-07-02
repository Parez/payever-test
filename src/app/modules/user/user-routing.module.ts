import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
    {
        path: ':id',
        component: UserComponent,
        resolve: {
            user: UserResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
