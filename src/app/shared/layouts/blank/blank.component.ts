import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css'],
})
export class BlankComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
