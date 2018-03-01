import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import QuestionResponse from './models/QuestionResponse';


const GetAllQuestion = gql`
  query GetAllQuestion {
   questions {
      message
    }
  }
`;

const authUserType = gql`
  mutation authuser($input: string ) {  
    authuser(input: $input) {
      message
      phone_number
      modem_number
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading : boolean;
  data: any;
  questions: [QuestionResponse];
    public message: string;

    constructor(private apollo: Apollo) {}

    ngOnInit() {
      this.data = this.apollo.watchQuery<any>({
        query: GetAllQuestion
      }).valueChanges;
      this.data.subscribe(({data})=> {
        this.loading = data.loading;
        this.questions = this.data.questions;
        console.log(data.questions);
        
      });
    }

    onAuthUser(): void{
    //   const newAuthUser = new AuthUserType();
    //   newAuthUser.phone_number = this.PhoneNumber;

    //   this.apollo.mutate({mutation: authUserType, variables: {input: this.PhoneNumber}}).subscribe(({data})=>{
    //     console.log('get data', data);
    //     this.authUsers = data.authUser;
    //   }, (error) => {
    //       console.log('there was an error sending the query', error);
    //   });
    //   this.PhoneNumber = null
    }

}
