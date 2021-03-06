import { SearchTemplateComponent } from './../template/searchTemplate.component';
import { ServerService } from '../service/server.service';
import { Component, Injector, OnInit } from '@angular/core';
import { Donor, Area } from './donor';

import donorCat = require('./donor');
declare let swal:any;

@Component({
  selector: 'searchDonor',
  templateUrl: `app/donor/searchDonor.component.html`
})
export class SearchDonorComponent extends SearchTemplateComponent implements OnInit{
    private area = [];

    constructor( injector: Injector,
        private serverService: ServerService){
        super(injector);
        this.area = donorCat.Area;
        this.category = donorCat.Category;
        this.categorySearch = donorCat.CategorySearch;
        this.categoryKey = donorCat.CategoryKey;
        this.primaryKey = 'donor_name';
        this.parentUrl = this.serverService.getDonorUrl('');
        this.listUrl = this.serverService.getDonorUrl('list');
        this.dataList = new Array<Donor>();
    }

    ngOnInit(){
        this.GetList(this.listUrl, this.primaryKey);      
    }

    searchClick(){
        this.dataList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey); 
        let url = this.serverService.getDonorUrl(this.searchContent);
        let urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    }

   
    checkChange(item, checked){
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;
    }

    deleteClick(){
        this.Delete();            
    }

    searchChange(value){
        this.selectCat = (value === '分類') ? true : false;
        this.searchContent = '';
    }

    updateClick(donor){
        this.selectedItem = donor;
        this.updateBut = true;
    }

    notifyUpdate(isUpdate){
        // console.log('got emit');
        if(isUpdate) this.GetList(this.listUrl, this.primaryKey);
        this.updateBut = false;
    }
}
