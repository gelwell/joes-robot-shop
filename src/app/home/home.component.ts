import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bot-home',  
  // template: `<p class="red">
  //             Inline home worrks!
  //           </p>`,
  // styles: [`
  //   .red  {
  //       color: red;
  //   }
  // `]
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent  {

// }
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

        // throw new Error('Method not implemented.');
    
  } 
}
