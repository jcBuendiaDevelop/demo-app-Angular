import { Routes } from '@angular/router';

import { TablesComponent } from '../../pages/tables/tables.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'products',         component: TablesComponent },
    { path: 'register',         component: RegisterComponent },
];
