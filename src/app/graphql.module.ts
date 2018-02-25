import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";


// Apollo Client implementation
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const uri = 'http://localhost:9091/query';

@NgModule({
    exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
//experimental Decorator 
export class GraphQLModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            link: httpLink.create({ uri }),
            cache: new InMemoryCache()
        });
    }
}
