import { Component, OnInit } from "@angular/core";
import { Movies } from "../movies";
import { SevicingService } from "../sevicing.service";

@Component({
  selector: "app-bollywood",
  templateUrl: "./bollywood.component.html",
  styleUrls: ["./bollywood.component.less"]
})
export class BollywoodComponent implements OnInit {
  constructor(private ser: SevicingService) {}
  public M: Movies = this.ser.getBookByGenie();

  ngOnInit(): void {}
}
