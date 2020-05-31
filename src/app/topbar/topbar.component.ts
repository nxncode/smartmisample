import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"],
})
export class TopbarComponent implements OnInit {
  showSearchBar: boolean = false;
  constructor() {}

  ngOnInit() {}

  searchBarToggle() {
    this.showSearchBar = this.showSearchBar ? false : true;
  }
}
