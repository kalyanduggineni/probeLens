import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of } from "rxjs";
import {SourceDB} from "../Interfaces/sourceDatabase";
import {DestinationDB} from "../Interfaces/destinationDatabase";

@Injectable({
  providedIn: 'root'
})
export class CasesCountService {

  private sourceAPIURL = "https://mocksvc.mulesoft.com/mocks/322688cd-ed9a-4a7b-a5dd-33c1be1dc8c6/getCases";
  private destinationURL = "https://mocksvc.mulesoft.com/mocks/322688cd-ed9a-4a7b-a5dd-33c1be1dc8c6/getDestinationCases";
  constructor( private http: HttpClient) {
   }
   getCasesCount () {
     return this.http.get(this.sourceAPIURL);
    }  
    getDestinationCount () {
      return this.http.get(this.destinationURL);
    }
    getSourceDate(ssdate:Date,sedate:Date) {
      const Surl=`${this.sourceAPIURL}?lastmodifiedStartDate=${ssdate}&lastmodifiedEndDate=${sedate}`;
      //alert(Surl);
      return this.http.get(Surl);
    }
    getDestinationDate(dsdate:Date,dedate:Date) {
      const Durl=`${this.destinationURL}?lastmodifiedStartDate=${dsdate}&lastmodifiedEndDate=${dedate}`;
      //alert(Durl);
      return this.http.get(Durl);
    }
}
