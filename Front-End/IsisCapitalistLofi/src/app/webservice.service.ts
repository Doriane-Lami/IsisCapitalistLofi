import { Injectable } from '@angular/core';
import { createClient, fetchExchange } from "@urql/core";
import { BACKEND, GET_WORLD } from "../../Graphrequests"

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  server = 'http://localhost:4000/';
  user = '';
  api = BACKEND +'/graphql';

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

  getWorld() {
    return this.createClient().query(GET_WORLD, {}).toPromise();
  }


  //une requête par query ICI

}
