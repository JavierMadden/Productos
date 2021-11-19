import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/Producto';
import {ServiceProductService} from '../../../services/service-product.service'
@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {

  productos :Producto[];
  constructor(private service: ServiceProductService, private route:Router) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe(data => {
      this.productos = data;
    });
  }
  addDetails(producto:Producto):void{

    localStorage.setItem("id", producto.idproducto.toString());
    this.route.navigate(["addDetails"]);
  }
  getDetails(producto:Producto):void{
    localStorage.setItem("id", producto.idproducto.toString());
    this.route.navigate(["edit"]);
  }

}
