import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoDetalle } from 'src/app/modelos/ProductoDetalle';
import { ServiceProductService } from 'src/app/services/service-product.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  nombre = ''
  constructor(private service: ServiceProductService, private route:Router) { }
  produc:Producto = new Producto();
  producDetail:ProductoDetalle = new ProductoDetalle();
  ngOnInit(): void {
    this.Editar()
  }

  Editar(){
    let idproducto = localStorage.getItem("id") || {};
    this.service.getProductsById(+idproducto).subscribe(
      data => {
        this.produc = data;
        this.nombre = this.produc.nombre;
        console.log(this.produc)
      }
    )
  }
  Guardar(){
    let idproducto = localStorage.getItem("id") || {};
    this.producDetail.idproducto = +idproducto;
    this.service.addDetailProducts(this.producDetail).subscribe(data =>{
      alert('Producto se agregó con exito!')
      this.route.navigate(["listar"])
    });
  }

}
