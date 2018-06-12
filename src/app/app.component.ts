import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public correct:number;
  public total:number; 
  public score:number; 
  public arr:any;

  ngOnInit(){
    this.correct = 0;
    this.total = 0;
    this.score=0;
    this.arr = this.getArray();
  }

  clicked(row,col,itemRow){
        let x = this.arr[row][col]
        if(x.diamond){
          this.correct += 1;
          x.image1 = true;
        }else{
          x.image2 = true;
          for(let a=0;a<itemRow.length;a++){
            if(itemRow[a].diamond){
              this.arr[row][a-1].image3 = true;
            }
          }

        }
        this.arr[row][col] = x;
        this.total += 1;
        this.score = 64- this.total
  }

  getArray(){
    let arr=[];
    for(let a=0;a<8;a++){
      arr.push(this.getRandom());
    }
    return arr;
  }

  getRandom(){
    let rand = Math.floor(Math.random() * 8);
    let arr=[];
    for(let i=0;i<8;i++){
      let obj;
      if(i==rand){
        obj={
          diamond:true,
          image1:false,
          image2:false,
          image3:false
        };
      }else{
        obj = {
          diamond:false,
          image1:false,
          image2:false,
          image3:false
        };
      }
      arr.push(obj);
    }
    return arr;
  }
}
