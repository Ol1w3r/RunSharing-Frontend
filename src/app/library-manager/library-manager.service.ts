import { Injectable } from '@angular/core';
import items from '../../assets/export/items.json';
import {
  Card,
  Relic,
  Creature,
  Potion,
  Keyword,
} from './library-manager.types';

@Injectable({
  providedIn: 'root',
})
export class LibraryManagerService {
  private cards: Card[] = [];
  private relics: Relic[] = [];
  private creatures: Creature[] = [];
  private potions: Potion[] = [];
  private keywords: Keyword[] = [];

  constructor() {
    this.importItems();
  }

  public getCreature(name: string): Creature | null {
    let result: Creature | null;
    console.log(this.creatures);
    result = this.copy<Creature | null>(
      this.creatures.find((c) => c.name === name) ?? null
    );
    return result;
  }

  public getCardFromId(id: string): Card | null {
    let result: Card | null;
    if (id.startsWith('Searing Blow+')) {
      result = this.copyCard(
        this.cards.find((c) => c.id === 'Searing Blow+1') ?? null
      );
      if (result != null) {
        result.id = id;
        result.name = id;
      }
    } else {
      result = this.copy<Card | null>(
        this.cards.find((c) => c.id === id) ?? null
      );
    }
    return result;
  }

  public getRelicFromId(id: string): Relic | null {
    let result: Relic | null;
    result = this.copy<Relic | null>(
      this.relics.find((r) => r.id === id) ?? null
    );
    return result;
  }

  private importItems(): void {
    this.cards = items.cards;
    this.relics = items.relics;
    this.creatures = items.creatures;
    this.potions = items.potions;
    this.keywords = items.keywords;
  }

  private copy<Type>(original: Type): Type {
    let copy: Type = Object.assign({}, original);
    return copy;
  }

  private copyCreature(original: Creature | null): Creature {
    let copy: Creature = Object.assign({}, original);
    return copy;
  }

  private copyCard(original: Card | null): Card {
    let copy: Card = Object.assign({}, original);
    return copy;
  }

  private copyRelic(original: Relic | null): Relic {
    let copy: Relic = Object.assign({}, original);
    return copy;
  }
}
