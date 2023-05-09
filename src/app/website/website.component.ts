import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  priceInEuro: any;
  loginForm = new FormGroup({
    name: new FormGroup({
      vorname: new FormControl(null, Validators.max(13)),
      nachname: new FormControl(null,[ Validators.maxLength(8)])
    } ),
    email: new FormControl(null,[ Validators.email, WebsiteComponent.myValidator]),
    password: new FormControl(null, [Validators.min(8), Validators.required])
  });

  constructor(private client:HttpClient) {  }

  static myValidator(control: FormControl): { [p: string]: any } | null {
    if (control.value == 'alperentunc@mail.de') {
      return {name: {valid: false}};
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    const body = {fsym:'ETH', tsyms: 'BTC,USD,EUR'};
    this.client.post('https://min-api.cryptocompare.com/data/price', body)// statt get habe ich post geschrieben.
      // what API get '{"BTC":0.06511,"USD":1866.24,"EUR":1692.19}'
      .subscribe(data => {
        //let priceInEuro: any;
        //priceInEuro = data['EUR'];
        console.log(data);
      }, (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          console.log("Client funktioniert nicht");
        }
        else {
          console.log("es ist ein Fehler aufgetreten");
        }

    });
  }

  login(value: any)
  {
    console.log(value['name']);
  }

  login1() {
    console.log(this.loginForm);
    this.loginForm.controls['password'].reset();
  }
}
