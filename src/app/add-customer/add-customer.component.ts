import { analyzeAndValidateNgModules } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { Customer } from '../models/Customer';
import { CommonService } from '../Services/common.service';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    public id = 0;
    public resultConfirm = '';
    constructor(private common: CommonService,
                private httpService: CustomerService,
                private router: Router,
                private route: ActivatedRoute,
                private dialog: MatDialog) { }

    public addCustomerForm = new FormGroup({
        name: new FormControl(''),
        sex: new FormControl(''),
        address: new FormControl(''),
        phoneNumber: new FormControl('')
    })
    ngOnInit(): void {
        
        this.id = +this.route.snapshot.paramMap.get('id')!;
        
        if(this.id > 0){
            this.loadData(this.id);
            console.log("id > 0");
        }

    }

    private loadData(idCustomer: number){
        this.httpService.getCustomerById(idCustomer).subscribe((data)=>{
            // console.log(data);
            //console.log("data.recordset: " + data.recordset[0].FullName);
            //this.addCustomerForm.setValue(data.recordset[0]);
            this.addCustomerForm.setValue({name: data.recordset[0].FullName, sex: data.recordset[0].Sex, 
                                            address: data.recordset[0].AddressCustomer, 
                                            phoneNumber: data.recordset[0].PhoneNumber});
            

            // for(const control in this.addCustomerForm.controls){
            //     if(control){
            //         this.addCustomerForm.patchValue({[control]: data[control]});
            //     }
            //     // console.log("control name: " + this.addCustomerForm.controls[control]);
            //     // console.log("control : " + control);
            //     // console.log("control name of data: " + data[control])
            // }
        });
    }
    
    private addNewCustomer(){
        var newCustomer : {[key: string]: any} = {};
        
        for(let control in this.addCustomerForm.controls){
            if(control){
                //console.log(control + ": " + this.addCustomerForm.controls[control].value);
                newCustomer[control] =  this.addCustomerForm.controls[control].value;
                console.log("newCustomer control: "+ newCustomer.control);
            }
            
        }
        // this.httpService.addCustomer(newCustomer as Customer).subscribe((data)=>{
        //     console.log(data);
        // });
        return newCustomer as Customer;
    }
    private getInformEdit(){
        var newCustomer : {[key: string]: any} = {};
        newCustomer.FullName = this.addCustomerForm.controls.name.value
        newCustomer.Sex = this.addCustomerForm.controls.sex.value
        newCustomer.AddressCustomer = this.addCustomerForm.controls.address.value
        newCustomer.PhoneNumber = this.addCustomerForm.controls.phoneNumber.value
        
        // this.httpService.addCustomer(newCustomer as Customer).subscribe((data)=>{
        //     console.log(data);
        // });
        return newCustomer as Customer;
    }

    public addAndBackListCustomer(){
        const message = "Are you sure you want to save?";
        const dialogData = new ConfirmDialogModel("Confirm Action", message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            this.resultConfirm = dialogResult;
            //console.log("resultConfirm 1: " + this.resultConfirm);
            if(this.resultConfirm){
                if(this.id > 0){
                    this.httpService.updateCustomer(this.id,this.getInformEdit()).subscribe((data)=>{
                        console.log("data update: " + data.length)
                    },error=>{
                        //loi
                        console.log("error error error: " + error)
                    })
                }
                else{
                    this.httpService.addCustomer(this.getInformEdit()).subscribe((data)=>{
                        console.log(data);
                    });
                }
                
                this.router.navigate(['Customers']);
            }
        });
        
    }
    public addANewCustomer(){
        const message = "Are you sure you want to save?";
        const dialogData = new ConfirmDialogModel("Confirm Action", message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            this.resultConfirm = dialogResult;
            //console.log("resultConfirm 1: " + this.resultConfirm);
            if(this.resultConfirm){
                if(this.id > 0){
                    this.httpService.updateCustomer(this.id, this.getInformEdit()).subscribe((data)=>{
        
                    });
                }
                else{
                    this.httpService.addCustomer(this.getInformEdit()).subscribe((data)=>{
                        console.log(data);
                        this.common.increaseTotalCustomer();
                    });
                    this.addCustomerForm.reset();
                }
            }
            });
         
    }
}
