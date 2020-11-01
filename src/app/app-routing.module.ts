import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { WidgetComponent } from "./views/widget/widget.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "widget", component: WidgetComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
