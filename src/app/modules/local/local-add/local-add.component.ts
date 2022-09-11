import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-local-add',
  templateUrl: './local-add.component.html',
  styleUrls: ['./local-add.component.css']
})
export class LocalAddComponent implements OnInit {
  parentList: any;
  isSubmitted = false;

  countryList: any = [{
    name: 'USA',
    value: 'USA'
  }]
  stateList: any = [{
    name: 'Texas',
    value: 'Texas'
  }]
  cityList: any = [{
    name: 'Houston',
    value: 'Houston'
  },{
    name: 'Dallas',
    value: 'Dallas'
  },{
    name: 'Austin',
    value: 'Austin'
  },{
    name: 'San Antonio',
    value: 'San Antonio'
  }]

  localForm = new FormGroup({
    levelValue: new FormControl('', Validators.required),
    parentId: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    addressLine1: new FormControl('', Validators.required),
    addressLine2: new FormControl(''),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    enabled: new FormControl('', Validators.required),
  });


  constructor(
    private localService: LocalService,
    private router: Router) { }

  ngOnInit(): void {
    this.getParentData();
  }

  getParentData() {
    this.localService.getAllUnions().subscribe(res => {
      this.parentList = [];
      res.forEach((element: any, key: any) => {
        if (element.level == 'INTERNATIONAL') {
          this.parentList.push(element)
        }
      });
    })
  }

  addLocal(){
    this.isSubmitted  = false;
    if(this.localForm.invalid){
      this.isSubmitted  = true;
    } else{
      this.localService.addUnion(this.localForm.value).subscribe(res => {
        alert('Local added');
        this.router.navigate(['local/list'])
      },(err) => {
        alert('Something went wrong');
        this.localForm.reset();
      })
    }
  }
}
