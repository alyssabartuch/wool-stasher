import { Component, OnInit } from '@angular/core';
import { Wool } from '../wool';

@Component({
  selector: 'app-stash-list',
  templateUrl: './stash-list.component.html',
  styleUrls: ['./stash-list.component.css']
})
export class StashListComponent implements OnInit {
    wool: Wool = {
        id: 101,
        name: 'Herding Cats',
        dateStashed: 'March 2017',
        fiber: 'Merino',
        status: 25,
        notes: 'some meaningful information about this wool'
    };

    constructor() { }

    ngOnInit() {
    }

}
