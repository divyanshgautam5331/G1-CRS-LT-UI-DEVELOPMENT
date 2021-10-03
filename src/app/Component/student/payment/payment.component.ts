import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Service/student/student-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {

  getData:any[];

  constructor(private _httpService:StudentServiceService) { }

  ngOnInit(): void {
    this._httpService.paymentList(101).subscribe(
      (res:any[]) => {
        this.getData = res;
      }
    )
  }

  // viewPaymentList(){
  //   this._httpService.paymentList(101).subscribe(
  //     (res:any[]) => {
  //       this.getData = res;
  //     }
  //   )
    
  // }
  
}
