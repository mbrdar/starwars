import {
  Component, OnDestroy, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, OnDestroy, DoCheck,
  OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked {
  counter: number;

  constructor() {
    console.log('Hook -> constructor');
    this.counter = 1;
  }

  inc() {
    console.log('Hook -> counter');
    this.counter += 1;
  }

  ngOnInit(): void {
    console.log('Hook -> onInit');
  }

  ngOnDestroy(): void {
    console.log('Hook -> onDestroy');
  }

  ngDoCheck(): void {
    console.log('Hook -> doCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hook -> onChanges')
  }

  ngAfterContentInit(): void {
    console.log('Hook -> afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Hook -> afterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Hook -> afterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('Hook -> afterViewChecked')
  }
}
