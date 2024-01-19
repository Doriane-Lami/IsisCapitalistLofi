import { Injectable } from '@angular/core';
import { createClient } from "@urql/core";
import { GET_WORLD } from "../../Graphrequests"

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  server = 'http://localhost:4000/';
  user = '';

  constructor() { }

  createClient() {
    return createClient({
      url: this.server + '/graphql',
      fetchOptions: () => {
        return {
          headers: { 'x-user': this.user },
        };
      },
      exchanges: []
    });
  }

  getWorld() {
    return this.createClient().query(GET_WORLD, {}).toPromise();
  }

}
