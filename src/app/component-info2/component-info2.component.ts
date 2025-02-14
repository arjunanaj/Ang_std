import { Component } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { AddComponent2Service } from '../_services/add-component-2.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-component-info2',
  templateUrl: './component-info2.component.html',
  styleUrls: ['./component-info2.component.css']
})
export class ComponentInfo2Component {
  componentDef:string;
  componentImg1:string;
  componentImg2:string;
  componentImg3:string;

  serverErrorDef=true;
  serverErrorImg1=true;
  serverErrorImg2=true;
  serverErrorImg3=true;

  constructor(public loginService:LoginService,public addcomponentService:AddComponent2Service,private router:Router,private location: Location){}

  ngOnInit(): void {
    this.loginService.canAuthenticate()
    this.getComponentDef();
    this.getComponentImg1()
    this.getComponentImg2()
    this.getComponentImg3()
   
  }

  getComponentDef(){
this.addcomponentService.getComponentDef().subscribe((data)=>{
  this.componentDef=data.componentDef
},(error)=>{
  if(error.status==500){
    this.serverErrorDef=false
   }  
})
  }
  getComponentImg1(){
    this.addcomponentService.getComponentImage1().subscribe((data)=>{
      const reader = new FileReader();
      reader.onloadend = () => {
        this.componentImg1 = reader.result as string;
      };
      reader.readAsDataURL(data);
    },(error)=>{
      if(error.status==500){
        this.serverErrorImg1=false
       }  
    })
  }
  getComponentImg2(){
    this.addcomponentService.getComponentImage2().subscribe((data)=>{
      const reader = new FileReader();
      reader.onloadend = () => {
        this.componentImg2 = reader.result as string;
      };
      reader.readAsDataURL(data);
    },(error)=>{
      if(error.status==500){
        this.serverErrorImg1=false
       }  
    })
  }
  getComponentImg3(){
    this.addcomponentService.getComponentImage3().subscribe((data)=>{
      const reader = new FileReader();
      reader.onloadend = () => {
        this.componentImg3 = reader.result as string;
      };
      reader.readAsDataURL(data);
    },(error)=>{
     
      if(error.status==500){
        this.serverErrorImg1=false
       }  
    })
  }
  retry(){
    this.location.go(this.location.path()) 
   
   
  }

}
