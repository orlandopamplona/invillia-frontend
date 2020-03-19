import React from "react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import App from './App';


let container = null;


const backendURL = 'https://swapi.co/api/'

const peoplePage1Mock = {
    "count": 30,
    "next": "https://swapi.co/api/people/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/14/",
                "https://swapi.co/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.co/api/starships/12/",
                "https://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.co/api/people/1/"
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:10:51.357000Z",
            "edited": "2014-12-20T21:17:50.309000Z",
            "url": "https://swapi.co/api/people/2/"
        },
        {
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/8/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:11:50.376000Z",
            "edited": "2014-12-20T21:17:50.311000Z",
            "url": "https://swapi.co/api/people/3/"
        },
        {
            "name": "Darth Vader",
            "height": "202",
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/13/"
            ],
            "created": "2014-12-10T15:18:20.704000Z",
            "edited": "2014-12-20T21:17:50.313000Z",
            "url": "https://swapi.co/api/people/4/"
        },
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female",
            "homeworld": "https://swapi.co/api/planets/2/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/30/"
            ],
            "starships": [],
            "created": "2014-12-10T15:20:09.791000Z",
            "edited": "2014-12-20T21:17:50.315000Z",
            "url": "https://swapi.co/api/people/5/"
        },
        {
            "name": "Owen Lars",
            "height": "178",
            "mass": "120",
            "hair_color": "brown, grey",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "52BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:52:14.024000Z",
            "edited": "2014-12-20T21:17:50.317000Z",
            "url": "https://swapi.co/api/people/6/"
        },
        {
            "name": "Beru Whitesun lars",
            "height": "165",
            "mass": "75",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "47BBY",
            "gender": "female",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:53:41.121000Z",
            "edited": "2014-12-20T21:17:50.319000Z",
            "url": "https://swapi.co/api/people/7/"
        },
        {
            "name": "R5-D4",
            "height": "97",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, red",
            "eye_color": "red",
            "birth_year": "unknown",
            "gender": "n/a",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:57:50.959000Z",
            "edited": "2014-12-20T21:17:50.321000Z",
            "url": "https://swapi.co/api/people/8/"
        },
        {
            "name": "Biggs Darklighter",
            "height": "183",
            "mass": "84",
            "hair_color": "black",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "24BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/12/"
            ],
            "created": "2014-12-10T15:59:50.509000Z",
            "edited": "2014-12-20T21:17:50.323000Z",
            "url": "https://swapi.co/api/people/9/"
        },
        {
            "name": "Obi-Wan Kenobi",
            "height": "182",
            "mass": "77",
            "hair_color": "auburn, white",
            "skin_color": "fair",
            "eye_color": "blue-gray",
            "birth_year": "57BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/20/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/38/"
            ],
            "starships": [
                "https://swapi.co/api/starships/48/",
                "https://swapi.co/api/starships/59/",
                "https://swapi.co/api/starships/64/",
                "https://swapi.co/api/starships/65/",
                "https://swapi.co/api/starships/74/"
            ],
            "created": "2014-12-10T16:16:29.192000Z",
            "edited": "2014-12-20T21:17:50.325000Z",
            "url": "https://swapi.co/api/people/10/"
        }
    ]
}

const peoplePage2Mock = {
    "count": 30,
    "next": "https://swapi.co/api/people/?page=3",
    "previous": "https://swapi.co/api/people/?page=1",
    "results": [
        {
            "name": "Anakin Skywalker",
            "height": "188",
            "mass": "84",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "41.9BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/1/",
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/44/",
                "https://swapi.co/api/vehicles/46/"
            ],
            "starships": [
                "https://swapi.co/api/starships/59/",
                "https://swapi.co/api/starships/65/",
                "https://swapi.co/api/starships/39/"
            ],
            "created": "2014-12-10T16:20:44.310000Z",
            "edited": "2014-12-20T21:17:50.327000Z",
            "url": "https://swapi.co/api/people/11/"
        },
        {
            "name": "Wilhuff Tarkin",
            "height": "180",
            "mass": "unknown",
            "hair_color": "auburn, grey",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "64BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/21/",
            "films": [
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T16:26:56.138000Z",
            "edited": "2014-12-20T21:17:50.330000Z",
            "url": "https://swapi.co/api/people/12/"
        },
        {
            "name": "Chewbacca",
            "height": "228",
            "mass": "112",
            "hair_color": "brown",
            "skin_color": "unknown",
            "eye_color": "blue",
            "birth_year": "200BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/14/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/3/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/19/"
            ],
            "starships": [
                "https://swapi.co/api/starships/10/",
                "https://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-10T16:42:45.066000Z",
            "edited": "2014-12-20T21:17:50.332000Z",
            "url": "https://swapi.co/api/people/13/"
        },
        {
            "name": "Han Solo",
            "height": "180",
            "mass": "80",
            "hair_color": "brown",
            "skin_color": "fair",
            "eye_color": "brown",
            "birth_year": "29BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/22/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/10/",
                "https://swapi.co/api/starships/22/"
            ],
            "created": "2014-12-10T16:49:14.582000Z",
            "edited": "2014-12-20T21:17:50.334000Z",
            "url": "https://swapi.co/api/people/14/"
        },
        {
            "name": "Greedo",
            "height": "173",
            "mass": "74",
            "hair_color": "n/a",
            "skin_color": "green",
            "eye_color": "black",
            "birth_year": "44BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/23/",
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/4/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T17:03:30.334000Z",
            "edited": "2014-12-20T21:17:50.336000Z",
            "url": "https://swapi.co/api/people/15/"
        },
        {
            "name": "Jabba Desilijic Tiure",
            "height": "175",
            "mass": "1,358",
            "hair_color": "n/a",
            "skin_color": "green-tan, brown",
            "eye_color": "orange",
            "birth_year": "600BBY",
            "gender": "hermaphrodite",
            "homeworld": "https://swapi.co/api/planets/24/",
            "films": [
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/5/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T17:11:31.638000Z",
            "edited": "2014-12-20T21:17:50.338000Z",
            "url": "https://swapi.co/api/people/16/"
        },
        {
            "name": "Wedge Antilles",
            "height": "170",
            "mass": "77",
            "hair_color": "brown",
            "skin_color": "fair",
            "eye_color": "hazel",
            "birth_year": "21BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/22/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [
                "https://swapi.co/api/vehicles/14/"
            ],
            "starships": [
                "https://swapi.co/api/starships/12/"
            ],
            "created": "2014-12-12T11:08:06.469000Z",
            "edited": "2014-12-20T21:17:50.341000Z",
            "url": "https://swapi.co/api/people/18/"
        },
        {
            "name": "Jek Tono Porkins",
            "height": "180",
            "mass": "110",
            "hair_color": "brown",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "unknown",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/26/",
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/12/"
            ],
            "created": "2014-12-12T11:16:56.569000Z",
            "edited": "2014-12-20T21:17:50.343000Z",
            "url": "https://swapi.co/api/people/19/"
        },
        {
            "name": "Yoda",
            "height": "66",
            "mass": "17",
            "hair_color": "white",
            "skin_color": "green",
            "eye_color": "brown",
            "birth_year": "896BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/28/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/6/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-15T12:26:01.042000Z",
            "edited": "2014-12-20T21:17:50.345000Z",
            "url": "https://swapi.co/api/people/20/"
        },
        {
            "name": "Palpatine",
            "height": "170",
            "mass": "75",
            "hair_color": "grey",
            "skin_color": "pale",
            "eye_color": "yellow",
            "birth_year": "82BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/8/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-15T12:48:05.971000Z",
            "edited": "2014-12-20T21:17:50.347000Z",
            "url": "https://swapi.co/api/people/21/"
        }
    ]
}

const peoplePage3Mock = {
    "count": 30,
    "next": null,
    "previous": "https://swapi.co/api/people/?page=2",
    "results": [
        {
            "name": "Boba Fett",
            "height": "183",
            "mass": "78.2",
            "hair_color": "black",
            "skin_color": "fair",
            "eye_color": "brown",
            "birth_year": "31.5BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/10/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/21/"
            ],
            "created": "2014-12-15T12:49:32.457000Z",
            "edited": "2014-12-20T21:17:50.349000Z",
            "url": "https://swapi.co/api/people/22/"
        },
        {
            "name": "IG-88",
            "height": "200",
            "mass": "140",
            "hair_color": "none",
            "skin_color": "metal",
            "eye_color": "red",
            "birth_year": "15BBY",
            "gender": "none",
            "homeworld": "https://swapi.co/api/planets/28/",
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "species": [
                "https://swapi.co/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-15T12:51:10.076000Z",
            "edited": "2014-12-20T21:17:50.351000Z",
            "url": "https://swapi.co/api/people/23/"
        },
        {
            "name": "Bossk",
            "height": "190",
            "mass": "113",
            "hair_color": "none",
            "skin_color": "green",
            "eye_color": "red",
            "birth_year": "53BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/29/",
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "species": [
                "https://swapi.co/api/species/7/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-15T12:53:49.297000Z",
            "edited": "2014-12-20T21:17:50.355000Z",
            "url": "https://swapi.co/api/people/24/"
        },
        {
            "name": "Lando Calrissian",
            "height": "177",
            "mass": "79",
            "hair_color": "black",
            "skin_color": "dark",
            "eye_color": "brown",
            "birth_year": "31BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/30/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/10/"
            ],
            "created": "2014-12-15T12:56:32.683000Z",
            "edited": "2014-12-20T21:17:50.357000Z",
            "url": "https://swapi.co/api/people/25/"
        },
        {
            "name": "Lobot",
            "height": "175",
            "mass": "79",
            "hair_color": "none",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "37BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/6/",
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-15T13:01:57.178000Z",
            "edited": "2014-12-20T21:17:50.359000Z",
            "url": "https://swapi.co/api/people/26/"
        },
        {
            "name": "Ackbar",
            "height": "180",
            "mass": "83",
            "hair_color": "none",
            "skin_color": "brown mottle",
            "eye_color": "orange",
            "birth_year": "41BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/31/",
            "films": [
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/7/"
            ],
            "species": [
                "https://swapi.co/api/species/8/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-18T11:07:50.584000Z",
            "edited": "2014-12-20T21:17:50.362000Z",
            "url": "https://swapi.co/api/people/27/"
        },
        {
            "name": "Mon Mothma",
            "height": "150",
            "mass": "unknown",
            "hair_color": "auburn",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "48BBY",
            "gender": "female",
            "homeworld": "https://swapi.co/api/planets/32/",
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-18T11:12:38.895000Z",
            "edited": "2014-12-20T21:17:50.364000Z",
            "url": "https://swapi.co/api/people/28/"
        },
        {
            "name": "Arvel Crynyd",
            "height": "unknown",
            "mass": "unknown",
            "hair_color": "brown",
            "skin_color": "fair",
            "eye_color": "brown",
            "birth_year": "unknown",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/28/",
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/1/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/28/"
            ],
            "created": "2014-12-18T11:16:33.020000Z",
            "edited": "2014-12-20T21:17:50.367000Z",
            "url": "https://swapi.co/api/people/29/"
        },
        {
            "name": "Wicket Systri Warrick",
            "height": "88",
            "mass": "20",
            "hair_color": "brown",
            "skin_color": "brown",
            "eye_color": "brown",
            "birth_year": "8BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/7/",
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/9/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-18T11:21:58.954000Z",
            "edited": "2014-12-20T21:17:50.369000Z",
            "url": "https://swapi.co/api/people/30/"
        },
        {
            "name": "Nien Nunb",
            "height": "160",
            "mass": "68",
            "hair_color": "none",
            "skin_color": "grey",
            "eye_color": "black",
            "birth_year": "unknown",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/33/",
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/10/"
            ],
            "vehicles": [],
            "starships": [
                "https://swapi.co/api/starships/10/"
            ],
            "created": "2014-12-18T11:26:18.541000Z",
            "edited": "2014-12-20T21:17:50.371000Z",
            "url": "https://swapi.co/api/people/31/"
        }
    ]
}

const starShip_12 = {
    "name": "X-wing",
    "model": "T-65 X-wing",
    "manufacturer": "Incom Corporation",
    "cost_in_credits": "149999",
    "length": "12.5",
    "max_atmosphering_speed": "1050",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "110",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "100",
    "starship_class": "Starfighter",
    "pilots": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/9/",
        "https://swapi.co/api/people/18/",
        "https://swapi.co/api/people/19/"
    ],
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-12T11:19:05.340000Z",
    "edited": "2014-12-22T17:35:44.491233Z",
    "url": "https://swapi.co/api/starships/12/"
}

const starShip_22 = {
    "name": "Imperial shuttle",
    "model": "Lambda-class T-4a shuttle",
    "manufacturer": "Sienar Fleet Systems",
    "cost_in_credits": "240000",
    "length": "20",
    "max_atmosphering_speed": "850",
    "crew": "6",
    "passengers": "20",
    "cargo_capacity": "80000",
    "consumables": "2 months",
    "hyperdrive_rating": "1.0",
    "MGLT": "50",
    "starship_class": "Armed government transport",
    "pilots": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/"
    ],
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-15T13:04:47.235000Z",
    "edited": "2014-12-22T17:35:44.795405Z",
    "url": "https://swapi.co/api/starships/22/"
}

const starShip_13 = {
    "name": "TIE Advanced x1",
    "model": "Twin Ion Engine Advanced x1",
    "manufacturer": "Sienar Fleet Systems",
    "cost_in_credits": "unknown",
    "length": "9.2",
    "max_atmosphering_speed": "1200",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "150",
    "consumables": "5 days",
    "hyperdrive_rating": "1.0",
    "MGLT": "105",
    "starship_class": "Starfighter",
    "pilots": [
        "https://swapi.co/api/people/4/"
    ],
    "films": [
        "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-12T11:21:32.991000Z",
    "edited": "2014-12-22T17:35:44.549047Z",
    "url": "https://swapi.co/api/starships/13/"
}

const starShip_48 = {
    "name": "Jedi starfighter",
    "model": "Delta-7 Aethersprite-class interceptor",
    "manufacturer": "Kuat Systems Engineering",
    "cost_in_credits": "180000",
    "length": "8",
    "max_atmosphering_speed": "1150",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "60",
    "consumables": "7 days",
    "hyperdrive_rating": "1.0",
    "MGLT": "unknown",
    "starship_class": "Starfighter",
    "pilots": [
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/58/"
    ],
    "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/6/"
    ],
    "created": "2014-12-20T17:35:23.906000Z",
    "edited": "2014-12-22T17:35:45.147746Z",
    "url": "https://swapi.co/api/starships/48/"
}

const starShip_59 = {
    "name": "Trade Federation cruiser",
    "model": "Providence-class carrier/destroyer",
    "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
    "cost_in_credits": "125000000",
    "length": "1088",
    "max_atmosphering_speed": "1050",
    "crew": "600",
    "passengers": "48247",
    "cargo_capacity": "50000000",
    "consumables": "4 years",
    "hyperdrive_rating": "1.5",
    "MGLT": "unknown",
    "starship_class": "capital ship",
    "pilots": [
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/11/"
    ],
    "films": [
        "https://swapi.co/api/films/6/"
    ],
    "created": "2014-12-20T19:40:21.902000Z",
    "edited": "2014-12-22T17:35:45.195165Z",
    "url": "https://swapi.co/api/starships/59/"
}

const starShip_64 = {
    "name": "Naboo star skiff",
    "model": "J-type star skiff",
    "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
    "cost_in_credits": "unknown",
    "length": "29.2",
    "max_atmosphering_speed": "1050",
    "crew": "3",
    "passengers": "3",
    "cargo_capacity": "unknown",
    "consumables": "unknown",
    "hyperdrive_rating": "0.5",
    "MGLT": "unknown",
    "starship_class": "yacht",
    "pilots": [
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/35/"
    ],
    "films": [
        "https://swapi.co/api/films/6/"
    ],
    "created": "2014-12-20T19:55:15.396000Z",
    "edited": "2014-12-22T17:35:45.258859Z",
    "url": "https://swapi.co/api/starships/64/"
}

const starShip_65 = {
    "name": "Jedi Interceptor",
    "model": "Eta-2 Actis-class light interceptor",
    "manufacturer": "Kuat Systems Engineering",
    "cost_in_credits": "320000",
    "length": "5.47",
    "max_atmosphering_speed": "1500",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "60",
    "consumables": "2 days",
    "hyperdrive_rating": "1.0",
    "MGLT": "unknown",
    "starship_class": "starfighter",
    "pilots": [
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/11/"
    ],
    "films": [
        "https://swapi.co/api/films/6/"
    ],
    "created": "2014-12-20T19:56:57.468000Z",
    "edited": "2014-12-22T17:35:45.272349Z",
    "url": "https://swapi.co/api/starships/65/"
}

const starShip_74 = {
    "name": "Belbullab-22 starfighter",
    "model": "Belbullab-22 starfighter",
    "manufacturer": "Feethan Ottraw Scalable Assemblies",
    "cost_in_credits": "168000",
    "length": "6.71",
    "max_atmosphering_speed": "1100",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "140",
    "consumables": "7 days",
    "hyperdrive_rating": "6",
    "MGLT": "unknown",
    "starship_class": "starfighter",
    "pilots": [
        "https://swapi.co/api/people/10/",
        "https://swapi.co/api/people/79/"
    ],
    "films": [
        "https://swapi.co/api/films/6/"
    ],
    "created": "2014-12-20T20:38:05.031000Z",
    "edited": "2014-12-22T17:35:45.381900Z",
    "url": "https://swapi.co/api/starships/74/"
}

const starShip_39 = {
    "name": "Naboo fighter",
    "model": "N-1 starfighter",
    "manufacturer": "Theed Palace Space Vessel Engineering Corps",
    "cost_in_credits": "200000",
    "length": "11",
    "max_atmosphering_speed": "1100",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "65",
    "consumables": "7 days",
    "hyperdrive_rating": "1.0",
    "MGLT": "unknown",
    "starship_class": "Starfighter",
    "pilots": [
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/35/"
    ],
    "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/"
    ],
    "created": "2014-12-19T17:39:17.582000Z",
    "edited": "2014-12-22T17:35:45.079452Z",
    "url": "https://swapi.co/api/starships/39/"
}

const starShip_10 = {
    "name": "Millennium Falcon",
    "model": "YT-1300 light freighter",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": "100000",
    "length": "34.37",
    "max_atmosphering_speed": "1050",
    "crew": "4",
    "passengers": "6",
    "cargo_capacity": "100000",
    "consumables": "2 months",
    "hyperdrive_rating": "0.5",
    "MGLT": "75",
    "starship_class": "Light freighter",
    "pilots": [
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/14/",
        "https://swapi.co/api/people/25/",
        "https://swapi.co/api/people/31/"
    ],
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/7/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T16:59:45.094000Z",
    "edited": "2014-12-22T17:35:44.464156Z",
    "url": "https://swapi.co/api/starships/10/"
}

const starShip_21 = {
    "name": "Slave 1",
    "model": "Firespray-31-class patrol and attack",
    "manufacturer": "Kuat Systems Engineering",
    "cost_in_credits": "unknown",
    "length": "21.5",
    "max_atmosphering_speed": "1000",
    "crew": "1",
    "passengers": "6",
    "cargo_capacity": "70000",
    "consumables": "1 month",
    "hyperdrive_rating": "3.0",
    "MGLT": "70",
    "starship_class": "Patrol craft",
    "pilots": [
        "https://swapi.co/api/people/22/"
    ],
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/5/"
    ],
    "created": "2014-12-15T13:00:56.332000Z",
    "edited": "2014-12-22T17:35:44.716273Z",
    "url": "https://swapi.co/api/starships/21/"
}

const starShip_28 = {
    "name": "A-wing",
    "model": "RZ-1 A-wing Interceptor",
    "manufacturer": "Alliance Underground Engineering, Incom Corporation",
    "cost_in_credits": "175000",
    "length": "9.6",
    "max_atmosphering_speed": "1300",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "40",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "120",
    "starship_class": "Starfighter",
    "pilots": [
        "https://swapi.co/api/people/29/"
    ],
    "films": [
        "https://swapi.co/api/films/3/"
    ],
    "created": "2014-12-18T11:16:34.542000Z",
    "edited": "2014-12-22T17:35:44.978754Z",
    "url": "https://swapi.co/api/starships/28/"
}



const defaultRoot = {}


beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

it("Render component App", async (done) => {

    window.HTMLElement.prototype.scrollIntoView = function () { };

    const mock = new MockAdapter(axios);

    mock.onGet("/").reply(200, defaultRoot);

    let peopleFirst = JSON.parse(JSON.stringify(peoplePage1Mock))
    mock.onGet(backendURL + "/people").reply(200, peopleFirst);
    mock.onGet(backendURL + "/people?page=1").reply(200, peopleFirst);

    let peopleSecond = JSON.parse(JSON.stringify(peoplePage2Mock))
    mock.onGet(backendURL + "/people?page=2").reply(200, peopleSecond);

    let peopleThird = JSON.parse(JSON.stringify(peoplePage3Mock))
    mock.onGet(backendURL + "/people?page=3").reply(200, peopleThird);

    let starships12 = JSON.parse(JSON.stringify(starShip_12))
    mock.onGet(backendURL + "/starships/12/").reply(200, starships12);

    let starships22 = JSON.parse(JSON.stringify(starShip_22))
    mock.onGet(backendURL + "/starships/22/").reply(200, starships22);

    let starships13 = JSON.parse(JSON.stringify(starShip_13))
    mock.onGet(backendURL + "/starships/13/").reply(200, starships13);

    let starships48 = JSON.parse(JSON.stringify(starShip_48))
    mock.onGet(backendURL + "/starships/48/").reply(200, starships48);

    let starships59 = JSON.parse(JSON.stringify(starShip_59))
    mock.onGet(backendURL + "/starships/59/").reply(200, starships59);

    let starships64 = JSON.parse(JSON.stringify(starShip_64))
    mock.onGet(backendURL + "/starships/64/").reply(200, starships64);

    let starships65 = JSON.parse(JSON.stringify(starShip_65))
    mock.onGet(backendURL + "/starships/65/").reply(200, starships65);

    let starships74 = JSON.parse(JSON.stringify(starShip_74))
    mock.onGet(backendURL + "/starships/74/").reply(200, starships74);

    let starships39 = JSON.parse(JSON.stringify(starShip_39))
    mock.onGet(backendURL + "/starships/39/").reply(200, starships39);

    let starships10 = JSON.parse(JSON.stringify(starShip_10))
    mock.onGet(backendURL + "/starships/10/").reply(200, starships10);

    let starships21 = JSON.parse(JSON.stringify(starShip_21))
    mock.onGet(backendURL + "/starships/21/").reply(200, starships21);

    let starships28 = JSON.parse(JSON.stringify(starShip_28))
    mock.onGet(backendURL + "/starships/28/").reply(200, starships28);

    await act(async () => {
        render(<App />, container);
    });

    setTimeout(async () => {

        expect(container.textContent).toContain("Loading...");

        const itemCharacter = container.querySelector("#divCardItem")
        expect(itemCharacter.textContent).toContain("")   

        done();
    }, 500);

});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});