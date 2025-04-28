import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ParcelManagementItem } from '@models/parcel-management.models';
import { MarbleRunApiService } from '@services/api';
import { NotificationService } from '@services/notification.service';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parcel-management',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  providers: [MarbleRunApiService],
  templateUrl: './parcel-management.component.html',
  styleUrl: './parcel-management.component.scss',
})
export class ParcelManagementComponent implements OnInit {
  subscription = new Subscription();
  parcels: ParcelManagementItem[] = [];

  constructor(
    private readonly marbleRunApiService: MarbleRunApiService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.parcels = simulatedResponse; // Simulated response for demonstration;
    // this.subscription.add(
    //   this.marbleRunApiService.getParcelById('0').subscribe({
    //     next: (response) => {
    //       console.log(response);
    //     },
    //     error: (error) => {
    //       this.notificationService.showError('Error fetching parcel', error.message);
    //       console.error('Error fetching parcel:', error);
    //     },
    //     complete: () => {
    //       console.log('Parcel fetch complete');
    //     },
    //   })
    // );
  }
}
// Simulate the call to marbleRunApiService.getParcelById
const simulatedResponse: ParcelManagementItem[] = [
  {
    id: '1',
    name: 'Parcel A',
    description: 'Description for Parcel A',
    status: 'Delivered',
    quantity: 10,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-02'),
  },
  {
    id: '2',
    name: 'Parcel B',
    description: 'Description for Parcel B',
    status: 'In Transit',
    quantity: 5,
    createdAt: new Date('2023-01-03'),
    updatedAt: new Date('2023-01-04'),
  },
  {
    id: '3',
    name: 'Parcel C',
    description: 'Description for Parcel C',
    status: 'Pending',
    quantity: 8,
    createdAt: new Date('2023-01-05'),
    updatedAt: new Date('2023-01-06'),
  },
  {
    id: '4',
    name: 'Parcel D',
    description: 'Description for Parcel D',
    status: 'Delivered',
    quantity: 12,
    createdAt: new Date('2023-01-07'),
    updatedAt: new Date('2023-01-08'),
  },
  {
    id: '5',
    name: 'Parcel E',
    description: 'Description for Parcel E',
    status: 'In Transit',
    quantity: 7,
    createdAt: new Date('2023-01-09'),
    updatedAt: new Date('2023-01-10'),
  },
  {
    id: '6',
    name: 'Parcel F',
    description: 'Description for Parcel F',
    status: 'Pending',
    quantity: 3,
    createdAt: new Date('2023-01-11'),
    updatedAt: new Date('2023-01-12'),
  },
];
