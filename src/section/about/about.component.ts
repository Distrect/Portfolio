import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import Person from '../../shared/personal.info';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'section[about]',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(
    public dataService: DataService,
    private translateService: TranslateService
  ) {}
}
