import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {
    public title: string = '';
    public contentAlert: string = '';
  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogElementsExampleDialog) { 
        this.title = data.title;
        this.contentAlert = data.contentAlert;
    }

  ngOnInit(): void {
  }

  
}
export class DialogElementsExampleDialog {
    constructor(public title: string, public contentAlert: string) {
    }
}