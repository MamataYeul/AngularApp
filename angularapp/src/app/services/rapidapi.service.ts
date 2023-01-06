import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RapidapiService {
  url = 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US';
  constructor(private httpClient: HttpClient) {}
  getDataBBFinance() {
    let headers=new HttpHeaders({
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'c810988695mshb62c0eb63adcbdbp1c3632jsn0b18ecc3d15d'
    })
    return this.httpClient.get(this.url,{headers:headers});
  }
}
