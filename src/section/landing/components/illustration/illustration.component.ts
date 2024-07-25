import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'illustartion',
  standalone: true,
  imports: [],
  templateUrl: './illustration.component.html',
  styleUrl: './illustration.component.scss',
})
export class IllustrationComponent implements OnInit {
  public displayCode: string = `
class SoftwareEngineer {
    public name = "Samet";
    public lastName = "Sarıçiçek"
  }`;

  public ngOnInit(): void {}
}
