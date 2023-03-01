import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit{
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private noteService:NoteService){}
  ngOnInit(): void {
  }
  @Input() 
  isIcon: any;
  isDeleted: any;
  isArchived: any;

  id: any;

  trashNote() {
    console.log(this.isIcon.id);
    let data = {
      noteIdList: [this.isIcon.id],
      isDeleted: true,
    };
    console.log('getting noteID', data.noteIdList);
    this.noteService.trashNoteService(data).subscribe((data:any) => {
      console.log('notes moved to bin', data);
      this.messageEvent.emit(data);
    });
  }

  archiveNote() {
    console.log(this.isIcon.id);
    let data = {
      noteIdList: [this.isIcon.id],
      isArchived: true,
    };
    console.log('getting noteID', data.noteIdList);
    this.noteService.archiveNoteService(data).subscribe((data:any) => {
      console.log('notes moved to archive', data);
      this.messageEvent.emit(data);
    });
  }



}
