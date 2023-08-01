import { Component } from '@angular/core';

const MOCK_DATA: any[] = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', age: 28, email: 'michael@example.com' },
  { id: 4, name: 'Emily Williams', age: 32, email: 'emily@example.com' },
  { id: 5, name: 'David Lee', age: 29, email: 'david@example.com' },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    data = MOCK_DATA;
}
