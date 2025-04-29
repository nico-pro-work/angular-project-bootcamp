import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBarDuration = 5000; // 5 seconds;
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private horizontalPosition: MatSnackBarHorizontalPosition = 'right';

  snackBarConfig = {
    duration: this.snackBarDuration,
    verticalPosition: this.verticalPosition,
    horizontalPosition: this.horizontalPosition,
  };

  constructor(private snackBar: MatSnackBar) {}

  showNotification(message: string, action: string = 'Close'): void {
    this.snackBar.open(message, action, this.snackBarConfig);
  }

  showError(
    message: string,
    action: string = 'Close',
  ): void {
    this.snackBar.open(message, action, {
      ...this.snackBarConfig,
      panelClass: ['error-snackbar'],
    });
  }

  showSuccess(
    message: string,
    action: string = 'Close',
  ): void {
    this.snackBar.open(message, action, {
      ...this.snackBarConfig,
      panelClass: ['success-snackbar'],
    });
  }
}
