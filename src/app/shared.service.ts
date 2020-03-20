import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private content = new BehaviorSubject<any>(null);
   sharedData = this.content.asObservable();
  constructor() { }
  updateData(text : any){
   this.content.next(text);
  }
}
