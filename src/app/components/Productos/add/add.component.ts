import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/Producto';
import { ServiceProductService } from 'src/app/services/service-product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service: ServiceProductService, private route:Router) { }

  ngOnInit(): void {
  }
  produc:Producto = new Producto();
  Guardar(){
    this.service.addProducts(this.produc).subscribe(data =>{
      alert('Producto se agregó con exito!')
      this.route.navigate(["listar"])
    });
  }
}
