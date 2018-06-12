import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public correct:number;
  public total:number; 
  public score:string; 
  //arr = [[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]];
  public arr:any;

  ngOnInit(){
    this.correct = 0;
    this.total = 0;
    this.score="0";
    this.arr = this.getArray();
  }

  clicked(row,col,obj){
    //console.log("Row = "+x+" Column = "+i);
    
    // for(let a=0;a<8;a++){
    //   for(let b=0;b<8;b++){
        console.log(obj);
        let x = this.arr[row][col]
        if(x.diamond){
          this.correct += 1;
        }
        this.total += 1;
        this.score =((this.correct/this.total)*100).toFixed(2);
    //  }
  //  }
    console.log("Correct=" + this.correct);
    console.log("Total="+ this.total);
  }

  getArray(){
    let arr=[];
    for(let a=0;a<8;a++){
      arr.push(this.getRandom());
    }
    //console.log(arr);
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
          point:1
        };
      }else{
        obj = {
          diamond:false,
          point:0
        };
      }
      arr.push(obj);
    }
    return arr;
  }
}
