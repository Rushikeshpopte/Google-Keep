import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-allnote',
  templateUrl: './get-allnote.component.html',
  styleUrls: ['./get-allnote.component.scss']
})
export class GetAllnoteComponent implements OnInit {


 noteArray=[];

  message: any;

 constructor (private noteService : NoteService){}
 ngOnInit(): void {
 this.getALlNotes();

}
getALlNotes(){
  this.noteService.getAllnote().subscribe((response:any)=>{
    console.log(response.data.success),
    console.log(response.data.data),
    (this.noteArray= response.data.data);
    this.noteArray=this.noteArray.filter((result:any)=>{
      return result.isDeleted==false && result.isArchived==false
    })
    this.noteArray.reverse();

    console.log('this is note aarry', this.noteArray)
  })
}

// received(e : any) {
//   console.log("note created sucessfully" ,e.status.details)
//   this.getALlNotes() ;
// }

// receiveMessage($event : any) {
//   this.message = $event
// }

recieveMessageFromDisplay($event : any) {
this.getALlNotes();

}

}

