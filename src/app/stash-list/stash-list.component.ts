import { Component, OnInit } from '@angular/core';
import { Wool } from '../wool';
import { WOOLS } from '../mock-wool-list';

@Component({
  selector: 'app-stash-list',
  templateUrl: './stash-list.component.html',
  styleUrls: ['./stash-list.component.css']
})
export class StashListComponent implements OnInit {
    wools = WOOLS;


    selectedWool: Wool;

    onSelect(wool: Wool): void {
        this.selectedWool = wool;
    }


    constructor() { }

    ngOnInit() {
    }

}
