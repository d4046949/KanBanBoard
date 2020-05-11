import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.scss']
})
export class TComponent implements OnInit {

  shouldAnimate: boolean;

  constructor(private route: ActivatedRoute){
    
  }

  ngOnInit(): void {
  }

}
