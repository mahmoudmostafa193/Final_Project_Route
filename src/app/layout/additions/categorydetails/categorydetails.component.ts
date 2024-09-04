import { dirname } from 'node:path';
import { Component, OnInit } from '@angular/core';
import { CatgeoryService } from '../../../shared/services/catgeory/catgeory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [],
  templateUrl: './categorydetails.component.html',
  styleUrl: './categorydetails.component.scss'
})
export class CategorydetailsComponent implements OnInit{
  cartId:string|null='';
  cartDetails:any={} ;
constructor(private _CatgeoryService:CatgeoryService,private _ActivatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (params)=>{
this.cartId=params.get('id')
    }
  })
  this._CatgeoryService.getSpecificCategories(this.cartId).subscribe(
    {
next:(res)=>{
console.log(res)
this.cartDetails=res.data;
}
    }
  )
}

}
