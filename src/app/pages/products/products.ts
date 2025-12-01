import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { ProductsService } from '../../services/products';

interface FilterOptions {
  title: string;
  status: string;
}

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  protected readonly _productsService = inject(ProductsService);
  protected readonly products$ = this._productsService.getProducts();

  protected filterForm = new FormGroup({
    title: new FormControl(''),
    status: new FormControl(''),
  });
  private readonly filters$ = new BehaviorSubject<FilterOptions>(this.filterForm.value as FilterOptions);

  protected readonly filteredProducts$ = combineLatest([this.filters$, this.products$]).pipe(
    map(([filters, response]) => {
      const { title, status } = filters;
      const titleLowerCase = title?.toLowerCase();
      const statusLowerCase = status?.toLowerCase();

      const filteredItems = response.data.filter(
        (product) =>
          (!titleLowerCase || product.title.toLowerCase().includes(titleLowerCase)) &&
          (!statusLowerCase || product.status.toLowerCase().includes(statusLowerCase))
      );

      return filteredItems;
    })
  );

  filterProducts() {
    const { title, status } = this.filterForm.value;

    this.filters$.next({
      title: title as string,
      status: status as string,
    });
  }

  clearFilter() {
    this.filterForm.reset();
    this.filterForm.controls.status.setValue('');

    this.filters$.next({
      title: '',
      status: '',
    });
  }
}
