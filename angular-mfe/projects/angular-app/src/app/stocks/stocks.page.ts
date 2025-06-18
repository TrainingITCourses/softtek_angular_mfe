import { Component, input, linkedSignal } from '@angular/core';
// Source path
import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { SearchComponent } from '../../../../angular-lib/src/lib/search/search.component';

// Dist path
//import { SearchComponent } from '../../../../../dist/angular-lib';

// Node Modules
// import { SearchComponent } from '@softtek/angular-lib';

@Component({
  imports: [SearchComponent, JsonPipe],
  template: `
    <lib-search [(searchTerm)]="stocksSearch" />
    <div>Searching stocks for : {{ stocksSearch() }}</div>
    <div>From router query params: {{ st() }}</div>
    <pre>{{ stocksResource.value() | json }}</pre>
  `,
})
export default class StocksPage {
  public st = input<string>();
  protected stocksSearch = linkedSignal<string>(() => this.st() ?? 'MSFT');

  private url = 'http://localhost:3000/stocks/';
  protected stocksResource = httpResource(() => this.url + this.stocksSearch());
}
