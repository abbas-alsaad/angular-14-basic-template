import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-image',
  standalone: true,
  // Now you can imported only what you need, instead of import all CommonModule,
  //  i use *ngIf in template so i import it.
  imports: [RouterModule, NgIf],
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent implements OnInit {
  isReditected: any;
  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.queryParams.subscribe((res: any) => {
      this.isReditected = res.isRedirected;
    });
  }
}
