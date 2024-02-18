import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(private toastr: ToastrService) { }

  // Success toast
  showSuccess(msg: string, title: string) {
    this.toastr.success(msg, title, {
      positionClass: 'toast-bottom-right',
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    });
  }

  // Warning toast
  showWarning(msg: string, title: string = '') {
    this.toastr.warning(msg, title, {
      positionClass: 'toast-bottom-right',
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    });
  }

  // Error toast
  showError(msg: string, title: string = '') {
    this.toastr.error(msg, title, {
      positionClass: 'toast-bottom-right',
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    });
  }

}
