import { Component,OnInit ,OnChanges,ViewChild} from '@angular/core';
import {MovieGetService} from './Service/movie-get.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieList';
  public movielist:string;
  public showlink:boolean;
  public clearstate:boolean=true;
constructor(private _moviegetservice:MovieGetService){

}
  @ViewChild('select')
  public select: any;
  ngOnInit(){
  //Service call for getiing movie list 

  this._moviegetservice.gemovielist().subscribe(

    data=>{
      this.movielist=data;
    },
    error=>{


    }
  )
}

movieselected=(val)=>{
(val!=null)?this.showlink=true:this.showlink=false;
}

clear=()=>{
this.showlink=false;
this.select.nativeElement.selectedIndex=0;
}
}
