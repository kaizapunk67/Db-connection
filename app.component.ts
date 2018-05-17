import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, FormBuilder, Validators} from '@angular/forms';
import { ServerService } from './server.service';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY = "BCYnh8ShWuqKujE_QZ82mMd1hMMfpNYsmOTXI6Xx_Epj3XyNRq_eLY1B76G3BpVeB0X5c8CBRrzb4W86CsumaC8";
  rForm:FormGroup;
   constructor(private serverService:ServerService){  
  }
  ngOnInit(){
    this.rForm= new FormGroup({
      'name':new FormControl(null,Validators.required),
    });
  
  }
  onSubmit(){ 
    alert("Hi "+this.rForm.get('name').value);
    this.serverService.storeServers(JSON.stringify(this.rForm.get('name').value)).subscribe((response)=>console.log(response),
  (error)=>console.log(error));
  }
  
}
