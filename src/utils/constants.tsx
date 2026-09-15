/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroImage1 from "../assets/discover-hero-picture.avif";
import LagosImage1 from "../assets/lagos-others-image.jpg";
import AbiaImage1 from "../assets/abia-image-1.jpg";
import AbujaImage1 from "../assets/abuja-image-1.jpg";
import OyoImage1 from "../assets/oyo-image1.png";
import KanoImage1 from "../assets/kano-image-1.jpg";
import DeltaImage1 from "../assets/delta-image-1.jpg";
import OsunImage1 from "../assets/osun-image1.webp";
import MajorEventImage1 from "../assets/major-event-1.avif";
import MajorEventPoetry from "../assets/major-event-poetry.jpg";
import MajorEventStreetFood from "../assets/major-event-street-food.jpg";
import MajorEventAfrobeats from "../assets/major-event-afrobeats.jpg";
import MajorEventComedy from "../assets/major-event-comedy.jpg";
import MajorEventFashion from "../assets/major-event-fashion.jpg";
import MajorEventTech from "../assets/major-event-tech-mix.jpg";
import MajorVenueLandmark from "../assets/major-venue-landmark.jpg";
import MajorVenueEko from "../assets/major-venue-eko.jpg";
import MajorVenueHardrock from "../assets/major-venue-hard-rock.jpeg";
import MajorVenueIcc from "../assets/major-event-icc.jpeg";
import MajorVenueMillenium from "../assets/major-venue-millenium.jpg";

export const minimumScreenForMobile = 0;
export const minimumScreenForTab = 768;
export const maximumScreenForTab = 1280;

export const HeroImages: any = {
  default: HeroImage1,
  lagos: LagosImage1,
  abuja: AbujaImage1,
  kano: KanoImage1,
  oyo: OyoImage1,
  delta: DeltaImage1,
  abia: AbiaImage1,
  osun: OsunImage1,
};

export const supportedStates = [
  "Lagos",
  "Abuja",
  "Kano",
  "Abia",
  "Delta",
  "Oyo",
  "Osun",
];

export const featuredList = ["Events", "Venues"];

export const featuredCategories = [
  "All",
  "Music",
  "Beach",
  "Food",
  "Art",
  "Wellness",
  "Fun & Active",
  "Tech",
];

export const testEventsDetails: any = {
  lagos: [
    {
      locationLink:
        "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D",
      location: "Landmark Beach, Victoria Island, Lagos",
      name: "Sippa Social",
      date: "June 26, 2026 - 10:45 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Hard+Rock+Cafe%2C+Victoria+Island%2C+Lagos/@6.4239,3.4474,13z",
      location: "Hard Rock Cafe, Victoria Island, Lagos",
      name: "Acoustic Night & Poetry",
      date: "July 12, 2026 - 8:30 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventPoetry,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Freedom+Park%2C+Lagos+Island%2C+Lagos/@6.4475,3.3934,13z",
      location: "Freedom Park, Lagos Island, Lagos",
      name: "Street Food Tour",
      date: "July 19, 2026 - 12:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventStreetFood,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Muri+Okunola+Park%2C+Victoria+Island%2C+Lagos/@6.4292,3.4357,13z",
      location: "Muri Okunola Park, Victoria Island, Lagos",
      name: "Afro Beats Live Session",
      date: "August 1, 2026 - 7:00 pm.",
      category: "Concerts",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventAfrobeats,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Hard+Rock+Cafe%2C+Victoria+Island%2C+Lagos/@6.4239,3.4474,13z",
      location: "Hard Rock Cafe, Victoria Island, Lagos",
      name: "The Comedy Circuit",
      date: "August 15, 2026 - 6:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: true,
      picture: MajorEventComedy,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Freedom+Park%2C+Lagos+Island%2C+Lagos/@6.4475,3.3934,13z",
      location: "Freedom Park, Lagos Island, Lagos",
      name: "Fashion and Design Runway",
      date: "August 28, 2026 - 3:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventFashion,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Muri+Okunola+Park%2C+Victoria+Island%2C+Lagos/@6.4292,3.4357,13z",
      location: "Muri Okunola Park, Victoria Island, Lagos",
      name: "Tech & Mix Networking Mixer",
      date: "September 5, 2026 - 5:00 pm.",
      category: "Festivals",
      isFeatured: true,
      picture: MajorEventTech,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Hard+Rock+Cafe%2C+Victoria+Island%2C+Lagos/@6.4239,3.4474,13z",
      location: "Hard Rock Cafe, Victoria Island, Lagos",
      name: "Amapiano & Suya Sunset",
      date: "September 20, 2026 - 9:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventStreetFood,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Freedom+Park%2C+Lagos+Island%2C+Lagos/@6.4475,3.3934,13z",
      location: "Freedom Park, Lagos Island, Lagos",
      name: "Traditional Arts & Crafts Expo",
      date: "October 3, 2026 - 10:00 am.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    // {
    //   locationLink:
    //     "https://www.google.com/maps/search/Muri+Okunola+Park%2C+Victoria+Island%2C+Lagos/@6.4292,3.4357,13z",
    //   location: "Muri Okunola Park, Victoria Island, Lagos",
    //   name: "The Great Cookout Fest",
    //   date: "October 17, 2026 - 1:00 pm.",
    //   category: "Food & Drink",
    // categories: ["food"],
    //   isFeatured: false,
    //   picture: MajorEventImage1,
    //   eventPathType: "events",
    // },
  ],
  abuja: [
    {
      locationLink:
        "https://www.google.com/maps/search/Millennium+Park%2C+Maitama%2C+Abuja/@9.0628,7.5025,13z",
      location: "Millennium Park, Maitama, Abuja",
      name: "Vibe & Paint Festival",
      date: "July 4, 2026 - 4:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Central+Park%2C+Garki%2C+Abuja/@9.0272,7.4839,13z",
      location: "Central Park, Garki, Abuja",
      name: "Acoustic Night & Poetry",
      date: "July 12, 2026 - 8:30 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventPoetry,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/The+Capital+Hub%2C+Banex%2C+Abuja/@9.0831,7.4611,13z",
      location: "The Capital Hub, Banex, Abuja",
      name: "Street Food Tour",
      date: "July 19, 2026 - 12:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventStreetFood,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Millennium+Park%2C+Maitama%2C+Abuja/@9.0628,7.5025,13z",
      location: "Millennium Park, Maitama, Abuja",
      name: "Afro Beats Live Session",
      date: "August 1, 2026 - 7:00 pm.",
      category: "Concerts",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventAfrobeats,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Central+Park%2C+Garki%2C+Abuja/@9.0272,7.4839,13z",
      location: "Central Park, Garki, Abuja",
      name: "The Comedy Circuit",
      date: "August 15, 2026 - 6:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: true,
      picture: MajorEventComedy,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/The+Capital+Hub%2C+Banex%2C+Abuja/@9.0831,7.4611,13z",
      location: "The Capital Hub, Banex, Abuja",
      name: "Fashion and Design Runway",
      date: "August 28, 2026 - 3:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventFashion,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Millennium+Park%2C+Maitama%2C+Abuja/@9.0628,7.5025,13z",
      location: "Millennium Park, Maitama, Abuja",
      name: "Tech & Mix Networking Mixer",
      date: "September 5, 2026 - 5:00 pm.",
      category: "Festivals",
      isFeatured: false,
      picture: MajorEventTech,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Central+Park%2C+Garki%2C+Abuja/@9.0272,7.4839,13z",
      location: "Central Park, Garki, Abuja",
      name: "Amapiano & Suya Sunset",
      date: "September 20, 2026 - 9:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventStreetFood,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/The+Capital+Hub%2C+Banex%2C+Abuja/@9.0831,7.4611,13z",
      location: "The Capital Hub, Banex, Abuja",
      name: "Traditional Arts & Crafts Expo",
      date: "October 3, 2026 - 10:00 am.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    // {
    //   locationLink:
    //     "https://www.google.com/maps/search/Millennium+Park%2C+Maitama%2C+Abuja/@9.0628,7.5025,13z",
    //   location: "Millennium Park, Maitama, Abuja",
    //   name: "The Great Cookout Fest",
    //   date: "October 17, 2026 - 1:00 pm.",
    //   category: "Food & Drink",
    // categories: ["food"],
    //   isFeatured: false,
    //   picture: MajorEventImage1,
    //   eventPathType: "events",
    // },
  ],
  kano: [
    {
      locationLink:
        "https://www.google.com/maps/search/Ado+Bayero+Mall%2C+Zoo+Road%2C+Kano/@11.9682,8.5414,13z",
      location: "Ado Bayero Mall, Zoo Road, Kano",
      name: "Vibe & Paint Festival",
      date: "July 4, 2026 - 4:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Gidan+Makama+Museum%2C+Kano/@11.9937,8.5323,13z",
      location: "Gidan Makama Museum, Kano",
      name: "Acoustic Night & Poetry",
      date: "July 12, 2026 - 8:30 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventPoetry,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Bristol+Palace+Hotel%2C+Farm+Centre%2C+Kano/@11.9754,8.5492,13z",
      location: "Bristol Palace Hotel, Farm Centre, Kano",
      name: "Street Food Tour",
      date: "July 19, 2026 - 12:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ado+Bayero+Mall%2C+Zoo+Road%2C+Kano/@11.9682,8.5414,13z",
      location: "Ado Bayero Mall, Zoo Road, Kano",
      name: "Afro Beats Live Session",
      date: "August 1, 2026 - 7:00 pm.",
      category: "Concerts",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Gidan+Makama+Museum%2C+Kano/@11.9937,8.5323,13z",
      location: "Gidan Makama Museum, Kano",
      name: "The Comedy Circuit",
      date: "August 15, 2026 - 6:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Bristol+Palace+Hotel%2C+Farm+Centre%2C+Kano/@11.9754,8.5492,13z",
      location: "Bristol Palace Hotel, Farm Centre, Kano",
      name: "Fashion and Design Runway",
      date: "August 28, 2026 - 3:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ado+Bayero+Mall%2C+Zoo+Road%2C+Kano/@11.9682,8.5414,13z",
      location: "Ado Bayero Mall, Zoo Road, Kano",
      name: "Tech & Mix Networking Mixer",
      date: "September 5, 2026 - 5:00 pm.",
      category: "Festivals",
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Gidan+Makama+Museum%2C+Kano/@11.9937,8.5323,13z",
      location: "Gidan Makama Museum, Kano",
      name: "Amapiano & Suya Sunset",
      date: "September 20, 2026 - 9:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Bristol+Palace+Hotel%2C+Farm+Centre%2C+Kano/@11.9754,8.5492,13z",
      location: "Bristol Palace Hotel, Farm Centre, Kano",
      name: "Traditional Arts & Crafts Expo",
      date: "October 3, 2026 - 10:00 am.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ado+Bayero+Mall%2C+Zoo+Road%2C+Kano/@11.9682,8.5414,13z",
      location: "Ado Bayero Mall, Zoo Road, Kano",
      name: "The Great Cookout Fest",
      date: "October 17, 2026 - 1:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
  ],
  abia: [
    {
      locationLink:
        "https://www.google.com/maps/search/Abia+Tower+Viewpoint%2C+Umuahia%2C+Abia/@5.5312,7.4921,13z",
      location: "Abia Tower Viewpoint, Umuahia, Abia",
      name: "Vibe & Paint Festival",
      date: "July 4, 2026 - 4:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/De+Latinos+Lounge%2C+Aba%2C+Abia/@5.1189,7.3614,13z",
      location: "De Latinos Lounge, Aba, Abia",
      name: "Acoustic Night & Poetry",
      date: "July 12, 2026 - 8:30 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventPoetry,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/El-Dorado+Hotel%2C+Aba%2C+Abia/@5.1098,7.3524,13z",
      location: "El-Dorado Hotel, Aba, Abia",
      name: "Street Food Tour",
      date: "July 19, 2026 - 12:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Abia+Tower+Viewpoint%2C+Umuahia%2C+Abia/@5.5312,7.4921,13z",
      location: "Abia Tower Viewpoint, Umuahia, Abia",
      name: "Afro Beats Live Session",
      date: "August 1, 2026 - 7:00 pm.",
      category: "Concerts",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/De+Latinos+Lounge%2C+Aba%2C+Abia/@5.1189,7.3614,13z",
      location: "De Latinos Lounge, Aba, Abia",
      name: "The Comedy Circuit",
      date: "August 15, 2026 - 6:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/El-Dorado+Hotel%2C+Aba%2C+Abia/@5.1098,7.3524,13z",
      location: "El-Dorado Hotel, Aba, Abia",
      name: "Fashion and Design Runway",
      date: "August 28, 2026 - 3:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Abia+Tower+Viewpoint%2C+Umuahia%2C+Abia/@5.5312,7.4921,13z",
      location: "Abia Tower Viewpoint, Umuahia, Abia",
      name: "Tech & Mix Networking Mixer",
      date: "September 5, 2026 - 5:00 pm.",
      category: "Festivals",
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/De+Latinos+Lounge%2C+Aba%2C+Abia/@5.1189,7.3614,13z",
      location: "De Latinos Lounge, Aba, Abia",
      name: "Amapiano & Suya Sunset",
      date: "September 20, 2026 - 9:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/El-Dorado+Hotel%2C+Aba%2C+Abia/@5.1098,7.3524,13z",
      location: "El-Dorado Hotel, Aba, Abia",
      name: "Traditional Arts & Crafts Expo",
      date: "October 3, 2026 - 10:00 am.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Abia+Tower+Viewpoint%2C+Umuahia%2C+Abia/@5.5312,7.4921,13z",
      location: "Abia Tower Viewpoint, Umuahia, Abia",
      name: "The Great Cookout Fest",
      date: "October 17, 2026 - 1:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
  ],
  delta: [
    {
      locationLink:
        "https://www.google.com/maps/search/Lander+Brothers+Anchorage%2C+Asaba%2C+Delta/@6.2081,6.7412,13z",
      location: "Lander Brothers Anchorage, Asaba, Delta",
      name: "Vibe & Paint Festival",
      date: "July 4, 2026 - 4:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Delta+Mall%2C+Effurun%2C+Warri%2C+Delta/@5.5532,5.7741,13z",
      location: "Delta Mall, Effurun, Warri, Delta",
      name: "Acoustic Night & Poetry",
      date: "July 12, 2026 - 8:30 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventPoetry,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Rodinia+Hotel%2C+Asaba%2C+Delta/@6.1989,6.7289,13z",
      location: "Rodinia Hotel, Asaba, Delta",
      name: "Street Food Tour",
      date: "July 19, 2026 - 12:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Lander+Brothers+Anchorage%2C+Asaba%2C+Delta/@6.2081,6.7412,13z",
      location: "Lander Brothers Anchorage, Asaba, Delta",
      name: "Afro Beats Live Session",
      date: "August 1, 2026 - 7:00 pm.",
      category: "Concerts",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Delta+Mall%2C+Effurun%2C+Warri%2C+Delta/@5.5532,5.7741,13z",
      location: "Delta Mall, Effurun, Warri, Delta",
      name: "The Comedy Circuit",
      date: "August 15, 2026 - 6:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Rodinia+Hotel%2C+Asaba%2C+Delta/@6.1989,6.7289,13z",
      location: "Rodinia Hotel, Asaba, Delta",
      name: "Fashion and Design Runway",
      date: "August 28, 2026 - 3:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Lander+Brothers+Anchorage%2C+Asaba%2C+Delta/@6.2081,6.7412,13z",
      location: "Lander Brothers Anchorage, Asaba, Delta",
      name: "Tech & Mix Networking Mixer",
      date: "September 5, 2026 - 5:00 pm.",
      category: "Festivals",
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Delta+Mall%2C+Effurun%2C+Warri%2C+Delta/@5.5532,5.7741,13z",
      location: "Delta Mall, Effurun, Warri, Delta",
      name: "Amapiano & Suya Sunset",
      date: "September 20, 2026 - 9:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Rodinia+Hotel%2C+Asaba%2C+Delta/@6.1989,6.7289,13z",
      location: "Rodinia Hotel, Asaba, Delta",
      name: "Traditional Arts & Crafts Expo",
      date: "October 3, 2026 - 10:00 am.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Lander+Brothers+Anchorage%2C+Asaba%2C+Delta/@6.2081,6.7412,13z",
      location: "Lander Brothers Anchorage, Asaba, Delta",
      name: "The Great Cookout Fest",
      date: "October 17, 2026 - 1:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
  ],
  oyo: [
    {
      locationLink:
        "https://www.google.com/maps/search/Agodi+Gardens%2C+Parliament+Road%2C+Ibadan%2C+Oyo/@7.4082,3.9054,13z",
      location: "Agodi Gardens, Parliament Road, Ibadan, Oyo",
      name: "Vibe & Paint Festival",
      date: "July 4, 2026 - 4:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ibadan+Recreation+Club%2C+Ibadan%2C+Oyo/@7.3998,3.8821,13z",
      location: "Ibadan Recreation Club, Ibadan, Oyo",
      name: "Acoustic Night & Poetry",
      date: "July 12, 2026 - 8:30 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventPoetry,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ventura+Mall%2C+Samonda%2C+Ibadan%2C+Oyo/@7.4244,3.8967,13z",
      location: "Ventura Mall, Samonda, Ibadan, Oyo",
      name: "Street Food Tour",
      date: "July 19, 2026 - 12:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Agodi+Gardens%2C+Parliament+Road%2C+Ibadan%2C+Oyo/@7.4082,3.9054,13z",
      location: "Agodi Gardens, Parliament Road, Ibadan, Oyo",
      name: "Afro Beats Live Session",
      date: "August 1, 2026 - 7:00 pm.",
      category: "Concerts",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ibadan+Recreation+Club%2C+Ibadan%2C+Oyo/@7.3998,3.8821,13z",
      location: "Ibadan Recreation Club, Ibadan, Oyo",
      name: "The Comedy Circuit",
      date: "August 15, 2026 - 6:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ventura+Mall%2C+Samonda%2C+Ibadan%2C+Oyo/@7.4244,3.8967,13z",
      location: "Ventura Mall, Samonda, Ibadan, Oyo",
      name: "Fashion and Design Runway",
      date: "August 28, 2026 - 3:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Agodi+Gardens%2C+Parliament+Road%2C+Ibadan%2C+Oyo/@7.4082,3.9054,13z",
      location: "Agodi Gardens, Parliament Road, Ibadan, Oyo",
      name: "Tech & Mix Networking Mixer",
      date: "September 5, 2026 - 5:00 pm.",
      category: "Festivals",
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ibadan+Recreation+Club%2C+Ibadan%2C+Oyo/@7.3998,3.8821,13z",
      location: "Ibadan Recreation Club, Ibadan, Oyo",
      name: "Amapiano & Suya Sunset",
      date: "September 20, 2026 - 9:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Ventura+Mall%2C+Samonda%2C+Ibadan%2C+Oyo/@7.4244,3.8967,13z",
      location: "Ventura Mall, Samonda, Ibadan, Oyo",
      name: "Traditional Arts & Crafts Expo",
      date: "October 3, 2026 - 10:00 am.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Agodi+Gardens%2C+Parliament+Road%2C+Ibadan%2C+Oyo/@7.4082,3.9054,13z",
      location: "Agodi Gardens, Parliament Road, Ibadan, Oyo",
      name: "The Great Cookout Fest",
      date: "October 17, 2026 - 1:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
  ],
  osun: [
    {
      locationLink:
        "https://www.google.com/maps/search/Oshogbo+Sacred+Grove%2C+Osogbo%2C+Osun/@7.7554,4.5582,13z",
      location: "Oshogbo Sacred Grove, Osogbo, Osun",
      name: "Vibe & Paint Festival",
      date: "July 4, 2026 - 4:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Nike+Art+Centre%2C+Osogbo%2C+Osun/@7.7711,4.5612,13z",
      location: "Nike Art Centre, Osogbo, Osun",
      name: "Acoustic Night & Poetry",
      date: "July 12, 2026 - 8:30 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventPoetry,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Obafemi+Awolowo+University+Amphitheatre%2C+Ile-Ife%2C+Osun/@7.5255,4.5244,13z",
      location: "Obafemi Awolowo University Amphitheatre, Ile-Ife, Osun",
      name: "Street Food Tour",
      date: "July 19, 2026 - 12:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Oshogbo+Sacred+Grove%2C+Osogbo%2C+Osun/@7.7554,4.5582,13z",
      location: "Oshogbo Sacred Grove, Osogbo, Osun",
      name: "Afro Beats Live Session",
      date: "August 1, 2026 - 7:00 pm.",
      category: "Concerts",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Nike+Art+Centre%2C+Osogbo%2C+Osun/@7.7711,4.5612,13z",
      location: "Nike Art Centre, Osogbo, Osun",
      name: "The Comedy Circuit",
      date: "August 15, 2026 - 6:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Obafemi+Awolowo+University+Amphitheatre%2C+Ile-Ife%2C+Osun/@7.5255,4.5244,13z",
      location: "Obafemi Awolowo University Amphitheatre, Ile-Ife, Osun",
      name: "Fashion and Design Runway",
      date: "August 28, 2026 - 3:00 pm.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: false,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Oshogbo+Sacred+Grove%2C+Osogbo%2C+Osun/@7.7554,4.5582,13z",
      location: "Oshogbo Sacred Grove, Osogbo, Osun",
      name: "Tech & Mix Networking Mixer",
      date: "September 5, 2026 - 5:00 pm.",
      category: "Festivals",
      isFeatured: false,
      picture: MajorEventTech,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Nike+Art+Centre%2C+Osogbo%2C+Osun/@7.7711,4.5612,13z",
      location: "Nike Art Centre, Osogbo, Osun",
      name: "Amapiano & Suya Sunset",
      date: "September 20, 2026 - 9:00 pm.",
      category: "Nightlife",
      categories: ["music"],
      isFeatured: false,
      picture: MajorEventStreetFood,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Obafemi+Awolowo+University+Amphitheatre%2C+Ile-Ife%2C+Osun/@7.5255,4.5244,13z",
      location: "Obafemi Awolowo University Amphitheatre, Ile-Ife, Osun",
      name: "Traditional Arts & Crafts Expo",
      date: "October 3, 2026 - 10:00 am.",
      category: "Concerts",
      categories: ["art"],
      isFeatured: true,
      picture: MajorEventImage1,
      eventPathType: "events",
    },
    {
      locationLink:
        "https://www.google.com/maps/search/Oshogbo+Sacred+Grove%2C+Osogbo%2C+Osun/@7.7554,4.5582,13z",
      location: "Oshogbo Sacred Grove, Osogbo, Osun",
      name: "The Great Cookout Fest",
      date: "October 17, 2026 - 1:00 pm.",
      category: "Food & Drink",
      categories: ["food"],
      isFeatured: false,
      picture: MajorEventStreetFood,
      eventPathType: "events",
    },
  ],
};

export const testVenuesDetails: any = {
  lagos: [
    {
      name: "Landmark Beach",
      location: "Water Corp., Victoria Island, Lagos",
      locationLink:
        "https://www.google.com/maps/search/Landmark+Beach+Landmark+Village+4+Water+Corporation+Dr+Victoria+Island,+Lagos+106104,+Lagos/@6.422201,3.445722,12z",
      category: "Beach & Lounge",
      capacity: "5,000+",
      picture: MajorVenueLandmark,
      isFeatured: true,
      venuePathType: "venues",
      date: "Mon - Sun. 10am - 12am",
    },
    {
      name: "Eko Hotels & Suites",
      location: "Ademola St, Victoria Island, Lagos",
      locationLink:
        "https://www.google.com/maps/search/Eko+Hotels+And+Suites+Victoria+Island+Lagos/@6.4267,3.4301,15z",
      category: "Convention Center",
      capacity: "10,000",
      picture: MajorVenueEko,
      isFeatured: true,
      venuePathType: "venues",
      date: "Mon - Sun. 10am - 12am",
    },
    {
      name: "Hard Rock Cafe",
      location: "Water Corp. Rd, Victoria Island, Lagos",
      locationLink:
        "https://www.google.com/maps/search/Hard+Rock+Cafe+Lagos/@6.4228,3.4431,15z",
      category: "Restaurant & Bar",
      capacity: "800",
      picture: MajorVenueHardrock,
      isFeatured: false,
      venuePathType: "venues",
      date: "Mon - Sun. 10am - 12am",
    },
  ],
  abuja: [
    {
      name: "ICC",
      location: "11 Herbert Macaulay Way,  Abuja",
      locationLink:
        "https://www.google.com/maps/search/International+Conference+Centre+Abuja/@9.0531,7.4912,15z",
      category: "Convention Center",
      capacity: "5,000",
      picture: MajorVenueIcc,
      isFeatured: true,
      venuePathType: "venues",
      date: "Mon - Sun. 10am - 12am",
    },
    {
      name: "Millennium Park",
      location: "Three Arms Zone, Maitama, Abuja",
      locationLink:
        "https://www.google.com/maps/search/Millennium+Park+Maitama+Abuja/@9.0623,7.5023,15z",
      category: "Open-Air Park",
      capacity: "10,000+",
      picture: MajorVenueMillenium,
      isFeatured: true,
      venuePathType: "venues",
      date: "Mon - Sun. 10am - 12am",
    },
  ],
  kano: [],
  abia: [],
  delta: [],
  oyo: [],
  osun: [],
};
