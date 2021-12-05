import { Component, VERSION } from '@angular/core';
import { CANDIDATE } from './mock-candidate';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

@Component({
  selector: 'mock-candidate',
  templateUrl: './app.component.html',
})

export class CandidatesComponent implements OnInit {
  candidate = CANDIDATE;
}
