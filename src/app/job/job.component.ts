import { Component, OnInit} from '@angular/core';
import { Validators, FormControl,FormBuilder, FormGroup,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  receivedData: any;
  Data: Array<any> = [
    { name: 'Lawyer', value: 'Lawyer',applicantNamber: 0 },
    { name: 'Cashier', value: 'Cashier' , applicantNamber: 7 },
    { name: 'Plumber', value: 'Plumber', applicantNamber: 5  },
    { name: 'Speaker', value: 'Speaker',applicantNamber: 10  },
  ];
  myForm;
  constructor( 
     private fb : FormBuilder,
     private router: Router,
     private servic :SharedService
     ) {
        this.myForm =this.fb.group({
        checkArray: this.fb.array([],[Validators.required])
   })
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.myForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  
    ngOnInit() {
      this.servic.sharedData.subscribe((data) => {
       // console.log('data', data);
        this.receivedData = data;
      });
    }

    onsubmit(){
    var submitJobs= this.myForm.value
      // console.log(submitJobs) 
      this.router.navigate(['/applicant']);
    }

}
