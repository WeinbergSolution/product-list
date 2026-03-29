import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductList } from './shared/componets/product-list/product-list';
import { ProductDetail } from './shared/componets/product-detail/product-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductList, ProductDetail],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  our_text = 'Hallo Welt!';

  //Lifecycle hook ngOnInit() {
  // Bei initialisierung der Komponente wird dieser Code ausgeführt,
  //  dadurch lassen sich am anfang dinge ändern oder auf information warten, bevor die Komponente vollständig geladen ist.
  ngOnInit() {
    this.our_text = 'das ist ein hook text';
  }
  textGen() {
    this.our_text = 'banana live 2.0';
  }

  isDisabled = false;

  getBtnColor() {
    return 'blue';
  }

  protected readonly title = signal('product-list');
}
