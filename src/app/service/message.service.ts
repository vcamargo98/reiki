import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = 'https://reiki-form.herokuapp.com/form';

  constructor(private _http: HttpClient) { }

    sendMessage(body): Observable<any> {
      return this._http.post<any>(this.url, { name: body.name, email: body.email, message: body.message })
        .pipe(
          map(user => {}));
    }

 
}
