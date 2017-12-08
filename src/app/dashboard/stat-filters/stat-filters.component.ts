import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {

  videoFilterFormGroup: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.videoFilterFormGroup = fb.group({
      title: [''],
      region: ['north america'],
      mustcheck: [false, Validators.requiredTrue]
    })
  }

  ngOnInit() {
  }

}
