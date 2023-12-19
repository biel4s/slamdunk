import {Injectable, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, Observable, of, startWith, Subscription, switchMap} from "rxjs";
import {PlayersModel} from "./models/players.model";
import {PlayersData} from "./models/players";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})

export class AutocompleteService implements OnInit {
  playersSource: MatTableDataSource<PlayersModel> = new MatTableDataSource(PlayersData);
  playersSource2: PlayersModel[] = PlayersData;

  myControl = new FormControl<PlayersModel[]>(this.playersSource2);
  filteredOptions!: Observable<PlayersModel[]>;
  private sub!: Subscription;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        startWith(''),
        switchMap((val) => {
          return this.filterData(val as string);
        })
      );
  }

  displayFn(option: PlayersModel): string {
    return option && option.name ? option.name : '';
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  filterData(value: string): Observable<PlayersModel[]> {
    return of(this.playersSource.data
      .filter((singleData: PlayersModel) => {
        return singleData.name.toLowerCase().includes(value.toLowerCase())
      })
    );
  }
}
