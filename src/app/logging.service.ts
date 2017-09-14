import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }
  
  log (logs) {
    console.log(logs);
  }
  info (info) {
    console.log(info);
  }
  warn (warn) {
    console.log(warn);
  }
  clear (clear) {
    console.log(clear);
  }
}
