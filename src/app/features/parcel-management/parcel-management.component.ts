import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ParcelManagementItem } from '@models/parcel-management.models';
import { MarbleRunApiService } from '@services/api';
import { NotificationService } from '@services/notification.service';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateParcelBody } from '@models/api-models';

@Component({
  selector: 'app-parcel-management',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MarbleRunApiService],
  templateUrl: './parcel-management.component.html',
  styleUrl: './parcel-management.component.scss',
})
export class ParcelManagementComponent implements OnInit {
  subscription = new Subscription();
  parcels: ParcelManagementItem[] = [];
  itemForm: FormGroup;

  @ViewChild('drawer') drawer: MatSidenav | undefined;

  constructor(
    private readonly marbleRunApiService: MarbleRunApiService,
    private readonly notificationService: NotificationService,
    private readonly fb: FormBuilder
  ) {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
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

  onSubmit(): void {
    if (this.itemForm.valid) {
      const { name, quantity } = this.itemForm.value;
      const formData: CreateParcelBody = {
        name,
        volume: quantity,
        owner: { name: 'default' },
      };
      console.log('Form submitted:', formData);

      this.subscription.add(
        this.marbleRunApiService.createParcel(formData).subscribe({
          next: (response) => {
            this.notificationService.showSuccess(
              'Parcel created successfully',
              response.id.toString()
            );
            this.parcels.push({
              id: response.id,
              name: formData.name,
              quantity: formData.volume,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            this.drawer?.close();
          },
          error: (error) => {
            this.notificationService.showError(
              'Error creating parcel',
              error.message
            );
            console.error('Error creating parcel:', error);
          },
        })
      );
      // Add logic to handle form submission, e.g., API call
    } else {
      console.error('Form is invalid');
    }
  }

  toggleNewItemDrawer(): void {
    this.drawer?.open();
  }
}
