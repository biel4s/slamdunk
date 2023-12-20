export interface StandingsModel {
  position: number;
  logo: string;
  team: string;
  wins: number;
  loses: number;
  winratio: number;
  home?: string;
  away?: string;
  last10: string;
  points?: number;
}
