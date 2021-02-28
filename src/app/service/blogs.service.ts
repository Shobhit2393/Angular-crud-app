import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Blog } from '../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  AllBlogsData(): Observable<any> {           //Get All Record List
    const url = 'https://603a9772f1d6aa0017a10d3f.mockapi.io/blogs';
    return this.http.get<any>(url).pipe(
      retry(1),
     catchError(this.handleError)
   );
  }
  GetBlogDataForEdit(blogId: number) {          //Get Record By Id
    const url = 'https://603a9772f1d6aa0017a10d3f.mockapi.io/blogs?id=' + blogId;
    return this.http.get(url).pipe(
      retry(1),
     catchError(this.handleError)
   );
  }
  DeleteBlog(blogId: number) {                  //Delete Record By Id
    const url = 'https://603a9772f1d6aa0017a10d3f.mockapi.io/blogs/' + blogId;
    return this.http.delete(url).pipe(
      retry(1),
     catchError(this.handleError)
   );
  }
  UpdateBlogData(BlogData: Blog, blogId: number): Observable<any> {     //Update Record By Id
    let body = JSON.stringify(BlogData);
    const url = 'https://603a9772f1d6aa0017a10d3f.mockapi.io/blogs/' + blogId;
    return this.http.put<any>(url, body, this.httpOptions).pipe(
      retry(1),
     catchError(this.handleError)
   );
  }
  saveBlogData(BlogData: Blog): Observable<any> {       //Save Record 
    let body = JSON.stringify(BlogData);
    const url = 'https://603a9772f1d6aa0017a10d3f.mockapi.io/blogs';
    return this.http.post<any>(url, body, this.httpOptions).pipe(
      retry(1),
     catchError(this.handleError)
   );
  }

  handleError(error) {        //Handling Errors with HttpClient
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
