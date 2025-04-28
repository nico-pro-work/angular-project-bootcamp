import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MarbleRunApiService } from '@services/api';
import { NotificationService } from '@services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parcel-management',
  imports: [CommonModule],
  providers: [MarbleRunApiService],
  templateUrl: './parcel-management.component.html',
  styleUrl: './parcel-management.component.scss',
})
export class ParcelManagementComponent implements OnInit {
  subscription = new Subscription();

  constructor(
    private readonly marbleRunApiService: MarbleRunApiService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.marbleRunApiService.getParcelById('0').subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          this.notificationService.showError('Error fetching parcel', error.message);
          console.error('Error fetching parcel:', error);
        },
        complete: () => {
          console.log('Parcel fetch complete');
        },
      })
    );
  }
}
