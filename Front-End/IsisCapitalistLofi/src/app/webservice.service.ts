import { Injectable } from '@angular/core';
import { createClient, fetchExchange } from "@urql/core";
import { GET_WORLD } from "../../Graphrequests"

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  server = 'http://localhost:4000/';
  user = '';
  api = 'https://isiscapitalistgraphql.kk.kurasawa.fr/graphql';

  constructor() { }

  createClient() {
    return createClient({
      url: this.api,
      exchanges : [fetchExchange],
      fetchOptions: () => {
        return {
          headers: { 'x-user': this.user },
        };
      },
    });
  }

// createClient() {
//   return createClient({
//     url: this.server + '/graphql', 
//     exchanges: defaultExchanges
//   });
// }


  getWorld() {
    return this.createClient().query(GET_WORLD, {}).toPromise();
  }

}
