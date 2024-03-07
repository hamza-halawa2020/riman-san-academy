import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  email: string = 'info@rimansan.net';
  email2: string = 'support@rimansan.net';

  total: number = 0;
  totalNumber: number = 0;
  card: any;

  constructor(
    private cartApi: CartService,
    private authService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateCartTotal();
    this.toggleNavar();
  }
  toggleNavar() {
    const documentClickHandler = (event: any) => {
      const element = document.querySelector('.navbar-collapse');
      if (element && element.classList.contains('show') && !element.contains(event.target)) 
      {
        element.classList.remove('show');
        document.removeEventListener('click', documentClickHandler);
      }
      document.addEventListener('click', documentClickHandler);
    };
    this.router.events.subscribe((event: any) => {
      if (event) {
        const element = document.querySelector('.navbar-collapse');
        if (element && element.classList.contains('show')) {
          element.classList.remove('show');
        }
      }
      document.addEventListener('click', documentClickHandler);
    });
    
  }

  updateCartTotal() {
    this.cartApi.getcounterCart().subscribe(() => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        this.total = cartItems.length;
      } else {
        this.total = 0;
      }
    });
  }

  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
  }

  isTopDropdownOpen = false;
  isNestedDropdownOpen = false;

  toggleTopDropdown() {
    this.isTopDropdownOpen = !this.isTopDropdownOpen;
  }

  toggleNestedDropdown(event: Event) {
    event.stopPropagation();
    this.isNestedDropdownOpen = !this.isNestedDropdownOpen;
  }

  closeDropdowns() {
    this.isTopDropdownOpen = false;
    this.isNestedDropdownOpen = false;
  }
}

