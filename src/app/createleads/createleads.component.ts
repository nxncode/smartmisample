import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-createleads",
  templateUrl: "./createleads.component.html",
  styleUrls: ["./createleads.component.css"],
})
export class CreateleadsComponent implements OnInit {
  breadCrumb: string = "> Customer > Create new lead";
  constructor() {}

  ngOnInit() {}
}
