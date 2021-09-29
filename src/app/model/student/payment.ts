export class Payment {

    public  transactionId: number;
    public  billingAmount: number;
    public  billingMode: String;
    public  card_no: String;
    public  card_expiry: String;

    constructor(transactionId: number,billingAmount: number,billingMode: String,card_no: String,card_expiry: String)
    {
            this.transactionId = transactionId;
            this.billingAmount = billingAmount;
            this.billingMode = billingMode;
            this.card_no = card_no;
            this.card_expiry = card_expiry;
    }
}
