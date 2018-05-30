import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { BreadcrumpsComponent } from "./breadcrumps/breadcrumps.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    HeaderComponent,
    BreadcrumpsComponent,
    PagenotfoundComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumpsComponent,
    PagenotfoundComponent,
    SidebarComponent
  ]
})
export class SharedModule {}