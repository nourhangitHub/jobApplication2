import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {
  langs = ["Arabic","English"];
  levels = ["good","bad"];
  myForm;
  constructor( 
     private fb : FormBuilder,
     private router: Router,
     private servic :SharedService
     ) {
        this.myForm =this.fb.group({
        fullName : new FormControl('',[Validators.required]),
        email    : new FormControl('',[Validators.required ,Validators.email]),
        lang     : new FormGroup({
          langName : new FormControl(),
          langLevel :  new FormControl(),
        }),  
   })
  }
  
  ngOnInit() {}
  onsubmit(){
    this.servic.updateData(this.myForm.value);
    this.router.navigate(['/jobs']);
  
    // var langName = this.myForm.controls['lang'].controls['langName'].value;
    // var langLevel = this.myForm.controls['lang'].controls['langLevel'].value;
    // console.log(langLevel,langName)
      //   var fullName = this.myForm.controls['fullName'];
      //   var email  = this.myForm.controls['email'];
      // console.log(fullName,email,this.servic.updateData(this.myForm.value));
  }
}
