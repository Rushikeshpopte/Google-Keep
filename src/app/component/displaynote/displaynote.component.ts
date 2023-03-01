import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent {
@Input() childArray: any;
 @Output()messageDisplayToGetallnote = new EventEmitter<string>();
  msg: any;
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



 recieveMessageFromTrash($event : any){
  console.log("event from icon to display" , $event)
  this.msg = $event ;
  console.log("msg" , this.msg) ;

  this.messageDisplayToGetallnote.emit(this.msg) ;
}
}
