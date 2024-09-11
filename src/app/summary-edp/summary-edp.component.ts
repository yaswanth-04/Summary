import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-summary-edp',
  templateUrl: './summary-edp.component.html',
  styleUrls: ['./summary-edp.component.css']
})
export class SummaryEDPComponent {
  
    allAccountSumData: any[] = [];
    public aggregatedData: any[] = [];
    selectedFile!: File;

    displayedColumns: string[] = [ 'goupedEDP','totalHeadCount','bbIndex', 'associatesTrainedTotal','ideaGenerationTotal','ideaImplementationTotal','bussinessImpactClientTotal','bussinessImpactCognizantTotal'];
   
    constructor(private service:ServiceService) {}
   
    
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
    onUpload() {
    if (this.selectedFile) {
      this.service.uploadFile(this.selectedFile).subscribe((data) => {
        console.log(data)
        // this.loadAccountData();
        this.loadAllAccountSumData();
        // this.loadAllAccountDetailsData();
      });
    }
  }
   
    loadAllAccountSumData(){
      this.service.getAllAccountDetailsData().subscribe((data) => {
        this.allAccountSumData =data;
        console.log(this.allAccountSumData);
        
      })
    }
    ngOnInit(): void {
      this.loadAllAccountSumData();
    }
    exporttoExcel():void {
      const worksheet :XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.allAccountSumData);
      const workbook: XLSX.WorkBook ={
        Sheets: { 'Sheet1':worksheet},
        SheetNames: ['Sheet1']
      };
      XLSX.writeFile(workbook, 'ExportedData.xlsx');
    
  

}
}
