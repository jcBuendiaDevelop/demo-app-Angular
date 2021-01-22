import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
CreateProduct: FormGroup;
submitted = false;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore ) {
    this.CreateProduct = this.fb.group({
      nombre: ['sd',Validators.required],
      descripcion: ['sdd',Validators.required],
      cantidad: ['5',Validators.required],
      precio: ['5',Validators.required],
      categoria: ['sdsdsd',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  agregarProduct(){
    const {nombre = 'tenis', descripcion = 'nike de goma',cantidad = 4 ,precio = 200,categoria = 'zapateria'} = this.CreateProduct.value; 
    const product: any = {nombre, descripcion,cantidad,precio,categoria}
    console.log(this.CreateProduct);
    this.addProductFirebase(product).then(() => {
      console.log('producto Agregado')
    }).catch(error => {
      console.log(error);
    })
  }

  addProductFirebase(product:any): Promise<any>{
    return  this.firestore.collection('products').add(product);
  }
}
