import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from './services/interaction.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'StravaCleaner';
   
  constructor(private _interaction: InteractionService) {
    this._interaction.getAuthorization();

    // this._interaction.getTest()
    //     .subscribe((response) => {console.log(response)},
    //     (error) => {
    //       console.log(error);
    //       // this.errorMessage = error.message; this.loading = false; 
    //     },
    //     () => {
    //       console.log('complete!!!');
    //       // this.loading = false;
    //     })

    // this._interaction.getConfig()
    // .subscribe((response) => {console.log(response)},
    // (error) => {
    //   console.log(error);
    //   // this.errorMessage = error.message; this.loading = false; 
    // },
    // () => {
    //   console.log('complete!!!');
    //   // this.loading = false;
    // })
    // window.location.href = this._interaction.prepareAuth();
    
  }
  
}