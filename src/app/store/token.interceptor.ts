import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const TokenInterceptor: HttpInterceptorFn = (
  request,
  next
): Observable<HttpEvent<unknown>> => {
  let token =
    'tokennfgjdkfngn_sdjfsdjfskdfjsldfswioerwper_jksbdnfbandfvghjvcnbzvhagfsdaytwfguq_xvmnsbjseruwieruhskjdf';
  const newRequest = request.clone({
    setHeaders: {
      // Authorization: `Bearer ${token}`,
      Madara : `Bearer ${token}`
    },
  });

  return next(newRequest);
};
