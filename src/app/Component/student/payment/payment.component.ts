import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Service/student/student-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {

  getData:any[];
  showPaymentModes = false;
  coursefee:number;
  courseId: any;
  showCardPayment=false;

  card_no:number
  card_expiry:number
  

  constructor(private _httpService:StudentServiceService) { }

  ngOnInit(): void {
    this._httpService.paymentList(101).subscribe(
      (res:any[]) => {
        this.getData = res;
      }
    )
  }

  showPaymentOptions(amount, id){

    this.showPaymentModes = true
    this.coursefee=amount;
    this.courseId = id;


  }

  handleCardPayment(event){
    this.showCardPayment=event.target.checked;
  }

  handleCashPayment(event){
    this.showCardPayment=!event.target.checked
  }

  
  payFees(){
    const studentId = localStorage.getItem('studentId');
    console.log('==', studentId);
    
    const details={
      billingAmount:this.coursefee,
      billingMode:'cash'

    }
    const cardDetails = {
      billingAmount:this.coursefee,
      billingMode:'card',
      card_no:this.card_no,
      card_expiry:this.card_expiry
    }
    this.showCardPayment ? this._httpService.payFeeCard(cardDetails,studentId,this.courseId).subscribe(
      res => {
        console.log('==68==',res);
        this.ngOnInit();
        this.showPaymentModes = false;
        
      },
      error => {
        console.log('==72',error);
      }
    ) :
    this._httpService.payFeeCash(details,studentId,this.courseId).subscribe(
      res => {
        console.log('==68==',res);
        this.ngOnInit();
        this.showPaymentModes = false;
        
      },
      error => {
        console.log('==72',error);
      }
    )
  }
  
}
