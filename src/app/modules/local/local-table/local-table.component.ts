import { LocalService } from './../local.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-local-table',
  templateUrl: './local-table.component.html',
  styleUrls: ['./local-table.component.css'],
})
export class LocalTableComponent implements OnInit {
  unionTree: any;
  expanded: any = {};
  constructor(
    private localService: LocalService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllUnions();
  }

  getAllUnions() {
    this.spinner.show();
    this.localService.getAllUnions().subscribe(res => {
      this.spinner.hide();
      this.generateTree(res);
    })
  }

  generateTree(unionArr: any) {
    this.unionTree = [];
    unionArr.forEach((element: any, key: any) => {
      if (element.level == 'INTERNATIONAL') {
        this.unionTree.push({
          parent: element,
          childArr: this.getChild(unionArr, key + 1)
        })
      }
    });
  }

  getChild(unionArr: any, key: number) {
    let childArr = [];
    for (let index = key; index < unionArr.length; index++) {
      const element = unionArr[index];
      if (element.level != 'INTERNATIONAL') {
        childArr.push(element);
      } else {
        break;
      }
    }
    return childArr;
  }

  navigateToAdd() {
    this.router.navigate(['local/add'])
  }

}
