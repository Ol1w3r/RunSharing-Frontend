import { Component, Input, OnInit } from '@angular/core';
import { Relic } from '../library-manager.types';

@Component({
  selector: 'app-relic-renderer',
  templateUrl: './relic-renderer.component.html',
  styleUrls: ['./relic-renderer.component.css'],
})
export class RelicRendererComponent implements OnInit {
  @Input() relic: Relic | null = null;
  constructor() {}

  ngOnInit(): void {}
}
