import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators  } from '@angular/forms';


@Component({
  selector: 'app-ratingandreviewpopup',
  templateUrl: './ratingandreviewpopup.component.html',
  styleUrls: ['./ratingandreviewpopup.component.css']
})
export class RatingandreviewpopupComponent implements OnInit {
RatingandReviewForm:FormGroup;
public form: FormGroup;

// constructor(private fb: FormBuilder){
//   this.rating3 = 0;
//   this.form = this.fb.group({
//     rating: ['', Validators.required],
//   })
// }

  ngOnInit() {
  }

}
