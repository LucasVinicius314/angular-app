import { Component } from '@angular/core';
import { DialogDialogComponent } from '../dialog-dialog/dialog-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export type DialogData = {};

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDialogComponent, {
      width: '250px',
      data: { name: 'bbbbbbb', animal: 'aaaa' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
