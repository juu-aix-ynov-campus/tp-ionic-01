import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name = 'plop';
  @Input() showParagraphe = true;

  @Output() monOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  fireEvent() {
    console.log('fireEvent');
    this.monOutput.emit('bonjour papa !');
  }

  getName() {
    return `${this.name} 🙀`;
  }

}
