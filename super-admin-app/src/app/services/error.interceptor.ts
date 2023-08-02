import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

    constructor(private toastr: ToastrService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request)
            .pipe(
                map(res => {
                    return res
                }),
                catchError((error: HttpErrorResponse) => {
                    //at this moment, toastr throws an error that automatically arrives from the server, 
                    //the format and text of the error would not look like this, 
                    //but would be defined in agreement with BE engineers
                    this.toastr.error(error.message)
                    return throwError(error);
                })
            )
    }
}