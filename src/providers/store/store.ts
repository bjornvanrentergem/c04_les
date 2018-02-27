import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreProvider {
  stores = [
    {"id":1,"first_name":"Andy","last_name":"Battershall","title":"AR Medicom Inc","email":"abattershall0@bandcamp.com","url":"https://images.adsttc.com/media/images/5016/bb55/28ba/0d14/1600/0ecd/large_jpg/stringio.jpg?1414010062","hours":[{"day":"2","start":"09","end":13},{"day":"7","start":"09","end":13},{"day":"6","start":"09","end":13},{"day":"7","start":"08","end":12},{"day":"6","start":"09","end":13}]},
    {"id":2,"first_name":"Isabella","last_name":"Janek","title":"Unit Dose Services","email":"ijanek1@usnews.com","hours":[{"day":"6","start":"19","end":23},{"day":"6","start":"19","end":23},{"day":"7","start":"07","end":11},{"day":"7","start":"08","end":12}]},
    {"id":3,"first_name":"Sharla","last_name":"Stopforth","title":"Mylan Institutional Inc.","email":"sstopforth2@deliciousdays.com","hours":[{"day":"7","start":"13","end":17},{"day":"7","start":"09","end":13},{"day":"7","start":"08","end":12},{"day":"7","start":"18","end":22}]},
    {"id":4,"first_name":"Alfy","last_name":"Vairow","title":"STAT RX USA LLC","email":"avairow3@icio.us","hours":[{"day":"6","start":"09","end":13},{"day":"7","start":"09","end":13},{"day":"7","start":"18","end":22},{"day":"6","start":"17","end":21},{"day":"7","start":"09","end":13},{"day":"7","start":"09","end":13}]},
    {"id":5,"first_name":"Maisey","last_name":"Orpwood","title":"VVF Illinois Services LLC","email":"morpwood4@cnet.com","hours":[{"day":"7","start":"09","end":13},{"day":"6","start":"07","end":11},{"day":"7","start":"09","end":13},{"day":"6","start":"07","end":11},{"day":"7","start":"13","end":17},{"day":"4","start":"08","end":12}]},
    {"id":6,"first_name":"Francoise","last_name":"De Laci","title":"NorthStar Rx LLC","email":"fdelaci5@skyrock.com","hours":[{"day":"5","start":"08","end":12},{"day":"6","start":"09","end":13},{"day":"6","start":"18","end":22},{"day":"7","start":"09","end":13}]},
    {"id":7,"first_name":"Rolland","last_name":"Wessel","title":"Mylan Institutional Inc.","email":"rwessel6@vk.com","hours":[{"day":"6","start":"19","end":23},{"day":"6","start":"09","end":13},{"day":"7","start":"14","end":18},{"day":"1","start":"09","end":13},{"day":"7","start":"19","end":23},{"day":"7","start":"07","end":11},{"day":"7","start":"18","end":22}]},
    {"id":8,"first_name":"Tallie","last_name":"Jeyness","title":"Pharmaderm, A division of Nycomed US Inc.","email":"tjeyness7@amazonaws.com","hours":[{"day":"5","start":"02","end":6},{"day":"5","start":"08","end":12},{"day":"6","start":"18","end":22},{"day":"7","start":"09","end":13},{"day":"3","start":"07","end":11},{"day":"5","start":"09","end":13},{"day":"7","start":"09","end":13},{"day":"7","start":"07","end":11}]},
    {"id":9,"first_name":"Haroun","last_name":"Snoddin","title":"Walgreen Company","email":"hsnoddin8@linkedin.com","hours":[{"day":"6","start":"08","end":12},{"day":"7","start":"17","end":21},{"day":"7","start":"18","end":22},{"day":"6","start":"18","end":22},{"day":"7","start":"11","end":15},{"day":"7","start":"08","end":12},{"day":"7","start":"18","end":22}]},
    {"id":10,"first_name":"Abbott","last_name":"Lochran","title":"Direct Rx","email":"alochran9@ibm.com","hours":[{"day":"6","start":"18","end":22},{"day":"7","start":"06","end":10},{"day":"7","start":"19","end":23},{"day":"7","start":"18","end":22},{"day":"6","start":"08","end":12},{"day":"7","start":"19","end":23},{"day":"6","start":"19","end":23},{"day":"7","start":"08","end":12}]},
    {"id":11,"first_name":"Harmonia","last_name":"Skegg","title":"AMWAY CORP.","email":"hskegga@hhs.gov","hours":[{"day":"7","start":"19","end":23},{"day":"7","start":"09","end":13},{"day":"7","start":"19","end":23},{"day":"7","start":"08","end":12}]},
    {"id":12,"first_name":"Harold","last_name":"Blowfield","title":"Physicians Total Care, Inc.","email":"hblowfieldb@ucoz.com","hours":[{"day":"7","start":"06","end":10},{"day":"7","start":"09","end":13},{"day":"5","start":"18","end":22},{"day":"7","start":"15","end":19},{"day":"7","start":"19","end":23}]},
    {"id":13,"first_name":"Ellene","last_name":"Evens","title":"CVS Pharmacy","email":"eevensc@slideshare.net","hours":[{"day":"7","start":"08","end":12},{"day":"6","start":"09","end":13},{"day":"6","start":"05","end":9},{"day":"7","start":"19","end":23},{"day":"7","start":"06","end":10}]},
    {"id":14,"first_name":"Prinz","last_name":"Favel","title":"AvKARE, Inc.","email":"pfaveld@addtoany.com","hours":[{"day":"6","start":"07","end":11},{"day":"7","start":"19","end":23},{"day":"4","start":"15","end":19},{"day":"7","start":"19","end":23},{"day":"5","start":"08","end":12},{"day":"7","start":"19","end":23},{"day":"6","start":"09","end":13},{"day":"7","start":"18","end":22}]},
    {"id":15,"first_name":"Tobye","last_name":"Oldam","title":"Antigen Laboratories, Inc.","email":"toldame@dagondesign.com","hours":[{"day":"6","start":"08","end":12},{"day":"5","start":"16","end":20},{"day":"7","start":"09","end":13},{"day":"6","start":"09","end":13},{"day":"7","start":"09","end":13},{"day":"7","start":"09","end":13},{"day":"4","start":"09","end":13}]},
    {"id":16,"first_name":"Elmore","last_name":"Tyt","title":"Accra-Pac, Inc.","email":"etytf@eventbrite.com","hours":[{"day":"2","start":"09","end":13},{"day":"7","start":"09","end":13},{"day":"4","start":"08","end":12},{"day":"7","start":"09","end":13},{"day":"6","start":"17","end":21},{"day":"7","start":"19","end":23}]},
    {"id":17,"first_name":"Kiele","last_name":"Nasey","title":"KAISER FOUNDATION HOSPITALS","email":"knaseyg@tuttocitta.it","hours":[{"day":"6","start":"08","end":12},{"day":"7","start":"09","end":13},{"day":"7","start":"19","end":23},{"day":"5","start":"19","end":23},{"day":"6","start":"19","end":23},{"day":"7","start":"09","end":13}]},
    {"id":18,"first_name":"Kessiah","last_name":"Chismon","title":"Ultradent Products, Inc.","email":"kchismonh@jalbum.net","hours":[{"day":"6","start":"19","end":23},{"day":"7","start":"17","end":21},{"day":"5","start":"09","end":13},{"day":"7","start":"19","end":23},{"day":"3","start":"07","end":11},{"day":"7","start":"08","end":12},{"day":"4","start":"18","end":22},{"day":"3","start":"09","end":13}]},
    {"id":19,"first_name":"Feliza","last_name":"Cockshut","title":"Uriel Pharmacy Inc.","email":"fcockshuti@howstuffworks.com","hours":[{"day":"6","start":"09","end":13},{"day":"6","start":"16","end":20},{"day":"5","start":"06","end":10},{"day":"7","start":"18","end":22},{"day":"1","start":"18","end":22},{"day":"7","start":"09","end":13},{"day":"7","start":"09","end":13},{"day":"7","start":"09","end":13}]},
    {"id":20,"first_name":"Dante","last_name":"Grim","title":"YVES ROCHER NORTH AMERICA INC","email":"dgrimj@newyorker.com","hours":[{"day":"5","start":"09","end":13},{"day":"7","start":"19","end":23},{"day":"7","start":"09","end":13},{"day":"7","start":"17","end":21}]}
  ]

  constructor() {
    console.log('Hello StoreProvider Provider');
  }

  getAll(){
    return this.stores;
  }

}
