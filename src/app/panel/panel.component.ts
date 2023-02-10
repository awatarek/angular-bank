import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../shared/service/accounts.service';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(private account: AccountsService) { }

  async ngOnInit(): Promise<void> {
    if(!this.account.hasAccount()){
      
    }
  }

}
