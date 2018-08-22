import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name = 'Roller derby manager';
  public googleplay = 'assets/img/dl_app_googleplay.jpg';
  public appstore = 'assets/img/dl_app_appstore.jpg';

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NavDialogRespOpenComponent, {
      width: '100vh',
      height: '100vh',
      maxWidth: '100vh',
      maxHeight: '100vh',
      hasBackdrop: false
    });
  }

}

@Component({
  selector: 'nav_dialog_resp_open',
  templateUrl: 'nav_dialog_resp_open.component.html',
  styleUrls: ['nav_dialog_resp_open.component.css']
})
export class NavDialogRespOpenComponent {

  constructor(
    public dialogRef: MatDialogRef<NavDialogRespOpenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}