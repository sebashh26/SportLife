import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	})
export class AppComponent {
	public title :string;
	public description :string;
	public name:string='';
	public age:number;
	public found:boolean;

	constructor(private httpClient:HttpClient){
		this.title = 'SportLife sera una realidad';
		this.description = 'Proyecto SportLife para las ligas Barriales del Ecuador';
		this.found = false;
	}
	onNameKeyUp(event:any){
		this.name=event.target.value;
		console.log(event.target.value);
		this.found=false;
	}

	getProfile(){
		this.httpClient.get(`https://my-json-server.typicode.com/sebashh26/json-faker-directory/profiles/?name=${this.name}`).subscribe(
			(data:any[]) =>{
				if(data.length){
					console.log("entro");
					this.age =data[0].age;
					this.found =  true;

				}
			}
			)
	}
}
