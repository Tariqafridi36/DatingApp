import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListsComponent } from './member-lists/member-lists.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_gaurds/auth.guard';

export const appRoutes: Routes = [
    { path: '', component : HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component : MemberListsComponent },
            { path: 'lists', component : ListsComponent },
            { path: 'messages', component : MessagesComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

