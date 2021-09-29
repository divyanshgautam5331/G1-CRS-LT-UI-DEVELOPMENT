export class User {

    public userName: String ;
    public userPassword: String ;
    public role: String ;

    constructor(userName: String,userPassword: String,role: String)
    {
        this.userName = userName;
        this.userPassword = userPassword;
        this.role = role;
    }
}
