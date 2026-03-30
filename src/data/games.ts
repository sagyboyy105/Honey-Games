export interface Game {
  id: string;
  title: string;
  developer: string;
  price: number;
  discount?: number;
  rating: number;
  tags: string[];
  image: string;
  banner: string;
  description: string;
  releaseDate: string;
}

export const games: Game[] = [
  {
    id: "cs2",
    title: "Counter-Strike 2",
    developer: "Valve",
    price: 0,
    rating: 4.5,
    tags: ["FPS", "Competitive", "Shooter", "Multiplayer"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop",
    description: "The premier competitive FPS experience. Counter-Strike 2 is the largest technical leap forward in Counter-Strike's history, ensuring new features and updates for years to come.",
    releaseDate: "Sep 27, 2023"
  },
  {
    id: "cp2077",
    title: "Cyberpunk 2077",
    developer: "CD PROJEKT RED",
    price: 59.99,
    discount: 50,
    rating: 4.2,
    tags: ["RPG", "Open World", "Sci-fi", "Action"],
    image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=1920&auto=format&fit=crop",
    description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    releaseDate: "Dec 10, 2020"
  },
  {
    id: "witcher3",
    title: "The Witcher 3: Wild Hunt",
    developer: "CD PROJEKT RED",
    price: 39.99,
    discount: 75,
    rating: 4.9,
    tags: ["RPG", "Open World", "Fantasy", "Story Rich"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1920&auto=format&fit=crop",
    description: "As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
    releaseDate: "May 18, 2015"
  },
  {
    id: "eldenring",
    title: "Elden Ring",
    developer: "FromSoftware Inc.",
    price: 59.99,
    rating: 4.8,
    tags: ["Souls-like", "Dark Fantasy", "RPG", "Open World"],
    image: "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?q=80&w=1920&auto=format&fit=crop",
    description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    releaseDate: "Feb 24, 2022"
  },
  {
    id: "bg3",
    title: "Baldur's Gate 3",
    developer: "Larian Studios",
    price: 59.99,
    rating: 4.9,
    tags: ["RPG", "Choices Matter", "Story Rich", "Turn-Based Combat"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1920&auto=format&fit=crop",
    description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
    releaseDate: "Aug 3, 2023"
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    developer: "Rockstar Games",
    price: 59.99,
    discount: 67,
    rating: 4.8,
    tags: ["Open World", "Story Rich", "Western", "Action"],
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1920&auto=format&fit=crop",
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang.",
    releaseDate: "Dec 5, 2019"
  },
  {
    id: "gta5",
    title: "Grand Theft Auto V",
    developer: "Rockstar North",
    price: 29.99,
    discount: 50,
    rating: 4.7,
    tags: ["Open World", "Action", "Multiplayer", "Crime"],
    image: "https://images.unsplash.com/photo-1605901302636-236b3e778401?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1605901302636-236b3e778401?q=80&w=1920&auto=format&fit=crop",
    description: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld.",
    releaseDate: "Apr 14, 2015"
  },
  {
    id: "hades",
    title: "Hades",
    developer: "Supergiant Games",
    price: 24.99,
    rating: 4.9,
    tags: ["Action", "Roguelike", "Indie", "Great Soundtrack"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop",
    description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion and Transistor.",
    releaseDate: "Sep 17, 2020"
  }
];
