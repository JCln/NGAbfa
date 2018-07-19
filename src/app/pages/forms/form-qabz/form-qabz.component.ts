import { Component, OnChanges, OnInit } from '@angular/core';
import { FormQabzService } from '../../../@core/data/form-qabz.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngx-form-qabz',
  templateUrl: './form-qabz.component.html',
  styleUrls: ['./form-qabz.component.scss'],
})

export class FormQabzComponent implements OnInit {

  abBaha: number;
  bargeNumber: number;
  billId: number;
  boodje: number;
  currentReadingData: string;
  currentReadingNumber: number;
  deadLine: string;
  duration: number;
  eshterak: number;
  isPayed: boolean;
  jam: number;
  karmozdFazelab: number;
  maliat: number;
  payId: number;
  payable: string;
  persianPayable: string;
  preDebtOrOwe: string;
  preReadingDate: string;
  preReadingNumber: string;
  radif: number;
  rate: string;
  usageLiter: number;
  usageM3: number;

  isPayedIs_true: boolean;
  enablePayed: boolean;
  closeResult: string;



  constructor(private service: FormQabzService) { }

  img = {
     pasargadBank : "https://epay.bpi.ir",
     mellatBank: "https://bill.bpm.bankmellat.ir/bpgwchannel/",
     melliBank: "https://bmi.ir/fa/pages/529/%D9%BE%D8%B1%D8%AF%D8%A7%D8%AE%D8%AA-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C-%D9%82%D8%A8%D9%88%D8%B6",
     saderatBank: "http://www.bsi.ir/Pages/ElectronicBank/mobilebanking/PayingBills.aspx"
  }

  ngOnInit() {
    this.service.getAdvantageData().subscribe((data: Object[]) => {
      this.setVals(data);

    });
  }
    setVals(qabzData: Object[]) {
      var row = this.variablesss(qabzData);

      this.abBaha = row[0];
      this.bargeNumber = row[1];
      this.billId = row[2];
      this.boodje = row[3];
      this.currentReadingData = row[4];
      this.currentReadingNumber = row[5];
      this.deadLine = row[6];
      this.duration = row[7];
      this.eshterak = row[8];
      this.isPayed = row[9];
      this.enablePayed = this.isPayed;
      // this.isPayedIs_true = this.isPayed;
      this.jam = row[10];
      this.karmozdFazelab = row[11];
      this.maliat = row[12];
      this.payId = row[13];
      this.payable = row[14];
      this.persianPayable = row[15];
      this.preDebtOrOwe = row[16];
      this.preReadingDate = row[17];
      this.preReadingNumber = row[18];
      this.radif = row[19];
      this.rate = row[20];
      this.usageLiter = row[21];
      this.usageM3= row[22];

    }


    variablesss(row: object[]): Object {

      let member = {
        abBaha: Object.values(row)[8], bargeNumber: Object.values(row)[17],
        billId:  Object.values(row)[20], boodje: Object.values(row)[11],
        currentReadingData: Object.values(row)[1], currentReadingNumber: Object.values(row)[4],
        deadLine: Object.values(row)[16], duration: Object.values(row)[2],
        eshterak: Object.values(row)[18], isPayed: Object.values(row)[22],
        jam: Object.values(row)[12],
        karmozdFazelab: Object.values(row)[9],
        maliat: Object.values(row)[10], payId: Object.values(row)[21],
        payable: Object.values(row)[14], persianPayable: Object.values(row)[15],
        preDebtOrOwe: Object.values(row)[13], preReadingDate: Object.values(row)[0],
        preReadingNumber: Object.values(row)[3], radif: Object.values(row)[19],
        rate: Object.values(row)[6], usageLiter: Object.values(row)[6],
        usageM3: Object.values(row)[5]
      };
        // console.log(this.abBaha + 'sss' + Object.values(row)[0]);
         // for (let i = 0; i < 22 ; i++) {
      //   element = Object.values(row)[i];
      // let member2 = {
      //   element:{

      //   }

      // }
          // }
          // console.log(element);
      return Object.values(member);
      // return [member];
    }
  }
