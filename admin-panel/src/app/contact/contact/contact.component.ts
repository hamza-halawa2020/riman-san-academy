import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  error: string = '';
  contacts: any;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadcontacts();
  }

  loadcontacts() {
    this.contactService.getAll().subscribe(
      (res: any) => {
        this.contacts = Object.values(res)[0];
      },
      () => {
        this.error = 'Error loading contacts. Please try again later.';
      }
    );
  }

  deletecontact(id: string) {
    this.contactService.delete(id).subscribe(
      () => {
        this.error = 'contact item deleted successfully.';
        this.loadcontacts();
      },
      () => {
        this.error = 'Error deleting contact item. Please try again later.';
      }
    );
  }
}
