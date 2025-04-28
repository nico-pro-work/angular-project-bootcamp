import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MarbleRunApiService } from '@services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, RouterLink, RouterLinkActive],
  providers: [MarbleRunApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private readonly marbleRunApiService: MarbleRunApiService) {}

  ngOnInit() {
    // this.marbleRunApiService.getParcelById('0');
  }
}
