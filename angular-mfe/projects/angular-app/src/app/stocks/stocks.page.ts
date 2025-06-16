import { Component } from '@angular/core';
import { SearchComponent } from '../../../../angular-lib/src/lib/search/search.component';
@Component({
  imports: [SearchComponent],
  template: `
    <lib-search [(searchTerm)]="stocksSearch" />
    <div>Searching stocks for : {{ stocksSearch }}</div>
  `,
})
export default class StocksPage {
  protected stocksSearch = 'algo';
}
