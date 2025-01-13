import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { CarreraTecnicaComponent } from "../carrera-tecnica/components/carrera-tecnica/carrera-tecnica.component";

const childRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'carreras', component: CarreraTecnicaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})

export class RouterChildModule{}