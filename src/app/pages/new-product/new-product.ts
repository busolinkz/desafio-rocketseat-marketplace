import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products';
import { NewProductRequest } from '../../interfaces/new-product-request';
import { take } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct {
  private readonly _productsService = inject(ProductsService);
  private readonly _router = inject(Router);

  protected successMessage = '';
  protected productForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });
  protected productImageBase64 = '';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.convertImageIntoBase64(file);
  }

  convertImageIntoBase64(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageBase64 = e.target?.result;
      if (!imageBase64) return;
      this.productImageBase64 = String(imageBase64);
    };

    reader.onerror = (error) => {
      this.productImageBase64 = '';
    };

    reader.readAsDataURL(file);
  }

  saveProduct() {
    if (this.productForm.invalid || !this.productImageBase64) return;

    const { title, price, category, description } = this.productForm.value;
    const newProduct: NewProductRequest = {
      title: title as string,
      price: price as number,
      category: category as string,
      description: description as string,
      imageBase64: this.productImageBase64,
    };

    this._productsService
      .saveProduct(newProduct)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.successMessage = response.message;
          this._router.navigate(['/products']);
        },
        error: (error) => {},
      });
  }
}
