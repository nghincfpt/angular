import { Component } from '@angular/core';
import { Product } from './common/product';
import { ToastrService } from 'ngx-toastr';
import { FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private toastr:ToastrService){}
   products :Product[] =[
    {
    userName :"nghi",
    fullName :"nguyễn công nghị",
    password :"123",
    age   : 21,
    address : " nghệ an, việt nam"
  } ,
  {
    userName :"hoang",
    fullName :"pham van hoang",
    password :"123",
    age   : 21,
    address : " việt nam"
  } ,
  {
    userName :"hướng",
    fullName :"xuân hướng",
    password :"123",
    age   : 21,
    address : " quỳnh xuân"
  } 

]
student={
  userName :"",
  fullName :"",
  password :"",
  age   : 0,
  address : ""
} ;

Index: number = -1;

add() {
  if (this.Index === -1) {
    this.products.push({ ...this.student }); 
    this.toastr.info('Thêm thành công.', 'SUCCESS', {
      progressBar: true, // Hiển thị dòng màu trắng nhỏ ở bên giới thông báo
      timeOut: 2000, // 2 giây Thời gian tồn tại của thông báo (ms)
    });
  } else {
    this.products.splice(this.Index, 1, { ...this.student }); 
    this.toastr.info('Update thành công.', 'SUCCESS', {
      progressBar: true, // Hiển thị dòng màu trắng nhỏ ở bên giới thông báo
      timeOut: 2000, // 2 giây Thời gian tồn tại của thông báo (ms)
    });
  }
  this.Index = -1;
}
edit(index :number){
  this.Index=index;
this.student={...this.products[index]};
}



delete(index:number){
  const name=this.products[index].fullName
  const  confirmdelete= confirm(`Bạn có chắc chắn xóa Username : "${name}"`);
  if(confirmdelete){
  this.products.splice(index,1);
  this.toastr.info('Xóa thành công!', 'SUCCESS',{
    progressBar:true,
    timeOut:2000,
  });
}
}
}
