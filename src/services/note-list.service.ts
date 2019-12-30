import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Note } from '../models/note/note.model';
import { Note2 } from '../models/note2/note2.model';
import { NoteImmeuble } from '../models/noteImmeuble/noteImmeuble.model';
import { NoteGerant } from '../models/note2/noteGerant.model';
import { NoteLogis } from '../models/note2/noteLogis.model';

@Injectable()
export class NoteListService {

    noteListRef: any;

    constructor(private db: AngularFireDatabase) { }

    getNoteList() {
        return this.noteListRef;
    }

    addNote(note: Note) {
        return this.noteListRef.push(note);
    }

    updateNote(note: Note, event: string) {

        if(event == "onModifierVilla")
        {
            this.noteListRef = this.db.list<Note>('/services/villa/');
            return this.noteListRef.update(note.uid, note);
        }

        if(event == "onModifierAppartsNM")
        {
            this.noteListRef = this.db.list<Note>('/services/appt_non_meuble/');
            return this.noteListRef.update(note.uid, note);
        }

        if(event == "onModifierAppartsM")
        {
            this.noteListRef = this.db.list<Note>('/services/appt_meuble/');
            return this.noteListRef.update(note.uid, note);
        }

        if(event == "onModifierImmeuble")
        {
            this.noteListRef = this.db.list<Note>('/services/immeuble/');
            return this.noteListRef.update(note.uid, note);
        }

        if(event == "onModifierBureau")
        {
            this.noteListRef = this.db.list<Note>('/services/bureau/');
            return this.noteListRef.update(note.uid, note);
        }

        if(event == "onModifierMagasin")
        {
            this.noteListRef = this.db.list<Note>('/services/magasin/');
            return this.noteListRef.update(note.uid, note);
        }

        if(event == "onModifierBail")
        {
            this.noteListRef = this.db.list<Note>('/services/bail/');
            return this.noteListRef.update(note.uid, note);
        }

        
    }



    updateNoteImmeuble(note: NoteImmeuble) {

        
            this.noteListRef = this.db.list<NoteImmeuble>('/Immeuble/');
            return this.noteListRef.update(note.uid, note);

        
    }   
    
    updateNoteLogis(note: NoteLogis) {

        
        this.noteListRef = this.db.list<NoteLogis>('/Logis/');
        return this.noteListRef.update(note.uid, note);

    
}   

    updateNoteGerant(note: NoteGerant) {

        
        this.noteListRef = this.db.list<NoteGerant>('/Gerant/');
        return this.noteListRef.update(note.uid, note);

    
}    


    updateNote2(note: Note2) {

       
            this.noteListRef = this.db.list<Note2>('/users/');
            return this.noteListRef.update(note.uid, note);
    }

    removeNote(note: Note) {
        return this.noteListRef.remove(note.uid);
    }
}