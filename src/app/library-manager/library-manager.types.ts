export interface Card {
  id: string;
  name: string;
  color: string;
  rarity: string;
  type: string;
  cost: string;
  description: string;
  mod: string;
  image: string;
  small_image: string;
}

export interface Relic {
  id: string;
  name: string;
  tier: string;
  pool: string;
  description: string;
  flavorText: string;
  image: string;
  popup_image: string;
  small_popup_image: string;
  mod: string;
}

export interface Potion {
  name: string;
  rarity: string;
  description: string;
  image: string;
  mod: string;
}

export interface Creature {
  name: string;
  type: string;
  minHP: string;
  maxHP: string;
  image: string;
  mod: string;
}

export interface Keyword {
  name: string;
  description: string;
  names: string[];
  mod: string;
}
