import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class DropdownService {

  constructor(private loggingService:LoggingService) { }
  dropdown(){
    this.loggingService.log('Retrieving the dropdown combo');
    return ["Mr","Mrs"]
  }
}
