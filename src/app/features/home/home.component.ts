import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MarbleRunApiService } from '@services/api';

@Component({
  selector: 'app-home',
  imports: [ CommonModule],
  providers: [MarbleRunApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pageList = [{ name: 'Home', path: 'home', title: 'Home', description: 'Home' }];

  ngOnInit() {
  }

  navigateToPage(link: string):void {
    // Implement navigation logic here
  }
}
