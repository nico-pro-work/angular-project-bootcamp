import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ParcelManagementItem } from '@models/parcel-management.models';
import { MarbleRunApiService } from '@services/api';
import { NotificationService } from '@services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parcel-item',
  imports: [CommonModule, MatCardModule, MatIconModule],
  providers: [MarbleRunApiService],
  templateUrl: './parcel-item.component.html',
  styleUrl: './parcel-item.component.scss',
})
export class ParcelItemComponent implements OnInit {
  subscription = new Subscription();
  @Input() data!: ParcelManagementItem;
  @Output() deleteParcel = new EventEmitter<number>();

  constructor(private readonly notificationService: NotificationService) {}

  ngOnInit() {}

  handleEditParcel() {
    this.notificationService.showNotification('Please implement parcel edit');
  }

  handleDeleteParcel() {
    this.deleteParcel.emit(this.data.id);
  }
}
