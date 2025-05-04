import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MarbleRunApiService } from '@services/api';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCheckboxModule],
  providers: [MarbleRunApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  checkboxData: { [key: number]: boolean } = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  };

  ngOnInit() {
    const storedData = localStorage.getItem('todolistData');
    if (storedData) {
      this.checkboxData = JSON.parse(storedData);
    }
  }

  handleCheckboxChange(event: MatCheckboxChange, id: number): void {
    this.checkboxData[id] = event.checked;
    localStorage.setItem('todolistData', JSON.stringify(this.checkboxData));

  }
}
