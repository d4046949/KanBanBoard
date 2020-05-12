import { Routes } from "@angular/router";
import { EditCardComponent } from './edit-card/edit-card.component';

const routes: Routes = [
    {
        path: 'create',
        component: EditCardComponent
    }
]

export { routes };