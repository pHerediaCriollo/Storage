import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '../Services/loader.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,ReactiveFormsModule],
})
export class HomePage {

  receivetext:string;
  recovertext:string;
  constructor(private loader:LoaderService) {
    this.receivetext="";
    this.recovertext="";
  }

  async ngOnInit() {
    this.recovertext = await this.loader.load("test");
  }
  async print(){


    if(this.receivetext){
      this.loader.save("test",this.receivetext);
      this.recovertext = this.receivetext;
      this.receivetext="";
    }
  }

}
