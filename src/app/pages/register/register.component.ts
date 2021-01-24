import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  productForm = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    categoria: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,  
    private firestore: AngularFirestore) { }

  ngOnInit() {
  }


  agregarProduct(item:any){
    const {nombre, descripcion, cantidad, precio, categoria} = item
    const product: any = {nombre, descripcion,cantidad,precio,categoria}
    this.addProductFirebase(product).then(() => {
      console.log('producto Agregado')
    }).catch(error => {
      console.log(error);
    })
  }


  addProductFirebase(product:any): Promise<any>{
    return  this.firestore.collection('products').add(product);
  }

  onSubmit() {
    console.warn(this.productForm.value);
    this.agregarProduct(this.productForm.value)
  }
  
}
