import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SidePanelComponent } from "./component/htmlComponents/side-panel/side-panel.component";
import { LoginComponent } from "./modules/shared/sharedPages/login/login.component";
import { SignUpComponent } from "./modules/shared/sharedPages/sign-up/sign-up.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "side-panel", component: SidePanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
