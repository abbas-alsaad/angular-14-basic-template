import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-image',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
})
export class AddImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
function provideRouter(routes: any): import('@angular/core').Provider {
  throw new Error('Function not implemented.');
}
