import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ParcelManagementItem } from '@models/parcel-management.models';
import { MarbleRunApiService } from '@services/api';
import { NotificationService } from '@services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parcel-item',
  imports: [CommonModule],
  providers: [MarbleRunApiService],
  templateUrl: './parcel-item.component.html',
  styleUrl: './parcel-item.component.scss',
})
export class ParcelItemComponent implements OnInit {
  subscription = new Subscription();
  @Input() data: ParcelManagementItem | undefined;

  constructor(
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit() {
  }
}
