import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptors } from "./error-interceptor.service";
import { HeaderInterceptors } from "./header--interceptor.service";


export const myhttpInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptors, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true },
];