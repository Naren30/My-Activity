import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

/**
 * @title Plain input autocomplete
 */

@Component({
  selector: 'app-sear',
  templateUrl: './sear.component.html',
  styleUrls: ['./sear.component.css']
})
export class SearComponent implements OnInit {
  control = new FormControl('');
  streets: string[] = ['AAriyalur', 'ALAPPUZHA','BAGA BEACH','Chengalpet', 'Chennai', 'Coimbatore','Cuddalore','Christ Church','CHADWICK FALLS',
  'Dharmapuri	','Dindigul','DUDHSAGAR FALLS',
  'Goa night life',
  'INDIA GATE', 'Illinois',
  'Kallakurichi', 'KOCHI','Kancheepuram','Karur','Krishnagiri','Kanyakumari','Kali Bari temple','KARGIL',
  'LOTUS TEMPLE','LEH',
  'Madurai','Mayiladuthurai','Mall Road','MUNNAR',
  'Nagapattinam','Namakkal',
  'QUTAB MINAR',
  'Rameshwaram',
  'Shimla Town Hall', 'SURU VALLEY','SANKAR GOMPA',
  'Thanjavur', 'Thiruvallur','Tiruvannamalai','The Ridge','THE SUMMER HILLS','TAJ MAHAL','THE COTIGAO WILDLIFE SANCTUARY',
  'Viluppuram', 'Virudhunagar','VARKALA','Delhi','Kerala','Tamil Nadu','Goa','Shimla'
];
  filteredStreets!: Observable<string[]>;

  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
