import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';
import { ButtonModule } from '@org/button';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [ButtonModule, CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule { }
