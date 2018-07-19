import { Component, OnChanges } from '@angular/core';
import { MemberInfoService } from '../../../@core/data/form-memberInfo.service';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'form-member-info',
  templateUrl: './form-member-info.component.html',
  styleUrls: ['./form-member-info.component.scss']
})
export class FormMemberInfoComponent implements OnChanges {


  billId: Object;
  eshterak: string;
  radif: number;
  karbari: string;
  firstName: string;
  lastName: string;
  qotr: string;
  siphon: string;
  fatherName: string;
  zoneTitle: string;
  zoneId: number;
  domesticUnit: number;
  nonDomesticUnit: number;
  noeVagozari: number;
  counterSerial: number;
  capacity: number;
  address: string;
  mande: number;

  constructor(private service: MemberInfoService) { }



  ngOnChanges() {
    this.service.getAdvantageData().subscribe((memberInfoData: Object) => {
      // for (let i=0 ; i< [memberInfoData].length ; i++) {}
        // console.log([memberInfoData][i]);
        this.setValss(memberInfoData);
        // console.log([memberInfoData][i]);
        // console.log([memberInfoData[i]]);

    });
  }

  setValss(memberInfoData: Object) {

    // let memberVariables = this.variables(memberInfoData)

      // this.billId = Object.values(memberInfoData)[0];
      // this.eshterak = Object.values(memberInfoData)[1];

    var varrrr = this.variables(memberInfoData);


    this.billId= varrrr[0];
    this.eshterak= varrrr[1];
    this.radif= varrrr[2];
    this.karbari= varrrr[3];
    this.firstName= varrrr[4];
    this.lastName= varrrr[5];
    this.qotr= varrrr[6];
    this.siphon= varrrr[7];
    this.fatherName= varrrr[8];
    this.zoneTitle= varrrr[9];
    this.zoneId= varrrr[10];
    this.domesticUnit= varrrr[12];
    this.nonDomesticUnit= varrrr[13];
    this.noeVagozari= varrrr[14];
    this.counterSerial= varrrr[15];
    this.capacity= varrrr[16];
    this.address= varrrr[17];
    this.mande= varrrr[18];

    //  tested && useful near the top one
    // console.log(Object.values([varrrr][0]));
    // for (let i=0 ; i< [memberInfoData].length ; i++) {
    //   console.log(Object.values([varrrr])[i]);
    //   Object.values([varrrr])[0] = Object.values(memberInfoData)[i];
      // this.billId = Object.values(memberInfoData)[i];
      // this.eshterak = Object.values(memberInfoData)[1];
    // }
  }

  variables(row): Object {
    // variables(): Object {


    var memberVariables: Object;
    let member = {
      // billId: {}, eshterak: {}
      billId: Object.values(row)[0], eshterak: Object.values(row)[1],
      radif:  Object.values(row)[2], karbari: Object.values(row)[3],
      qotr: Object.values(row)[4], siphon: Object.values(row)[5],
      fatherName: Object.values(row)[6], zoneTitle: Object.values(row)[7],
      zoneId: Object.values(row)[8], domesticUnit: Object.values(row)[9],
      nonDomesticUnit: Object.values(row)[10], noeVagozari: Object.values(row)[11],
      counterSerial: Object.values(row)[12], capacity: Object.values(row)[13],
      address: Object.values(row)[14], mande: Object.values(row)[15],

    };
      // this.billId,
      // this.eshterak,
    // this.billId,
    // this.eshterak,

    // ];

    // console.log(Object.values(member) + 'me is member');
    console.log(Object.values([memberVariables]) + ' me is memVariable');
    console.log(Object.assign(member));
    // return member;
    return Object.values(member);
  }
}
