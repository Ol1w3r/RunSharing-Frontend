import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { LibraryManagerService } from 'src/app/library-manager/library-manager.service';
import {
  Card,
  Creature,
  Relic,
} from 'src/app/library-manager/library-manager.types';
import { LoadingAnimationService } from 'src/app/loading-animation/loading-animation.service';
import { environment } from 'src/environments/environment';
import { RunRecap } from './recap.types';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css'],
})
export class RecapComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'image'];
  runId: string = '';
  ready = false;
  recap: RunRecap | undefined;
  character: Creature | null = null;
  deck: (Card | null)[] = [];
  relics: (Relic | null)[] = [];
  is404: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private libraryManagerService: LibraryManagerService,
    private loadingAnimationService: LoadingAnimationService
  ) {}

  Sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  async ngOnInit() {
    this.loadingAnimationService.show();
    this.runId =
      this.route.snapshot.paramMap.get('id') != null
        ? (this.route.snapshot.paramMap.get('id') as string)
        : '0';
    await this.getRecapById(this.runId);
    if (!this.is404) {
      this.fillDeck();
      this.fillRelics();
      this.setCharacter();
      this.ready = true;
    }
    this.loadingAnimationService.hide();
    console.log(this.recap);
  }

  private async getRecapById(id: string) {
    let url = `${environment.backend}/run/${id}`;
    await axios
      .get(url)
      .then((response) => {
        this.recap = response.data as RunRecap;
        if (this.recap == null) {
          console.log(this.recap);
          this.is404 = true;
          return;
        }
        this.recap.itemsPurchased = response.data.itemsPurchased.split(';');
        this.recap.goldPerFloor = response.data.goldPerFloor.split(';');
        this.recap.itemPurchaseFloors =
          response.data.itemPurchaseFloors.split(';');
        this.recap.currentHpPerFloor =
          response.data.currentHpPerFloor.split(';');
        this.recap.itemsPurged = response.data.itemsPurged.split(';');
        this.recap.campfireChoices = response.data.campfireChoices.split(';');
        this.recap.pathTaken = response.data.pathTaken.split(';');
        this.recap.masterDeck = response.data.masterDeck.split(';');
        this.recap.maxHpPerFloor = response.data.maxHpPerFloor.split(';');
        this.recap.relics = response.data.relics.split(';');
        this.recap.cardChoices = response.data.cardChoices.split(';');
        this.recap.potionsFloorUsage =
          response.data.potionsFloorUsage.split(';');
        this.recap.damageTaken = response.data.damageTaken.split(';');
        this.recap.relicsObtained = response.data.relicsObtained.split(';');
        this.recap.eventChoices = response.data.eventChoices.split(';');
        this.recap.bossRelics = response.data.bossRelics.split(';');
        this.recap.itemPurgedFloors = response.data.itemPurgedFloors.split(';');
        this.recap.potionsObtained = response.data.potionsObtained.split(';');
      })
      .catch((e) => console.log(e));
  }

  private setCharacter(): void {
    this.character = this.libraryManagerService.getCreature(
      this.recap?.characterChosen ?? ''
    );
    console.log(this.recap?.characterChosen);
    console.log(this.character);
  }

  private fillDeck(): void {
    this.recap?.masterDeck.forEach((c) =>
      this.deck.push(this.libraryManagerService.getCardFromId(c))
    );
    console.log(this.deck);
  }

  private fillRelics(): void {
    this.recap?.relics.forEach((r) =>
      this.relics.push(this.libraryManagerService.getRelicFromId(r))
    );
  }
}
