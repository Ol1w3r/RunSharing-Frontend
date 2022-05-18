import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './run/report/report.component';
import { RecapComponent } from './run/recap/recap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryManagerComponent } from './library-manager/library-manager.component';
import { CardRendererComponent } from './library-manager/card-renderer/card-renderer.component';
import { SmallCardRendererComponent } from './library-manager/small-card-renderer/small-card-renderer.component';
import { RelicRendererComponent } from './library-manager/relic-renderer/relic-renderer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    RecapComponent,
    LibraryManagerComponent,
    CardRendererComponent,
    SmallCardRendererComponent,
    RelicRendererComponent,
    LoadingAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
