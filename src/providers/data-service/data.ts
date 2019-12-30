import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorage, AngularFireUploadTask } from "angularfire2/storage";
import { map } from "rxjs/operator/map";


@Injectable()
export class DataProvider{
    url:any;
    constructor(private afData: AngularFireDatabase, private afStorage: AngularFireStorage){

    }

    getFiles(){
        
        let ref= this.afData.list('files');
        //console.log(ref.snapshotChanges(), "uqçpçgu_çr_zu_r");
        let p:any;
        return ref.snapshotChanges()
        .map(
          changes => {
              
              return changes.map(c => ({
                  key: c.payload.key, ...c.payload.val()
              }))
          }
      );
        
      }
      
      uploadToStorage(information,nameP):AngularFireUploadTask{
        let newName =`${new Date().getTime()}`;
        
       return this.afStorage.ref(`files/${nameP}/${newName}`).putString(information,"data_url");
       
      }
      
      storeInfoToDatabase(metainfo,nameP,typeI){
        let toSave = {
          created: metainfo.timeCreated,
          fullPath: metainfo.fullPath,
          contentType: metainfo.contentType
        }
      
        return this.afData.list(`files/${nameP}/${typeI}`).push(toSave);
      
      }
      
      deleteFile(file){
        let key= file.key;
        let storagePath= file.fullPath;
      
        //Removes entry from database
        this.afData.list('files').remove(key);
      
        //Remove file from storage
        return this.afStorage.ref(storagePath).delete();
      
    }
}