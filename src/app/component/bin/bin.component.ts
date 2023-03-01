import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit{
  @Input() notesArray:any=[];
  isDeleted:boolean=true;
  constructor(private noteService:NoteService){}
  ngOnInit(): void {
    this.trashNotelist()
  
  }
trashNotelist(){
  console.log("trash note")
  this.noteService.trashNoteListService().subscribe((result:any)=>{
    console.log(result) ;
    this.notesArray =result.data.data ;
    this.notesArray =this.notesArray.filter((filterdata :any) =>{
      return filterdata.isDeleted=== true ;
    })
    console.log("getting trash note" ,this.notesArray)
  })
}

}
