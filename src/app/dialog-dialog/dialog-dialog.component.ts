import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog-dialog',
  templateUrl: './dialog-dialog.component.html',
  styleUrls: ['./dialog-dialog.component.scss'],
})
export class DialogDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
