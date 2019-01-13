import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  _stylesUrls: ['app.component.css']

get stylesUrls() {
    return this._stylesUrls;
  },
  
set stylesUrls(value) {
    this._stylesUrls = value;
  },

})
export class AppComponent {
  title = 'pwa';
}
