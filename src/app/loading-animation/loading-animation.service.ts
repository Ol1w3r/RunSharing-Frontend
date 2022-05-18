import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingAnimationComponent } from './loading-animation.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingAnimationService {
  constructor(private dialog: MatDialog) {}

  private dialogRef?: MatDialogRef<LoadingAnimationComponent>;

  ngOnInit(): void {}

  public show() {
    console.log('Dialog opened');
    this.dialogRef = this.dialog.open<LoadingAnimationComponent, void, void>(
      LoadingAnimationComponent,
      {
        disableClose: true,
      }
    );
    return 'Test';
  }

  public hide() {
    this.dialogRef?.close();
  }
}
