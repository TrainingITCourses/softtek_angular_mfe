import { Component, input } from '@angular/core';
// Source path
// import { SearchComponent } from '../../../../angular-lib/src/lib/search/search.component';

// Dist path
import { SearchComponent } from '../../../../../dist/angular-lib';

// Node Modules
// import { SearchComponent } from '@softtek/angular-lib';

@Component({
  imports: [SearchComponent],
  template: `
    <lib-search [(searchTerm)]="stocksSearch" />
    <div>Searching stocks for : {{ stocksSearch }}</div>
    <pre>From router query params: {{ st() }}</pre>
  `,
})
export default class StocksPage {
  public st = input<string>();
  protected stocksSearch = 'algo';
}
