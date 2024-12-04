// serviceArea.ts

export interface ServiceItem {
  image: string;
  cap: string;
}

export interface Area {
  id: string;
  title: string;
  image: string;
  services: ServiceItem[];
  caption: string;
}

export const sector: Area[] = [
  {
    id: "home",
    title: "Home and residence",
    image: "../home.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../solar-b.png", cap: "Solar power" },
      { image: "../waterheater-b.png", cap: "Solar heaters" },
    ],
    caption:
      "Sunpro provides a range of services to enhance your home, including electrical services, decorative lighting, CCTV installation, solar power solutions, and solar water heaters. Benefit from our expertise and improve your home's efficiency and security with our quality installations.",
  },
  {
    id: "office",
    title: "Office and workplace",
    image: "../office1.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../net-b.png", cap: "Networks" },
      { image: "../camera-b.png", cap: "CCTV" },
    ],
    caption:
      "Sunpro offers services to enhance your office, including repositioning sockets for optimal setup, adding decorative lights for ambience, interconnecting computers for resource sharing, and surveillance cameras for security. Experience improved functionality and aesthetics with our professional installations.",
  },
  {
    id: "hotel",
    title: "Hotel and restaurant",
    image: "../hotel1.jpeg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../net-b.png", cap: "Networks" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../solar-b.png", cap: "Solar power" },
      { image: "../waterheater-b.png", cap: "Solar heaters" },
    ],
    caption:
      "Sunpro offers installation, maintenance, and repair services for electrical systems, instant water heaters, decorative lighting, local area networks, surveillance cameras, solar power systems, and solar water heaters. Ensure your customers experience the best facilities in a beautiful environment.",
  },
  {
    id: "hospital",
    title: "Hospital",
    image: "../hospital1.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../net-b.png", cap: "Networks" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../solar-b.png", cap: "Solar power" },
      { image: "../waterheater-b.png", cap: "Solar heaters" },
    ],
    caption:
      "Sunpro provides installation, maintenance, and repair services for electrical systems, instant water heaters, decorative lighting, local area networks, surveillance cameras, solar power systems, and solar water heaters. Enhance your hospital's standards with our expert solutions.",
  },
  {
    id: "shop",
    title: "Shop and service centers",
    image: "../shop.jpeg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../camera-b.png", cap: "CCTV" },
    ],
    caption:
      "Whatever your shop sells or does, Sunpro ensures your electrical systems are reliable, your lighting is beautiful, and you have effective video surveillance. Trust us for top-notch installation, maintenance, and repair services to enhance the safety and ambiance of your shop.",
  },
  {
    id: "supermarket",
    title: "Supermarket and stores",
    image: "../supermarket1.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../net-b.png", cap: "Networks" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../solar-b.png", cap: "Solar power" },
    ],
    caption:
      "Sunpro offers installation, maintenance, and repair services for electrical systems, decorative lighting, local area networks, surveillance cameras, and solar power systems. Enhance your grocery store's security with our surveillance solutions and create a welcoming ambiance with our expert lighting services.",
  },
  {
    id: "farm",
    title: "Farm and ranch",
    image: "../farm2.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../solar-b.png", cap: "Solar power" },
    ],
    caption:
      "Your farm requires a dependable electrical system and effective surveillance. A solar power system ensures consistent energy for irrigation, aeration, incubators, lighting, and other essential operations, enhancing productivity and security for your agricultural needs while promoting sustainability.",
  },
  {
    id: "school",
    title: "School",
    image: "../school3.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../net-b.png", cap: "Networks" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../solar-b.png", cap: "Solar power" },
      { image: "../waterheater-b.png", cap: "Solar heaters" },
    ],
    caption:
      "At Sunpro, we provide essential upgrades for your school, including a robust electrical system, local computer networking, CCTV surveillance system, a scalable solar power system, solar water heaters, and decorative lighting, ensuring a safe and comfortable learning environment for your students.",
  },
  {
    id: "apartment",
    title: "Apartment",
    image: "../apartment2.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../net-b.png", cap: "Networks" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../waterheater-b.png", cap: "Solar heaters" },
    ],
    caption:
      "Contact us for bulk installations of instant water heaters, maintenance of electrical systems, and the setup of solar floodlights and CCTV for enhanced surveillance. Additionally, attract tenants with solar-heated water and a reliable shared internet connection for added convenience.",
  },
  {
    id: "church",
    title: "Church and Worship centers",
    image: "../church.jpg",
    services: [
      { image: "../power-b.png", cap: "Electricals" },
      { image: "../light-b.png", cap: "Lighting" },
      { image: "../net-b.png", cap: "Networks" },
      { image: "../camera-b.png", cap: "CCTV" },
      { image: "../solar-b.png", cap: "Solar power" },
      { image: "../waterheater-b.png", cap: "Solar heaters" },
    ],
    caption:
      "Sunpro offers installation, maintenance, and repair services for electrical systems, instant water heaters, decorative lighting, local area networks, surveillance cameras, solar power systems, and solar water heaters. Enhance your church's ambiance and ensure a comfortable and secure environment for your congregation.",
  },
];
