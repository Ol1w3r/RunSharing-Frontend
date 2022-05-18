import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../library-manager.types';

@Component({
  selector: 'app-card-renderer',
  templateUrl: './card-renderer.component.html',
  styleUrls: ['./card-renderer.component.css'],
})
export class CardRendererComponent implements OnInit {
  @Input() card: Card | null = null;

  constructor() {}

  ngOnInit(): void {}
}
