import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Face } from './face/face';
import { Card} from './card/card';
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Face, Card, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app';
}
