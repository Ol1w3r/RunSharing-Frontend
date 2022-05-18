export interface RunRecap {
  // Meta
  id: number;
  permanent: boolean;
  uploaded: string;
  name: string;
  // STS
  host: string;
  characterChosen: string;
  itemsPurchased: string[];
  goldPerFloor: number[];
  campfireRested: number;
  floorReached: number;
  playtime: number;
  itemPurchaseFloors: string[];
  currentHpPerFloor: number[];
  itemsPurged: string[];
  gold: number;
  isAscension: boolean;
  choseSeed: boolean;
  campfireUpgraded: number;
  campfireChoices: string[];
  pathTaken: string[];
  circletCount: number;
  masterDeck: string[];
  maxHpPerFloor: number[];
  victory: boolean;
  relics: string[];
  cardChoices: string;
  potionsFloorUsage: string[];
  damageTaken: string[];
  relicsObtained: string[];
  eventChoices: string[];
  bossRelics: string[];
  itemPurgedFloors: string[];
  seedPlayed: number;
  potionsObtained: string[];
  ascensionLevel: number;
}