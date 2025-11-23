import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


// create a class AuthService and export (read AppWrite documentation):
export class AuthService{

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    };

    // createAccount method:
    async createAccount({email, password, name}){

        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){

                // call another method:
                return this.login({email, password});

            } else{
                return userAccount;
            }

        }
        catch(error){
            throw error;
        }
    };

    // login  method:
    async login({email, password}){

        try{
            return await this.account.createEmailSession(email, password);
        }
        catch(err){
            throw err;
        }
    };

    // getCurrentUser method to know user is logged in or not:
    async getCurrentUser(){
        try {
            // informtion will be received from account:
            return await this.account.get();
        } 
        catch(err) {
            console.log("Appwrite service :: getCurrentUser :: error", err);
        }
    };

    // logout method:
    async logout(){
        try {
          return await this.account.deleteSessions();  
        } 
        catch(err) {
            console.log("Appwrite service :: logout :: error", err)
        }
    }


};




const authService = new AuthService();


// export default authService:
export default authService;