import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  	selector: 'app-paper-list',
  	templateUrl: './paper-list.component.html',
  	styleUrls: ['./paper-list.component.css']
})
export class PaperListComponent implements OnInit {

	displayedColumns = ['position', 'name', 'category', 'author', 'releaseDate'];
	dataSource = new MatTableDataSource<Paper>(PAPER_DATA);
  	constructor() { }

	ngOnInit() {
	}

}


export interface Paper {
	position: number;
	name: string;
	category: string;
	author: string;
	releaseDate: Date;
}
  
const PAPER_DATA: Paper[] = [
	{position: 1, name: 'Interaktive Oberflächen durch AR-Projekor', category: 'AR', author: 'Sarah Fischer', releaseDate: new Date()},
	{position: 2, name: 'async und await für Node.js', category: 'Nodejs', author: 'Florian Gudat', releaseDate: new Date()},
	{position: 3, name: 'Kryptominig als Alternative zu Werbung', category: 'Crypto', author: 'Martin Duschek', releaseDate: new Date()},
	{position: 4, name: 'Motorola Solutions: Neue Technik für Feuerwerk und Polizei', category: 'AR', author: 'Marie-Sophie von Braun', releaseDate: new Date()},
	{position: 5, name: 'Android Schädling Lokibot ist eine Transformer-Malware', category: 'Android', author: 'Ronny Schmidt', releaseDate: new Date()},
	{position: 6, name: 'Google ruft zum Hack von Android-Apps auf – für einen guten Zweck', category: 'Hacking', author: 'Laura Schlechte', releaseDate: new Date()},
	{position: 7, name: 'Amazon Key / Smart Home', category: 'Smart Home', author: 'Jonny Graichen', releaseDate: new Date()},
	{position: 8, name: 'Computerprogramm soll Demenzkranke und ihre Familien besser vernetzen', category: 'Medical Informatics', author: 'Philipp Jäckel', releaseDate: new Date()},
	{position: 9, name: 'Google: Algorithmus entfernt Wasserzeichen in Fotos automatisch', category: 'Security', author: 'Sergi Domenech Guzy', releaseDate: new Date()},
	{position: 10, name: 'Einblick in den WPA2-Verschlüsselungsangriff', category: 'Security', author: 'Nina Heinz', releaseDate: new Date()},
	{position: 11, name: 'Project Jigsaw: Das neue Modulsystem von Java', category: 'Java', author: 'Frauke Kothe', releaseDate: new Date()},
	{position: 12, name: 'Microsofts HoloLens: Gerüstet für den praktischen Einsatz?', category: 'AR', author: 'Alexander Gebauer', releaseDate: new Date()},
	{position: 13, name: 'Optane-SSD für Desktop-PCs: Erste Ergebnisse zeigen hohe Geschwindigkeit', category: 'Optimizing', author: 'Dinh Quang Nguyen', releaseDate: new Date()},
	{position: 14, name: 'Diskrete Logarithmenberechnung mit dem speziellen Zahlenkörpersieb in asymmetrischen Kryptoverfahren', category: 'Security', author: 'Laila Kamil', releaseDate: new Date()},
	{position: 15, name: ' Zahlen, bitte! 0x5f3759df – merkwürdige Mathematik im Egoshooterr', category: 'Videogames', author: 'Niklas Kleemann', releaseDate: new Date()},
];
