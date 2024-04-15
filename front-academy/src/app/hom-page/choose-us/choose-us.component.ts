import { Component } from '@angular/core';
import { ServiceService } from '../../services/angular-service/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.css'],
})
export class ChooseUsComponent {
  serviceContent: any;
  imageUrl = `${environment.imgUrl}images/services/`;
  constructor(private serviceService: ServiceService) {}
  ngOnInit(): void {
    this.loadserviceContent();
  }

  loadserviceContent(): void {
    this.serviceService.randomShow().subscribe(
      (data: any) => {
        this.serviceContent = Object.values(data)[0];
      },
      (error: any) => {
        console.error('Error fetching service content:', error);
      }
    );
  }
}
