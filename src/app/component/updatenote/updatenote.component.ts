import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {

  title: any;
  description: any;
  Id: any;
  constructor(
    private noteService:NoteService,
    public dialogRef:MatDialogRef<UpdatenoteComponent>,

    @Inject(MAT_DIALOG_DATA) public data:any
    ){

      console.log(data);
      if (data) {
        this.title = this.data.title;
        this.description = this.data.description;
        this.Id = this.data.id;
      }
    }

  onNoClick(): void {
    console.log('updated data', this.title);

    let data = {
      title: this.title,
      description: this.description,
      noteId: this.Id,
    };
    this.noteService.updateNotes(data).subscribe((data: any) => {
      console.log(data);
    });
    this.dialogRef.close();
  }
}



