import { Component } from '@angular/core';
import { getdictionary } from '../../../@core/data/get-dictionary.service';

@Component({
  selector: 'ngx-link-service',
  templateUrl: './link-service.component.html',
  styleUrls: ['./link-service.component.scss', './link-service.css'],
})

export class LinkServiceComponent {
  checkboxes = [
    { name: 'واگذاری انشعاب فاضلاب', checked: false, id: 0},
    { name: 'تغییر ظرفیت قراردادی', checked: false, id: 1 },
    { name: 'تغییر مشخصات', checked: false , id: 2},
    { name: 'تغییر مکان کنتور', checked: false ,id: 3},
    { name: 'تغییر کاربری انشعاب', checked: false ,id: 4},
    { name: 'تغییر قطر انشعاب', checked: false ,id: 5},
    { name: 'نصب سیفون اضافی', checked: false ,id: 6},
    { name: 'تغییر واحد', checked: false ,id: 7},
    { name: 'تغییر قطر سیفون', checked: false ,id: 8},
    { name: 'استعلام محضر', checked: false  ,id: 9},
    { name: 'قطع و وصل انشعاب', checked: false ,id: 10},
    { name: 'جابجایی سیفون', checked: false ,id: 11},
    { name: 'نظام مهندسی', checked: false ,id: 12},
    { name: 'تغییر قطر انشعاب', checked: false ,id: 13},
    { name: 'نصب سیفون اضافی', checked: false ,id: 14},
    { name: 'تغییر واحد', checked: false ,id: 15}
  ];

  constructor(private service: getdictionary) { }

  notificationMobile:string;
  billId: string;
  registerAsDto: Object;

  putData(notificationMobile , billId) {
      var myObj = this.checkboxes.filter((obj => obj.checked == true));
      var selectedServices =myObj.map(function(el){ return el.id})

      this.registerAsDto = {billId , selectedServices , notificationMobile};
      this.service.getAdvantageData(this.registerAsDto).subscribe(res => console.log(res));

  }

  onClick(event) {
    var idAttr = event.srcElement.attributes.id;
    this.checkboxes[idAttr.value].checked = !this.checkboxes[idAttr.value].checked;
  }

  showText($event) {
    $event = !$event;
    console.log($event);
  }
}

    //   const babak= this.checkboxes.findIndex((obj => obj.checked == true));
    // const myObj = this.checkboxes.findIndex((obj => obj.checked == true))
