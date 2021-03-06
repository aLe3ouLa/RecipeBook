import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage: DataStorageService, public authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorage.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }

  onLogOut() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
}
}
