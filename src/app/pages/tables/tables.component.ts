import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  products: any[] = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.listProducts()
  }

  listProducts(){
    this.getProducts().subscribe(data =>{
      this.products = data.map(item =>{
        console.log(item)
        return item
      })

      console.log(this.products);
    })
  }

  delteProdcutFuntion(nombre: string){
    this.deletePrducto(nombre).then(() => {
      console.log('Producto Eliminado')
    }).catch(error =>{
      console.log(error)
    })
  }

  getProducts(): Observable<any>{
    return this.firestore.collection('products').valueChanges();
  }

  deletePrducto(nombre: string): Promise<any>{
    return this.firestore.collection('products').doc(nombre).delete();
  }
}
