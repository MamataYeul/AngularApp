import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap/rating/rating';
@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.css']
})
export class ReviewRatingComponent implements OnInit {

  reviewForm!:FormGroup;

  cityNames=[{cityName:'Pandharpur'},{cityName:"Indapur"}]
  selectedCity!:string;

  radioArray=[
    {id:'1',value:'Current Student'},
  {id:'2',value:'Alumni'},
  {id:'3',value:'Campus Recruiter'}
]
placementRate:number=1;
infrastructureRate:number=4;
facultyRate:number=2;
campusRate:number=3;
valueForMoneyRate:number=5;

rateString1='Bad';
rateString2='Good';


//for select review parameter
Data: Array<any> = [
  { name: 'Pros', value: 'pros' },
  { name: 'Cons', value: 'cons' },
  { name: 'Placement Quality', value: 'placement quality' },
  { name: 'Infrastructure', value: 'infrastructure' },
  { name: 'Faculty Quality', value: 'faculty quality' },
  { name: 'Campus Life', value: 'campus life' },
  { name: 'Value for Money', value: 'value for money' },
  { name: 'Student Quality', value: 'student quality' }
];
  constructor(private _fb:FormBuilder) { }

  ngOnInit(){
    this.reviewForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      field: ['College'],
      universityNames: ['Amity University'],
      city:['Delhi'],
      status:['Current Student'],

      skills: this._fb.array([])
    })
  }


}