import { Donation } from './donation';
import { NgForm } from '@angular/forms';
import { Component, Injector } from '@angular/core';
import { ServerService } from '../service/server.service';
import { AddTemplateComponent } from '../template/addTemplate.component';

import itemCat = require('./donation');
declare let swal:any;

@Component({
    selector: 'addDonation',
    templateUrl: `app/donation/addDonation.component.html`,
    styleUrls: ['app/template/addTemplate.component.css']
})
export class AddDonationComponent extends AddTemplateComponent{
    pack: any;
    item = new Donation();
    category = itemCat.Category;
    area = itemCat.Warehouse;

    constructor(injector: Injector,
                private serverService: ServerService){
      super(injector);
    }

    addItemClick(){
      let itemObject = this.item.getObject();
      let url = this.serverService.getDonationUrl(this.item._id);
      this.Add(url, itemObject);
    }

    cleanClick(){
        this.item = new Donation();
    }

    enterBarcode(e){
        $('#barcodeInput').removeClass('success fail');
        console.log(e.key);
        let comp = this;
        if(e.key == 'Enter'){
            let url = this.serverService.getBarcodeUrl(e.target.value);
            this.GetSpecificObject(url).then((res: Donation) => {
                this.item.item_name = res.item_name;
                this.item.item_unit = res.item_unit;
                this.item.item_unitprice = res.item_unitprice;
                $('#barcodeInput').addClass('success');
                setTimeout(function() {}, 2500);

            }).catch(function(e){
                // add warning to input
                console.log('oh fuck i cant find anything');
                $('#barcodeInput').addClass('fail');
        }
        
    }
}
