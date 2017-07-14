import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  spots: any;

constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('http://node.spot2fish.com/api/v1/spots').map(res => res.json()).subscribe(data => {
     this.spots = data.spots;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
