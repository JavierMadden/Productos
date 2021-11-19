import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoDetalle } from 'src/app/modelos/ProductoDetalle';
import { ServiceProductService } from 'src/app/services/service-product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, AfterViewInit {

  constructor(private service: ServiceProductService, private route:Router) { }
  producDetail: ProductoDetalle  = new ProductoDetalle();

  ngOnInit(): void {
    this.Editar()
  }
  ngAfterViewInit() {
    console.log(this.producDetail)
    // ...
  }
  Editar(){
    let idproducto = localStorage.getItem("id") || {};
    this.service.getProductDetailById(+idproducto).subscribe(
      data => {
        this.producDetail = data;
      }
      )
  }
}
