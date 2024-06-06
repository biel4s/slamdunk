import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavbarComponent} from "../../shared/components/header/header.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {StatsTabComponent} from "../components/stats-tab/stats-tab.component";
import {StatsModel} from "../models/stats.model";
import * as euroleagueAveragePlayers from "../models/players/euroleague/averageStatsPlayers";
import * as euroleagueTotalPlayers from "../models/players/euroleague/totalStatsPlayers";
import * as euroleagueTotalTeams from "../models/teams/euroleague/totalStatsTeams";
import * as euroleagueAverageTeams from "../models/teams/euroleague/averageStatsTeams";
import * as eurocupTotalPlayers from "../models/players/eurocup/totalStatsPlayers";
import * as eurocupAveragePlayers from "../models/players/eurocup/averageStatsPlayers";
import * as eurocupTotalTeams from "../models/teams/eurocup/totalStatsTeams";
import * as eurocupAverageTeams from "../models/teams/eurocup/averageStatsTeams";
import * as bclTotalPlayers from "../models/players/bcl/totalStatsPlayers";
import * as bclAveragePlayers from "../models/players/bcl/averageStatsPlayers";
import * as bclTotalTeams from "../models/teams/bcl/totalStatsTeams";
import * as bclAverageTeams from "../models/teams/bcl/averageStatsTeams";
import * as acbTotalPlayers from "../models/players/acb/totalStatsPlayers";
import * as acbAveragePlayers from "../models/players/acb/averageStatsPlayers";
import * as acbTotalTeams from "../models/teams/acb/totalStatsTeams";
import * as acbAverageTeams from "../models/teams/acb/averageStatsTeams";
import * as bslTotalPlayers from "../models/players/bsl/totalStatsPlayers";
import * as bslAveragePlayers from "../models/players/bsl/averageStatsPlayers";
import * as bslTotalTeams from "../models/teams/bsl/totalStatsTeams";
import * as bslAverageTeams from "../models/teams/bsl/averageStatsTeams";
import * as legabasketaTotalPlayers from "../models/players/legabasketa/totalStatsPlayers";
import * as legabasketaAveragePlayers from "../models/players/legabasketa/averageStatsPlayers";
import * as legabasketaTotalTeams from "../models/teams/legabasketa/totalStatsTeams";
import * as legabasketaAverageTeams from "../models/teams/legabasketa/averageStatsTeams";
import {ShapeDividerComponent} from "../../shared/components/shape-divider/shape-divider.component";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, MatFormFieldModule, MatOptionModule, MatSelectModule, StatsTabComponent, ShapeDividerComponent],
  templateUrl: './stats-page.component.html',
  styleUrl: './stats-page.component.scss'
})
export class StatsPageComponent {
  selectedStatistics: string = 'Totals';
  selectedLeague: string = 'euroleague';

  leagueMapping: { [key: string]: number } = {
    'euroleague': 0,
    'eurocup': 1,
    'bcl': 2,
    'acb': 3,
    'bsl': 4,
    'lega basket a': 5
  }

  totalPlayersStats: { heading: string; data: StatsModel[][] }[] = [
    {
      heading: 'Points',
      data: [euroleagueTotalPlayers.Points, eurocupTotalPlayers.Points, bclTotalPlayers.Points, acbTotalPlayers.Points, bslTotalPlayers.Points, legabasketaTotalPlayers.Points]
    }

    ,
    {
      heading: 'Rebounds',
      data:
        [euroleagueTotalPlayers.Rebounds, eurocupTotalPlayers.Rebounds, bclTotalPlayers.Rebounds, acbTotalPlayers.Rebounds, bslTotalPlayers.Rebounds, legabasketaTotalPlayers.Rebounds]
    }
    ,
    {
      heading: 'Assists', data:
        [euroleagueTotalPlayers.Assists, eurocupTotalPlayers.Assists, bclTotalPlayers.Assists, acbTotalPlayers.Assists, bslTotalPlayers.Assists, legabasketaTotalPlayers.Assists]
    }
    ,
    {
      heading: 'Blocks', data:
        [euroleagueTotalPlayers.Blocks, eurocupTotalPlayers.Blocks, bclTotalPlayers.Blocks, acbTotalPlayers.Blocks, bslTotalPlayers.Blocks, legabasketaTotalPlayers.Blocks]
    }
    ,
    {
      heading: 'Steals', data:
        [euroleagueTotalPlayers.Steals, eurocupTotalPlayers.Steals, bclTotalPlayers.Steals, acbTotalPlayers.Steals, bslTotalPlayers.Steals, legabasketaTotalPlayers.Steals]
    }
    ,
    {
      heading: 'Two-pointers Made',
      data:
        [euroleagueTotalPlayers.TwoPointers, eurocupTotalPlayers.TwoPointers, bclTotalPlayers.TwoPointers, acbTotalPlayers.TwoPointers, bslTotalPlayers.TwoPointers, legabasketaTotalPlayers.TwoPointers]
    }
    ,
    {
      heading: 'Three-pointers Made',
      data:
        [euroleagueTotalPlayers.ThreePointers, eurocupTotalPlayers.ThreePointers, bclTotalPlayers.ThreePointers, acbTotalPlayers.ThreePointers, bslTotalPlayers.ThreePointers, legabasketaTotalPlayers.ThreePointers]
    }
    ,
    {
      heading: 'Free Throws Made',
      data:
        [euroleagueTotalPlayers.FreePointers, eurocupTotalPlayers.FreePointers, bclTotalPlayers.FreePointers, acbTotalPlayers.FreePointers, bslTotalPlayers.FreePointers, legabasketaTotalPlayers.FreePointers]
    }
    ,
  ]
  ;

  averagePlayersStats: { heading: string; data: StatsModel[][] }[] = [
    {
      heading: 'Points',
      data: [euroleagueAveragePlayers.Points, eurocupAveragePlayers.Points, bclAveragePlayers.Points, acbAveragePlayers.Points, bslAveragePlayers.Points, legabasketaAveragePlayers.Points]
    },
    {
      heading: 'Rebounds',
      data: [euroleagueAveragePlayers.Rebounds, eurocupAveragePlayers.Rebounds, bclAveragePlayers.Rebounds, acbAveragePlayers.Rebounds, bslAveragePlayers.Rebounds, legabasketaAveragePlayers.Rebounds]
    },
    {
      heading: 'Assists',
      data: [euroleagueAveragePlayers.Assists, eurocupAveragePlayers.Assists, bclAveragePlayers.Assists, acbAveragePlayers.Assists, bslAveragePlayers.Assists, legabasketaAveragePlayers.Assists]
    },
    {
      heading: 'Blocks',
      data: [euroleagueAveragePlayers.Blocks, eurocupAveragePlayers.Blocks, bclAveragePlayers.Blocks, acbAveragePlayers.Blocks, bslAveragePlayers.Blocks, legabasketaAveragePlayers.Blocks]
    },
    {
      heading: 'Steals',
      data: [euroleagueAveragePlayers.Steals, eurocupAveragePlayers.Steals, bclAveragePlayers.Steals, acbAveragePlayers.Steals, bslAveragePlayers.Steals, legabasketaAveragePlayers.Steals]
    },
    {
      heading: 'Two-pointers Made',
      data: [euroleagueAveragePlayers.TwoPointers, eurocupAveragePlayers.ThreePointers, bclAveragePlayers.TwoPointers, acbAveragePlayers.TwoPointers, bslAveragePlayers.TwoPointers, legabasketaAveragePlayers.TwoPointers]
    },
    {
      heading: 'Three-pointers Made',
      data: [euroleagueAveragePlayers.ThreePointers, eurocupAveragePlayers.ThreePointers, bclAveragePlayers.ThreePointers, acbAveragePlayers.ThreePointers, bslAveragePlayers.ThreePointers, legabasketaAveragePlayers.ThreePointers]
    },
    {
      heading: 'Free Throws Made',
      data: [euroleagueAveragePlayers.FreePointers, eurocupAveragePlayers.FreePointers, bclAveragePlayers.FreePointers, acbAveragePlayers.FreePointers, bslAveragePlayers.FreePointers, legabasketaAveragePlayers.FreePointers]
    },
  ];

  totalTeamsStats: { heading: string; data: StatsModel[][] }[] = [
    {
      heading: 'Points',
      data: [euroleagueTotalTeams.Points, eurocupTotalTeams.Points, bclTotalTeams.Points, acbTotalTeams.Points, bslTotalTeams.Points, legabasketaTotalTeams.Points]
    },
    {
      heading: 'Rebounds',
      data: [euroleagueTotalTeams.Rebounds, eurocupTotalTeams.Rebounds, bclTotalTeams.Rebounds, acbTotalTeams.Rebounds, bslTotalTeams.Rebounds, legabasketaTotalTeams.Rebounds]
    },
    {
      heading: 'Assists',
      data: [euroleagueTotalTeams.Assists, eurocupTotalTeams.Assists, bclTotalTeams.Assists, acbTotalTeams.Assists, bslTotalTeams.Assists, legabasketaTotalTeams.Assists]
    },
    {
      heading: 'Blocks',
      data: [euroleagueTotalTeams.Blocks, eurocupTotalTeams.Blocks, bclTotalTeams.Blocks, acbTotalTeams.Blocks, bslTotalTeams.Blocks, legabasketaTotalTeams.Blocks]
    },
    {
      heading: 'Steals',
      data: [euroleagueTotalTeams.Steals, eurocupTotalTeams.Steals, bclTotalTeams.Steals, acbTotalTeams.Steals, bslTotalTeams.Steals, legabasketaTotalTeams.Steals]
    },
    {
      heading: 'Two-pointers Made',
      data: [euroleagueTotalTeams.TwoPointers, eurocupTotalTeams.TwoPointers, bclTotalTeams.TwoPointers, acbTotalTeams.TwoPointers, bslTotalTeams.TwoPointers, legabasketaTotalTeams.TwoPointers]
    },
    {
      heading: 'Three-pointers Made',
      data: [euroleagueTotalTeams.ThreePointers, eurocupTotalTeams.ThreePointers, bclTotalTeams.ThreePointers, acbTotalTeams.ThreePointers, bslTotalTeams.ThreePointers, legabasketaTotalTeams.ThreePointers]
    },
    {
      heading: 'Free Throws Made',
      data: [euroleagueTotalTeams.FreePointers, eurocupTotalTeams.FreePointers, bclTotalTeams.FreePointers, acbTotalTeams.FreePointers, bslTotalTeams.FreePointers, legabasketaTotalTeams.FreePointers]
    },
  ];

  averageTeamsStats: { heading: string; data: StatsModel[][] }[] = [
    {
      heading: 'Points',
      data: [euroleagueAverageTeams.Points, eurocupAverageTeams.Points, bclAverageTeams.Points, acbAverageTeams.Points, bslAverageTeams.Points, legabasketaAverageTeams.Points]
    },
    {
      heading: 'Rebounds',
      data: [euroleagueAverageTeams.Rebounds, eurocupAverageTeams.Rebounds, bclAverageTeams.Rebounds, acbAverageTeams.Rebounds, bslAverageTeams.Rebounds, legabasketaAverageTeams.Rebounds]
    },
    {
      heading: 'Assists',
      data: [euroleagueAverageTeams.Assists, eurocupAverageTeams.Assists, bclAverageTeams.Assists, acbAverageTeams.Assists, bslAverageTeams.Assists, legabasketaAverageTeams.Assists]
    },
    {
      heading: 'Blocks',
      data: [euroleagueAverageTeams.Blocks, eurocupAverageTeams.Blocks, bclAverageTeams.Blocks, acbAverageTeams.Blocks, bslAverageTeams.Blocks, legabasketaAverageTeams.Blocks]
    },
    {
      heading: 'Steals',
      data: [euroleagueAverageTeams.Steals, eurocupAverageTeams.Steals, bclAverageTeams.Steals, acbAverageTeams.Steals, bslAverageTeams.Steals, legabasketaAverageTeams.Steals]
    },
    {
      heading: 'Two-pointers Made',
      data: [euroleagueAverageTeams.TwoPointers, eurocupAverageTeams.TwoPointers, bclAverageTeams.TwoPointers, acbAverageTeams.TwoPointers, bslAverageTeams.TwoPointers, legabasketaAverageTeams.TwoPointers]
    },
    {
      heading: 'Three-pointers Made',
      data: [euroleagueAverageTeams.ThreePointers, eurocupAverageTeams.ThreePointers, bclAverageTeams.ThreePointers, acbAverageTeams.ThreePointers, bslAverageTeams.ThreePointers, legabasketaAverageTeams.ThreePointers]
    },
    {
      heading: 'Free Throws Made',
      data: [euroleagueAverageTeams.FreePointers, eurocupAverageTeams.FreePointers, bclAverageTeams.FreePointers, acbAverageTeams.FreePointers, bslAverageTeams.FreePointers, legabasketaAverageTeams.FreePointers]
    },
  ];
}
