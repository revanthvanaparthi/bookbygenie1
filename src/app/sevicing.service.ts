import { Injectable } from "@angular/core";
import { Movies } from "./movies";

@Injectable({
  providedIn: "root"
})
export class SevicingService {
  constructor() {}
  public cinema: Movies[] = [
    {
      name: "Battle Drone",
      genre: "Action",
      language: "Telugu",
      image: "./assets/35.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Monster Island",
      genre: "Adventure",
      language: "Telugu",
      image: "./assets/34.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Ride Like A Girl",
      genre: "Drama",
      language: "Telugu",
      image: "./assets/33.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Judas And The Black Messiah",
      genre: "Drama",
      language: "English",
      image: "./assets/30.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Heroic Losers",
      genre: "Comedy",
      language: "Hindi",
      image: "./assets/29.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "The Witches",
      genre: "Adventure",
      language: "Hindi",
      image: "./assets/28.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Coda",
      genre: "Drama",
      language: "English",
      image: "./assets/27.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Midsommar",
      genre: "Drama",
      language: "Hindi",
      image: "./assets/26.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Monster Hunter",
      genre: "Action",
      language: "English",
      image: "./assets/25.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "The Power",
      genre: "Thriller",
      language: "Hindi",
      image: "./assets/23.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },
    {
      name: "Abijit Ganguly",
      genre: "Standup",
      language: "Hindi",
      image: "./assets/22.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Staccato @ Hylife",
      genre: "Comedy",
      language: "Hindi",
      image: "./assets/21.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Drama for Youth",
      genre: "Drama",
      language: "Hindi",
      image: "./assets/20.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Saikiran Rolling",
      genre: "Comedy",
      language: "Telugu",
      image: "./assets/19.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Rajasekhar Mamidanna",
      genre: "Music",
      language: "Telugu",
      image: "./assets/18.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Online Yoga",
      genre: "Action",
      language: "Telugu",
      image: "./assets/17.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Punchliuners",
      genre: "Comedy",
      language: "English",
      image: "./assets/16.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Technique for Actors",
      genre: "Improvisation",
      language: "English",
      image: "./assets/15.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Vakeel Saab",
      genre: "Action",
      language: "Telugu",
      image: "./assets/1.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "Rang De",
      genre: "Drama",
      language: "Telugu",
      image: "/assets/2.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "Sulthan",
      genre: "Drama",
      language: "Telugu",
      image: "/assets/3.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "Wild Dog",
      genre: "Action",
      language: "Telugu",
      image: "/assets/4.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    /*{
      name: "Tom & Jerry",
      genre: "Comedy",
      language: "English",
      image: "/assets/5.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },*/
    {
      name: "Godzilla vs Kon",
      genre: "Action",
      language: "English",
      image: "/assets/6.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "Roohi",
      genre: "Comedy",
      language: "Hindi",
      image: "/assets/7.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "Bansuri",
      genre: "Drama",
      language: "Hindi",
      image: "/assets/8.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "Voyagers",
      genre: "Adventure",
      language: "English",
      image: "/assets/9.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "The Mouritanian",
      genre: "Thriller",
      language: "English",
      image: "/assets/10.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    {
      name: "Deyyam",
      genre: "Horror",
      language: "Telugu",
      image: "/assets/11.jpg",
      visible: [true, true],
      category: "movie",
      location: ["",""]
    },
    /*{
      name: "Tenet",
      genre: "Thriller",
      language: "Telugu",
      image: "/assets/12.jpg",
      visible: [true, true],
      category: "stream",
      location: ["",""]
    },*/
    {
      name: "Dongri Danger",
      genre: "Standup",
      language: "Hindi",
      image: "/assets/13.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    },
    {
      name: "Good Vibes",
      genre: "Music",
      language: "English",
      image: "/assets/14.jpg",
      visible: [true, true],
      category: "event",
      location: ["",""]
    }
  ];
  setCategory(s: string) {
    for (let i = 0; i < this.cinema.length; i++) {
      this.cinema[i].visible[0] = false;
      if (this.cinema[i].category == s) this.cinema[i].visible[0] = true;
    }
  }
  getCategory(): Movies[] {
    return this.cinema;
  }
}
