import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;


  constructor(private httpService: HttpService) {
    this.token =localStorage.getItem('token');
   }
   createnote(data:any){
  let httpOption ={
    headers :new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.token,
    }),
  } ;

  return this.httpService.PostService(
    'notes/addNotes',
    data,
    true,
    httpOption
  );
   }


   getAllnote()
   {
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':this.token,

      })
    };
    return this.httpService.GetService('notes/getNotesList', true, httpOption);

   }


   trashNoteService(data:any)
   {
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':this.token,

      })
    };
    return this.httpService.PostService('notes/trashNotes',data, true, httpOption);

   }

   
   archiveNoteService(data:any)
   {
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':this.token,

      })
    };
    return this.httpService.PostService('notes/archiveNotes',data, true, httpOption);

   }


   trashNoteListService()
   {
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':this.token,

      })
    };
    return this.httpService.GetService('notes/getTrashNotesList', true, httpOption);

   }

   archiveNoteListService()
   {
    let httpOption={
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':this.token,

      })
    };
    return this.httpService.GetService('notes/getArchiveNotesList', true, httpOption);

   }

   updateNotes(data:any){
    this.token = localStorage.getItem('token');
    let httpOption={
      headers :new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':this.token,

      }),
    };
    return this.httpService.PostService(
      'notes/updateNotes',
      data,
      true,
      httpOption
    )
   }
   colorService(data: any) {
    this.token = localStorage.getItem('token');
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/changesColorNotes',
      data,
      true,
      httpOption
    );
  }

  
}
