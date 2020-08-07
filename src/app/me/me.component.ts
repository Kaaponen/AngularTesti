import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  gitRepos: Object;

  constructor(private _http: HttpService ) { }

  ngOnInit(): void {
    this._http.getGitHubProjects().subscribe(data =>{
      this.gitRepos = data
    });
  }

}
