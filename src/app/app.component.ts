import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
interface ItemData {
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NzTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'demo-antdesign';
  listOfData: ItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }
}
