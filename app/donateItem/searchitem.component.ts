import { Component } from '@angular/core';

@Component({
  selector: 'searchItem',
  templateUrl: `app/donateItem/searchItem.component.html`
})
export class SearchItemComponent {
    private refreshBut = false;
    private importBut = false;

    refreshClick(){
        this.cleanPage();
        this.refreshBut = true;
        //alert(test);
    }

    importClick(){
        this.cleanPage();
        this.importBut = true;
    }

    cleanPage(){
        this.refreshBut = false;
        this.importBut = false;
    }
}