import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from 'src/app/board/models/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  shouldAnimate: boolean;
  details: ITask = null;
  canSave: boolean = false;

  statusOptions = [
    { name: 'Withdrawn', value: 0 },
    { name: 'Pending', value: 1 },
    { name: 'In Progress', value: 2 },
    { name: 'Blocked', value: 3 },
    { name: 'Completed', value: 4 }
  ];

  cardTypeOptions = [
    { name: 'Bug', value: 1 },
    { name: 'Task', value: 2 },
    { name: "Story", value: 3 }
  ];

  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private taskService: TaskService) {  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      bugType: [],
      status: []
    });

    this.route.data.subscribe((data) => {
      if(data){
      this.details = data.cres

      this.form.setValue({
        'title': this.details.title,
        'description': this.details.description,
        'bugType': this.details.type,
        'status': !this.details.status
      });
      }
   });

    this.form.valueChanges.subscribe(x => {
      this.canSave = (this.details.description !== this.form.value.description
        || this.details.title !== this.form.value.title
        || this.details.type !== +this.form.value.bugType
        || this.details.status !== +this.form.value.status)
        && this.form.valid;
    });
  }

  onSubmit() {
    console.log('submitted', this.form.value, this.form.valid);
  }

  cancel(e) {
    e.preventDefault();
    this.router.navigate([{ outlets: { 'side-panel': null } }]);
    this.taskService.setActiveTask(null);
  }
}
