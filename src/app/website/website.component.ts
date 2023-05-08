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
      vorname: new FormControl(null),
      nachname: new FormControl()
    }),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private client:HttpClient) {  }

  static myValidator(control: FormControl): { [key: string]: any } {
    if (control.value == 'Alperen') {
      return {name: {valid: false}};
    } else {
      return this;
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
    this.loginForm.controls['password'].setValidators(Validators.minLength(8));
  }
}
