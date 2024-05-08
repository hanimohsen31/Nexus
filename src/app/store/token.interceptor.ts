import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export const TokenInterceptor: HttpInterceptorFn = (
  request,
  next
): Observable<HttpEvent<unknown>> => {
  let token =
    'tokennfgjdkfngn_sdjfsdjfskdfjsldfswioerwper_jksbdnfbandfvghjvcnbzvhagfsdaytwfguq_xvmnsbjseruwieruhskjdf';
  const newRequest = request.clone({
    setHeaders: {
      // Authorization: `Bearer ${token}`,
      Madara: `Bearer ${token}`,
    },
  });

  let exceptions = ['auth/signup/standalone', 'auth/signup/gym', 'auth/signin'];
  let isException = exceptions.find((elm) => {
    `${environment.baseUrl}${elm}` == request.url;
  });
  return isException ? next(request) : next(newRequest);
};
