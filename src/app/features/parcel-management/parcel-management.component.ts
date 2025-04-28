import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MarbleRunApiService } from '@services/api';

@Component({
  selector: 'app-parcel-management',
  imports: [CommonModule],
  providers: [MarbleRunApiService],
  templateUrl: './parcel-management.component.html',
  styleUrl: './parcel-management.component.scss',
})
export class ParcelManagementComponent implements OnInit {
  constructor(private readonly marbleRunApiService: MarbleRunApiService) {}

  ngOnInit() {
    this.marbleRunApiService.getParcelById('0');
  }

  navigateToPage(link: string): void {
    // Implement navigation logic here
  }
}
