import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../models/producto'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule,RouterLink,ToastrModule.forRoot(),BrowserAnimationsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent implements OnInit{
  productoForm:FormGroup;
  constructor(private fb: FormBuilder, private router:Router, private toastr: ToastrService){
    this.productoForm=this.fb.group({
      producto:['',Validators.required],
      categoria:['',Validators.required],
      ubicacion:['',Validators.required],
      precio:['',Validators.required],
    })

  }

  agregarProducto() {
    console.log(this.productoForm);
    console.log(this.productoForm.get('producto')?.value);

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    console.log(PRODUCTO);
    this.toastr.success(PRODUCTO.nombre, 'Producto Registrado');
    this.router.navigate(['/']);
  }


  ngOnInit(): void {
      
  }

}
