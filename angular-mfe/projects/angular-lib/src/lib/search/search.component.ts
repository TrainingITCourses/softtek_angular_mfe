import { Component, effect, ElementRef, model, viewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  tap,
} from 'rxjs';

@Component({
  selector: 'lib-search',
  template: ` <input type="search" [value]="searchTerm()" #searchInput /> `,
})
export class SearchComponent {
  protected searchInputElRef = viewChild<ElementRef>('searchInput');

  public searchTerm = model<string>('');

  private onSearchInputElRef = effect(() => {
    const searchInputNg = this.searchInputElRef();
    if (!searchInputNg) return;
    const searchInputNative = searchInputNg.nativeElement;
    fromEvent<InputEvent>(searchInputNative, 'input')
      .pipe(
        map((event) => event.target as HTMLInputElement),
        map((target) => target.value),
        filter((value) => value.length == 0 || value.length > 2),
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => this.searchTerm.set(value))
      )
      .subscribe();
  });
}
