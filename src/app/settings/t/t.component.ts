import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MockTaskService } from 'src/app/board/mock-task.service';
import { ITask } from 'src/app/board/models/task';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.scss']
})
export class TComponent implements OnInit {

  shouldAnimate: boolean;
  details: ITask = null;
  canSave: boolean = false;
  
  form : FormGroup;

  constructor(private route: ActivatedRoute, private mockData: MockTaskService, private formBuilder: FormBuilder,) {

  }
  
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.details = this.mockData.getDetails(params.id);
      this.form.setValue({'title': this.details.title, 'description': this.details.description});
    });

    this.form.valueChanges.subscribe(x => {
      this.canSave = (this.details.description !== this.form.value.description 
        || this.details.title !== this.form.value.title) && this.form.valid;
    });
  }

  onSubmit() {
    console.log('submitted', this.form.value,   this.form.valid);
  
  }

  cancel() {
    
   }
}
