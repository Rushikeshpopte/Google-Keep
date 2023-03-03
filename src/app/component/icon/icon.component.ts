import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit{
  @Output() messageEvent = new EventEmitter<string>();
  noteObject: any;
  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7fffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkBlue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];

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
  colorPalete(color: any) {
    console.log('i am color');
    let req = {
      color: color,
      noteIdList: [this.isIcon.id],
    };
    this.noteService.colorService(req).subscribe((data: any) => {
      console.log('calling color api ', data);
      this.messageEvent.emit(data);
     
      });
    
  }

 

}
