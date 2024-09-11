import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pivot-sbu',
  templateUrl: './pivot-sbu.component.html',
  styleUrls: ['./pivot-sbu.component.css']
})
export class PivotSBUComponent {
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

}

