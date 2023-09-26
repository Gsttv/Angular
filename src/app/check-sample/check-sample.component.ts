import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy {

	quantidade:number = 0;

  constructor() { }

	ngOnDestroy(): void {
		console.log("Goodbye");
	}

	public adicionar(){
		this.quantidade+=1;
	}

	public decrementar(){
		this.quantidade -=1
	}

	ngOnInit(): void {
		console.log("OnInit")
  }

	ngAfterContentInit(): void {
		console.log("ContentInit")
	}

	ngAfterViewInit(): void {
		console.log("ViewInit")
	}

	ngAfterContentChecked(): void {
		console.log("ContentChek")
	}

	ngAfterViewChecked(): void {
		console.log("ViewChecked")
	}

	ngDoCheck(): void {
		console.log("DoChek")
	}




}
