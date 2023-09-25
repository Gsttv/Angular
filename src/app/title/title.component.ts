import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() name:string = ""

  constructor() { }

	ngOnChanges(): void {
		console.log("Onchange");
	}

  ngOnInit(): void {
		this.name = `Ola ${this.name}`
  }

}
