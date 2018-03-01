// import { Apollo } from 'apollo-angular';
// import gql from 'graphql-tag';
import { Component} from '@angular/core';

// const HERO_QUERY = gql`
//   query GetCharacter($episode: Episode!) {
//     hero(episode: $episode) {
//       name
//       id
//       friends {
//         name
//         id
//         appearsIn
//       }
//     }
//   }
// `;

// type Hero = {
//   name: string;
//   id: string;
//   appearsIn: string[];
//   friends: Hero[];
// };

// type Response = {
//   hero: Hero;
// };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
//   response
//   constructor(apollo: Apollo) {
//     apollo.watchQuery<Response>({
//       query: HERO_QUERY,
//       variables: { episode: 'JEDI' }
//     })
//       .valueChanges
//       .subscribe(result => {
//         console.log(result.data.hero); // no TypeScript errors
//       });
//   }
// }
