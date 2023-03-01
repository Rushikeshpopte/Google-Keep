import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  @Input() notesArray:any=[];
  constructor(private noteService:NoteService){}
  ngOnInit(): void {
    this.archiveNotelist()
  
  }
archiveNotelist(){
  console.log("archive note")
  this.noteService.archiveNoteListService().subscribe((result:any)=>{
    console.log(result) ;
    this.notesArray =result.data.data ;
    this.notesArray =this.notesArray.filter((filterdata :any) =>{
      return  filterdata.isArchived===true ;
    })
    console.log("getting archive note" ,this.notesArray)
  })
}

}
