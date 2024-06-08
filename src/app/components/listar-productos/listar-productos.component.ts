import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterLink,BrowserAnimationsModule,ToastrModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {

}
