import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request)
            .pipe(
                map(res => {
                    return res
                }),
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    
                    if (error.error instanceof ErrorEvent) {
                        errorMsg = `Error: ${error.error.error.message}`;
                        console.log(errorMsg);
                        
                    } else {
                        errorMsg = `Error Code: ${error.status},  Message: ${error.error.error.message}`;
                        console.log(errorMsg);
                    }
                    console.log(errorMsg,'error');
                    return throwError(errorMsg);
                })
            )
    }
}