import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface noteData {
  _id: string;
  Title: string;
  Summary: string;
  Day: string;
  Month: string;
  Year: string;
}
interface Note {
  data: noteData;
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  httpclient = inject(HttpClient);
  Notes: Note[] = [];

  constructor() {
    this.httpclient.get('http://localhost:3000/Note').subscribe({
      next: (val: any) =>
        window.localStorage.setItem('note', JSON.stringify(val)),
    });
  }
}
