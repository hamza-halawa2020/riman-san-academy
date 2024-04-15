import { Component } from '@angular/core';
import { ServiceService } from '../angular-service/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  pageTitle: string = 'Services';
  serviceContent: any;
  imageUrl = `${environment.imgUrl}images/services/`;

  constructor(private serviceService: ServiceService) {}
  ngOnInit(): void {
    this.loadserviceContent();
  }

  loadserviceContent(): void {
    this.serviceService.getAll().subscribe(
      (data: any) => {
        this.serviceContent = Object.values(data)[0];
      },
      (error: any) => {
        console.error('Error fetching service content:', error);
      }
    );
  }
}
