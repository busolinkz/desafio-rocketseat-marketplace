import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-horizontal',
  imports: [RouterOutlet, Header],
  templateUrl: './horizontal.html',
  styleUrl: './horizontal.css',
})
export class Horizontal {

}
