import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas = [

    {

    adult: false,

    backdrop_path: '/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg',

    genre_ids: [14, 12, 28],

    id: 338953,

    original_language: 'en',

    original_title: 'Fantastic Beasts: The Secrets of Dumbledore',

    overview:

    // eslint-disable-next-line max-len

    "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",

    popularity: 8869.117,

    poster_path: '/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg',

    release_date: '2022-04-06',

    title: 'Fantastic Beasts: The Secrets of Dumbledore',

    video: false,

    vote_average: 6.8,

    vote_count: 1363,

    },

    {

    adult: false,

    backdrop_path: '/gG9fTyDL03fiKnOpf2tr01sncnt.jpg',

    genre_ids: [28, 878, 14],

    id: 526896,

    original_language: 'en',

    original_title: 'Morbius',

    overview:

    // eslint-disable-next-line max-len

    'Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.',

    popularity: 4352.537,

    poster_path: '/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',

    release_date: '2022-03-30',

    title: 'Morbius',

    video: false,

    vote_average: 6.4,

    vote_count: 1386,

    },

    {

    adult: false,

    backdrop_path: '/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg',

    genre_ids: [28, 12, 35, 10749],

    id: 752623,

    original_language: 'en',

    original_title: 'The Lost City',

    overview:

    'A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.',

    popularity: 3951.654,

    poster_path: '/neMZH82Stu91d3iqvLdNQfqPPyl.jpg',

    release_date: '2022-03-24',

    title: 'The Lost City',

    video: false,

    vote_average: 6.7,

    vote_count: 940,

    },

    {

    adult: false,

    backdrop_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',

    genre_ids: [28, 14, 35, 10751, 12, 878],

    id: 675353,

    original_language: 'en',

    original_title: 'Sonic the Hedgehog 2',

    overview:

    'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',

    popularity: 3847.383,

    poster_path: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',

    release_date: '2022-03-30',

    title: 'Sonic the Hedgehog 2',

    video: false,

    vote_average: 7.7,

    vote_count: 1819,

    },

    {

    adult: false,

    backdrop_path: '/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg',

    genre_ids: [28, 53, 80],

    id: 818397,

    original_language: 'en',

    original_title: 'Memory',

    overview:

    "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",

    popularity: 3785.216,

    poster_path: '/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg',

    release_date: '2022-04-28',

    title: 'Memory',

    video: false,

    vote_average: 7.3,

    vote_count: 193,

    },

    {

    adult: false,

    backdrop_path: '/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg',

    genre_ids: [28, 12, 14],

    id: 639933,

    original_language: 'en',

    original_title: 'The Northman',

    overview:

    "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",

    popularity: 2973.84,

    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',

    release_date: '2022-04-07',

    title: 'The Northman',

    video: false,

    vote_average: 7.3,

    vote_count: 1306,

    },

    {

    adult: false,

    backdrop_path: '/6tZeX0gvlPzHU8phHuiZD8Gsa11.jpg',

    genre_ids: [14, 28, 12],

    id: 453395,

    original_language: 'en',

    original_title: 'Doctor Strange in the Multiverse of Madness',

    overview:

    'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',

    popularity: 2405.671,

    poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',

    release_date: '2022-05-04',

    title: 'Doctor Strange in the Multiverse of Madness',

    video: false,

    vote_average: 7.4,

    vote_count: 2073,

    },

    {

    adult: false,

    backdrop_path: '/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg',

    genre_ids: [28, 12],

    id: 335787,

    original_language: 'en',

    original_title: 'Uncharted',

    overview:

    'A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.',

    popularity: 2306.305,

    poster_path: '/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg',

    release_date: '2022-02-10',

    title: 'Uncharted',

    video: false,

    vote_average: 7.2,

    vote_count: 2242,

    },

    {

    adult: false,

    backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',

    genre_ids: [28, 12, 878],

    id: 634649,

    original_language: 'en',

    original_title: 'Spider-Man: No Way Home',

    overview:

    'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',

    popularity: 2272.763,

    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',

    release_date: '2021-12-15',

    title: 'Spider-Man: No Way Home',

    video: false,

    vote_average: 8.1,

    vote_count: 13224,

    },

    {

    adult: false,

    backdrop_path: '/xHrp2pq73oi9D64xigPjWW1wcz1.jpg',

    genre_ids: [80, 9648, 53],

    id: 414906,

    original_language: 'en',

    original_title: 'The Batman',

    overview:

    'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',

    popularity: 2210.119,

    poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',

    release_date: '2022-03-01',

    title: 'The Batman',

    video: false,

    vote_average: 7.8,

    vote_count: 4943,

    },

    {

    adult: false,

    backdrop_path: '/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg',

    genre_ids: [28, 53, 80],

    id: 864116,

    original_language: 'en',

    original_title: 'A Day to Die',

    overview:

    "A disgraced parole officer is indebted to a local gang leader and forced to pull off a series of dangerous drug heists within twelve hours in order to pay the $2 million dollars he owes, rescue his kidnapped pregnant wife, and settle a score with the city's corrupt police chief, who is working with the gang leader and double-crossed him years ago.",

    popularity: 1812.82,

    poster_path: '/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg',

    release_date: '2022-03-04',

    title: 'A Day to Die',

    video: false,

    vote_average: 5.8,

    vote_count: 41,

    },

    {

    adult: false,

    backdrop_path: '/figlwUsXXFehX3IebdjqNLV6vWk.jpg',

    genre_ids: [28, 53],

    id: 628900,

    original_language: 'en',

    original_title: 'The Contractor',

    overview:

    'After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.',

    popularity: 1692.358,

    poster_path: '/rJPGPZ5soaG27MK90oKpioSiJE2.jpg',

    release_date: '2022-03-10',

    title: 'The Contractor',

    video: false,

    vote_average: 6.6,

    vote_count: 274,

    },

    {

    adult: false,

    backdrop_path: '/9hk5iiycq7ukRAAXQiJT9HZX3SX.jpg',

    genre_ids: [878, 28, 12, 53],

    id: 507086,

    original_language: 'en',

    original_title: 'Jurassic World Dominion',

    overview:

    'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',

    popularity: 1686.367,

    poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',

    release_date: '2022-06-01',

    title: 'Jurassic World Dominion',

    video: false,

    vote_average: 6.8,

    vote_count: 48,

    },

    ];

  constructor() { }

  ngOnInit(): void {
  }

}