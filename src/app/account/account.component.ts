import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, 
              private accountService: AccountsService
  ){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status);
  }
}
