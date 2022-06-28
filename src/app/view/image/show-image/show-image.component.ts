import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
