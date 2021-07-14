import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "assemblyline",
  templateUrl: "./assemblyline.component.html",
  styleUrls: ["./assemblyline.component.scss"]
})
export class AssemblyLineComponent implements OnInit {
  @Input() stages: string[];
  public stageItems: any[];

  ngOnInit() {
    this.generateStagesData();
  }

  generateStagesData() {
    this.stageItems = [...Array(4)].map(i => []);
  }

  onInputKeyEnter(event) {
    this.stageItems[0].push(event.target.value);
    event.target.value = '';
  }

  onRightClick(event, stageI, itemI) {
    if (stageI !== 0) {
      this.stageItems[stageI - 1].push(event.target.innerText);
    }
    this.stageItems[stageI].splice(itemI,1);
    event.preventDefault()
  }

  onClick(value, stageI, itemI) {
    if (this.stageItems.length > stageI + 1) {
      this.stageItems[stageI + 1].push(value);
    }
    this.stageItems[stageI].splice(itemI,1);
  }
}
