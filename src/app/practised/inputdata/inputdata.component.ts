import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.scss']
})
export class InputdataComponent {
commonName: any;
  //   username: any;
  // usernameElement: any;
  //   clickme() {
  //     this.username = this.usernameElement.nativeElement.value;
  //     console.log(this.username);
  //   }
  // }
//   @ViewChild('username', { static: true }) usernameElement: ElementRef;
//   myusername: string = "";
//   constructor(usernameElement: ElementRef) {
//     this.usernameElement = usernameElement;

//   }

//   clickme() {
//     this.myusername = this.usernameElement.nativeElement.value;
//     console.log('it does nothing', this.myusername);
//   }
// }



  assignName (commonName: string) {
    console.log("value received: " + commonName);
  }

}
