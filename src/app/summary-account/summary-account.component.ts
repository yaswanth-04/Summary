import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-summary-account',
  templateUrl: './summary-account.component.html',
  styleUrls: ['./summary-account.component.css']
})
export class SummaryAccountComponent {
  selectedFile!: File;
  accountData:any[] = []
  allAccountData:any[] = []
  allAccountDetails:any[] = []
  displayedColumns: string[] = ['sbunew', 'parentAccount', 'edp','headCount',
  'bbIndex', 'associatesTrained','ideaGeneration','ideaImplementation','bussinessImpactClient','bussinessImpactCognizant',
  'trainingActuals','ideaGenerationActuals','ideaImplementationActuals','revenueForClientActuals','revenueForCognizantActuals',
  'allocationStaringDate','costSavingForCognizantActuals','trainingTarget','ideaGenerationTarget','ideaImplementationTarget',
  'revenueForClientTarget','revenueForCognizantTarget','costSavingForClientTarget','costSavingForCognizantTarget'];
 combinedData:any[]=[]
  constructor(private service: ServiceService) { }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
  if (this.selectedFile) {
    this.service.uploadFile(this.selectedFile).subscribe((data) => {
      console.log(data)
      // this.loadAccountData();
      this.loadAllAccountData();
      // this.loadAllAccountDetailsData();
    });
  }
}
  // loadAccountData() {
  //   this.service.getAccountData().subscribe(data => {
  //     this.accountData = data;
  //     console.log(this.accountData);
      
 
  //   });
  // }
  loadAllAccountData(){
  this.service.getAllAccountData().subscribe((data) => {
    this.allAccountData =data;
    console.log(this.allAccountData);
    
  })
}
// loadAllAccountDetailsData(){
//   this.service.getAllAccountDetailsData().subscribe(data => {
//     this.allAccountDetails =data;
//   console.log(this.allAccountDetails);
  
//   })
// }

// combinedDataw(){
//  this.combinedData=this.allAccountData
 
// }
  ngOnInit() {
    // this.loadAccountData();
    this.loadAllAccountData();
    // this.loadAllAccountDetailsData();
   
  
}
exporttoExcel():void {
  const worksheet :XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.allAccountData);
  const workbook: XLSX.WorkBook ={
    Sheets: { 'Sheet1':worksheet},
    SheetNames: ['Sheet1']
  };
  XLSX.writeFile(workbook, 'ExportedData.xlsx');

}

}
