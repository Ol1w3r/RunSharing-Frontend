import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../library-manager.types';

@Component({
  selector: 'app-small-card-renderer',
  templateUrl: './small-card-renderer.component.html',
  styleUrls: ['./small-card-renderer.component.css'],
})
export class SmallCardRendererComponent implements OnInit {
  @Input() card: Card | null = null;

  constructor() {}

  ngOnInit(): void {}
}
