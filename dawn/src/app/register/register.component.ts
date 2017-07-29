import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface RegisterModel {
  
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent extends DialogComponent<RegisterModel, boolean> implements OnInit {
   states: string[] = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "DistrictOfColumbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "NorthCarolina",
                  "NorthDakota",
                  "Nebraska",
                  "NewHampshire",
                  "NewJersey",
                  "NewMexico",
                  "Nevada",
                  "NewYork",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "PuertoRico",
                  "RhodeIsland",
                  "SouthCarolina",
                  "SouthDakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "VirginIslands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "WestVirginia",
                  "Wyoming"];
                  ifMaleSelected: boolean;
                  ifFemaleSelected: boolean;
registerCredentails: { emailId: string, password: string, firstName: string, lastName: string } = { emailId: "", password: "", firstName: "", lastName: "" };
  constructor(dialogService: DialogService) { 
    super(dialogService);
  }

  ngOnInit() {
  }
  onGenderSelect(gender) {
    if (gender == 'male') {
      this.ifFemaleSelected = false;
      this.ifMaleSelected = true;
    } else if(gender == 'female'){
      this.ifMaleSelected = false;
      this.ifFemaleSelected = true;
    }
  }
  onSignInClick() {
    this.close();
    this.dialogService.addDialog(RegisterComponent);
  }
}
