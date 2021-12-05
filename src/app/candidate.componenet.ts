import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate';
import { CANDIDATE } from './mock-candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
})

export class HeroesComponent implements OnInit {

  candidate = CANDIDATE;

  constructor() { }

  ngOnInit(): void {
  }
}