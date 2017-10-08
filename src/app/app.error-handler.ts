import {HttpErrorResponse} from '@angular/common/http'
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
    
    static handleError(error: HttpErrorResponse | any){
        let errorMensage: string

        if(error instanceof HttpErrorResponse) {
            const body = error.error
            errorMensage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        }else{
            errorMensage = error.message ? error.message : error.toString()
        }

        console.log(errorMensage)
        return Observable.throw(errorMensage)
    }
}