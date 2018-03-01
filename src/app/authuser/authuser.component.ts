import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Observable } from 'rxjs/Observable';
import gql from "graphql-tag";
import Auth from '../types';

// Other dependencies
import 'rxjs/add/operator/map';

const authuser = gql`
    mutation authuser($input: createAuth!){
        authuser(input: $input){
        message
        phonenumber
        modem_number
            }
    }
`;

@Component({
    selector: 'authuser',
    templateUrl: './authuser.component.html',
    styleUrls: ['./authuser.component.css']
})

export class AuthuserComponent implements OnInit{
    auths : [Auth];
    iduser: string = '' ;
    username: string = '';
    password: string = '';
    phonenumber: string = '';
    idmerchan: string = '';
    
    // mutation declaration

    constructor(private apollo: Apollo) {

    }

    ngOnInit(){

    }


    Submit(): void{
        const newAuth = new Auth;
        newAuth.iduser = this.iduser;
        newAuth.username = this.username;
        newAuth.password = this.password;
        newAuth.phonenumber = this.phonenumber;
        newAuth.idmerchan = this.idmerchan;
        this.apollo.mutate({
            mutation: authuser,
            variables: {
            //   iduser: this.iduser,
            //   username: this.username,
            //   password: this.password,
            //   phonenumber: this.phonenumber,
            //   idmerchan: this.idmerchan
            input: newAuth
            }
          }).subscribe((result ) => {
              console.log('got data', result)
              this.auths = result.Createauthuser;
            // const id = result.data.signingUser.user.iduser;
            // const token = result.data.signingUser.token;
            // this.saveAuthData(id, token);
    
            // this.router.navigate(['/auth'])
          }, (error) => {
            alert(error)
          })
        }
//     Submit(): void{
//         this.apollo.mutate({
        //   mutation: gql `
        //   mutation authUser($iduser: String!, $username: String!, $password: String!, $phonenumber: String!, $idmerchan: String!){
        //     authuser(iduser: $iduser, username: $username, password: $password, phonenumber: $phonenumber, idmerchan: $idmerchan){
        //       id
        //       token
        //     }
        //   }
        // ` }
//         ).subscribe();
    
// }


// class AuthUserStruct {
//     constructor(
//         public iduser: string = "1",
//         public username: string = "s1gu",
//         public password: string = "12345",
//         public phonenumber: string ="6282325600996",
//         public idmerchan: string ="1",
//     ){}
// }





// export class AuthUser {
//     // AuthUserStruct: Observable<any>;
//     data: AuthUserStruct;
//     // newcomponent = "Entered in new component of AuthUser";
//     constructor(private apollo: Apollo) {}
//         authuser({iduser, username, password, phonenumber, idmerchan} ) {
//             this.apollo.mutate({
//                 mutation: authuser,
//                 variables: { iduser, username, password, phonenumber, idmerchan },

//             }).subscribe(({ result }) => {
//                 console.log('got data', result);
//             }, (error) => {
//                 console.log('Haha', error);
//             });
//         }
    // authuser({iduser, username, password, phonenumber, idmerchan}) {
    //     this.apollo.mutate({
    //         mutation: authuser,
    //         variables: { iduser, username, password, phonenumber, idmerchan },
            
    //     }).subscribe(({ result }) => {
    //         console.log('got data', result);
    //     }, (error) => {
    //         console.log('Error broh', error);
    //     });
    // }


    // onSubmit() {
    //     const GraphAuthUser = gql`
    //     mutation {
    //     authuser(iduser: "2", username: "jihar", password: "12345", phonenumber: "6282325600996", idmerchan: "1"){
    //             Message
    //             token
    //         }
    //     }
    //     `;
    //     this.apollo
    //         .mutate({
    //             mutation: GraphAuthUser
    //         })
    //         .subscribe(
    //             ({ result }) => {
    //                 this.AuthUserFunc();
    //             }
    //         );
    // }
}