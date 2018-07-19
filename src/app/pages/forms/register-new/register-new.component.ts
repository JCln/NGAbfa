import { Component, OnInit } from '@angular/core';
import { registerNewDto } from '../../../@core/data/registerNewDto.service';

@Component({
  selector: 'register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.scss', './register-new.css']
})
export class RegisterNewComponent implements OnInit {


  checked = false;
  isValid:boolean = false;

  selectedServices: string;
  neighbourBillId: string;
  Mobile: string;
  phoneNumber: string;
  firstName: string;
  sureName: string;
  fatherName: string;
  Address: string;
  nationalId: string;
  postalCode: string;

  registerNewDto: Object;

  checkboxes = [
    { name: 'انشعاب 1', checked: false, id: 0 },
    { name: 'انشعاب 1.2', checked: false, id: 1 }
  ];
  constructor(private service: registerNewDto) { }

  onClick(event) {
    var idAttr = event.srcElement.attributes.id;
    this.checkboxes[idAttr.value].checked = !this.checkboxes[idAttr.value].checked;
  }


  putData(neighbourBillId,
    Mobile,
    phoneNumber,
    firstName,
    sureName,
    fatherName,
    Address,
    nationalId,
    postalCode) {
    var myObj = this.checkboxes.filter((obj => obj.checked == true));
    var selectedServices = myObj.map(function (el) { return el.id })

    this.registerNewDto = {
      selectedServices, neighbourBillId,
      Mobile,
      phoneNumber,
      firstName,
      sureName,
      fatherName,
      Address,
      nationalId,
      postalCode
    };
    console.log(this.registerNewDto, selectedServices);



    // this.registerNewDto = this.neighbourBillId+','+ this.Mobile+','+ this.phoneNumber+','+
    //  this.firstName+','+ this.sureName+','+ this.fatherName+','+ this.Address+','+ this.natoinalId+','+ this.postalCode;

    // console.log(this.registerNewDto , selectedServices);
    // this.service.getAdvantageData(this.registerNewDto).subscribe(res => console.log(res));
  }
  ngOnInit() {
  }
  // nationalIdd(nationalId) {
  //   const min: number = 10;
  //   const max: number = 10;
  //   if (nationalId <= min || nationalId >= max) {
  //     return true;
  //   }
  //   return false;
  // }

}




// inputs = [
  //   { neighbourBillId: this.neighbourBillId },
  //   { Mobile: this.Mobile },
  //   { phoneNumber: this.phoneNumber },
  //   { firstName: this.firstName },
  //   { sureName: this.sureName },
  //   { fatherName: this.fatherName },
  //   { Address: this.Address },
  //   { natoinalId: this.natoinalId },
  //   { postalCode: this.postalCode }
  // ];






















// import { Component, OnInit, Input } from '@angular/core';
// import { registerNewDto } from '../../../@core/data/registerNewDto.service';
// import { InputDetail } from './Input';
// import { INPUTS } from './inputs';

// @Component({
//   selector: 'register-new',
//   templateUrl: './register-new.component.html',
//   styleUrls: ['./register-new.component.scss']
// })
// export class RegisterNewComponent implements OnInit {
//   // @Input() input: InputDetail;
//   inputss = INPUTS;

//   selectedServices: string;
//   neighbourBillId: string;
//   Mobile: string;
//   phoneNumber: string;
//   firstName: string;
//   sureName: string;
//   fatherName: string;
//   Address: string;
//   nationalId: string;
//   postalCode: string;

//   registerNewDto: Object;

//   checkboxes = [
//     { name: 'انشعاب 1', checked: false, id: 0 },
//     { name: 'انشعاب 1.2', checked: false, id: 1 }
//   ];
//   constructor(private service: registerNewDto) { }

//   onClick(event) {
//     var idAttr = event.srcElement.attributes.id;
//     this.checkboxes[idAttr.value].checked = !this.checkboxes[idAttr.value].checked;
//   }

//   putData(neighbourBillId,
//     Mobile,
//     phoneNumber,
//     firstName,
//     sureName,
//     fatherName,
//     Address,
//     nationalId,
//     postalCode) {
//     var myObj = this.checkboxes.filter((obj => obj.checked == true));
//     var selectedServices = myObj.map(function (el) { return el.id })

//     this.registerNewDto = {
//       selectedServices, neighbourBillId,
//       Mobile,
//       phoneNumber,
//       firstName,
//       sureName,
//       fatherName,
//       Address,
//       nationalId,
//       postalCode
//     };
//     console.log(this.registerNewDto, selectedServices);
//     // this.registerNewDto = this.neighbourBillId+','+ this.Mobile+','+ this.phoneNumber+','+
//     //  this.firstName+','+ this.sureName+','+ this.fatherName+','+ this.Address+','+ this.natoinalId+','+ this.postalCode;

//     // console.log(this.registerNewDto , selectedServices);
//     // this.service.getAdvantageData(this.registerNewDto).subscribe(res => console.log(res));

//   }
//   ngOnInit() {
//   }

// }
