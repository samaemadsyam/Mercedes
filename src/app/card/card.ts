import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card',
  standalone: true, // لو Standalone
  imports: [NgFor, FormsModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']  // ← ✅ لاحظ هنا `styleUrls`
})
export class Card {
  products = [
    { title: "AMG C63s Coupe", price: "10,000,000 EGP", imgurl: "/img/AMG C63s Coupe.jpg" },
    { title: "CLE 53 AMG", price: "3,650,000 EGP", imgurl: "/img/CLE 53 AMG.jpg" },
    { title: "E63 amg w212", price: "5,000,000 EGP", imgurl: "/img/E63 AMG W212.jpg" },
    { title: "63S", price: "10,000,000 EGP", imgurl: "/img/63S.jpg" },
    { title: "Benz GLS 450", price: "6,500,000 EGP", imgurl: "/img/Benz GLS 450.jpg" },
    { title: "GLS 580", price: "9,100,000 EGP", imgurl: "/img/GLS 580.jpg" },
  ];
}
