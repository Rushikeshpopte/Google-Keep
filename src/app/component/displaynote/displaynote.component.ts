import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent {
@Input() childArray: any;
constructor(public dialog : MatDialog){

}
 ngOInit():void{}
 updateNote(noteObject:any){
  console.log("calling the update")
  let dialogRef = this.dialog.open(UpdatenoteComponent,{
    data: noteObject,
  });

  dialogRef.afterClosed().subscribe(result=>{
    console.log('The dialog was closed',result)
  })
 }
}
