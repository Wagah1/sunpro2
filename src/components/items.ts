export interface Item {
  id: string;
  title: string;
  cap: string;
  priceDetails: {
    desc: string;
    price: number;
  }[];
}

export const items = [
  {
    imgSrc: "../power-play.jpg",
    title: "PowerPlay Pro",
    details: "A 600W inverter and 800Wh Lithium ion battery combo",
    priceDetails: [
      { desc: "PowerPlay Pro", price: 63000 },
      { desc: "With lighting kit", price: 69200 },
      { desc: "With two 220W solar panels", price: 79500 },
    ],
    id: "powerplay",
    cap: "This system is ideal for up to a one-bedroom house. It can run your TV, lights, WiFi router, and other small appliances. It is not ideal for any heating appliances. The cost also caters for all accessories and installation fees",
  },
  {
    imgSrc: "../home-8k.jpg",
    title: "Home 8000",
    details:
      "3.3kW inverter, 2.56kWh Lithium ion battery, and four 450W solar panels",
    priceDetails: [
      {
        desc: "Inverter, one battery, & four panels",
        price: 227000,
      },
      {
        desc: "Inverter, two batteries, & six panels",
        price: 338000,
      },
      {
        desc: "Inverter, two batteries, & eight panels",
        price: 371000,
      },
    ],
    id: "home8000",
    cap: "This system is ideal for up to a two-bedroom house. It can run your TV, fridge, lights, WiFi router, and other small appliances. It is not ideal for any heating appliances. The cost also caters for all accessories and installation fees",
  },
  {
    imgSrc: "../3kVA.jpg",
    title: "3kVA complete kit",
    details: "3kW inverter, two 12V200Ah batteries, and four 450W panels",
    priceDetails: [
      { desc: "With Flooded batteries", price: 205000 },
      { desc: "With Gel batteries", price: 215000 },
      { desc: "With Lithium ion batteries", price: 245000 },
    ],
    id: "3kva",
    cap: "This system is ideal for up to a two-bedroom house. It can run your TV, fridge, lights, WiFi router, and other small appliances. It is not ideal for any heating appliances. The cost also caters for all accessories and installation fees",
  },
  {
    imgSrc: "../5kVA.jpg",
    title: "5kVA complete kit",
    details: "5kW inverter, four 12V200Ah batteries, and eight 450W panels",
    priceDetails: [
      { desc: "With Flooded batteries", price: 390000 },
      { desc: "With Gel batteries", price: 410000 },
      { desc: "With Lithium ion batteries", price: 550000 },
    ],
    id: "5kva",
    cap: "This system is ideal for up to a four-bedroom house. It can run your TV, fridge, freezer, washing machine, iron box, microwave oven, blender, electric kettle, lights, WiFi router, and other small appliances. It is not ideal for instant water heaters / electric shower. The cost also caters for all accessories and installation fees",
  },
  {
    imgSrc: "../10kVA.jpg",
    title: "10kVA complete kit",
    details: "10kW inverter, 10kWh battery pack, and 16 - 450W panels",
    priceDetails: [
      { desc: "With Flooded batteries", price: 750000 },
      { desc: "With Gel batteries", price: 850000 },
      { desc: "With Lithium ion batteries", price: 999000 },
    ],
    id: "10kva",
    cap: "This system is ideal for a 4+ bedroom house. It can run your TV, fridge, freezer, washing machine, iron box, microwave oven, blender, electric kettle, air-fryer, induction cooker, lights, WiFi router, and other small appliances. We recommend coupling it with a solar water heating system to avoid excessive heating costs. The cost also caters all accessories and installation fees",
  },
];
