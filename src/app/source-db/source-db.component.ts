import { Component, OnInit } from '@angular/core';
import { SourceDB } from '../Interfaces/sourceDatabase';
import { DestinationDB } from '../Interfaces/destinationDatabase';
import {CasesCountService} from  '../services/cases-count.service';

@Component({
  selector: 'app-source-db',
  templateUrl: './source-db.component.html',
  styleUrls: ['./source-db.component.scss']
})
export class SourceDBComponent implements OnInit {
  casesCount: any;
  destinationCasesCount: any;
sourceStartDate: Date;
sourceEndDate: Date;
destinationStartDate: Date;
destinationEndDate: Date;

sourceDB: SourceDB[] = [
  {name: "Salesforce"},
  {name: "Oracle"},
  {name: "HBase"},
  {name: "Elastic Search"}
]

destinationDB: DestinationDB[] =[
  {name: "Salesforce"},
  {name: "Oracle"},
  {name: "HBase"},
  {name: "Elastic Search"}
]
  
  constructor(private ccservice:CasesCountService) { }

  ngOnInit() {
    //this.getCount();
    //this.getDestinationCount();
  //}
  
  //getCount(): void{

   // this.ccservice.getCasesCount().subscribe(totalCases=>this.casesCount=totalCases);
  //}
  //getDestinationCount(): void{
  //  this.ccservice.getDestinationCount().subscribe(totalCases=>this.destinationCasesCount=totalCases);
  }
  getSourceCount(): void{
    this.ccservice.getSourceDate(this.sourceStartDate,this.sourceEndDate).subscribe(totalCases=>this.casesCount=totalCases);
  }
  getDestinationCount(): void{
    this.ccservice.getDestinationDate(this.destinationStartDate,this.destinationEndDate).subscribe(totalCases=>this.destinationCasesCount=totalCases);
  }
}
