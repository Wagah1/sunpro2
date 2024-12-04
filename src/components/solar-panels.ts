export interface Panel {
  name: string;
  Voc: string;
  Isc: string;
  price: number;
  id: string;
  datasheet: string;
}

export const solarPanels = [
  {
    imgSrc: "../felicity400.jpg",
    name: "Felicity 540W",
    Voc: "49.55V",
    Isc: "13.89A",
    price: 20999,
    id: "felicity540",
    datasheet:
      "https://www.felicitysolar.com/u_file/2311/08/file/540WSolarPanel.pdf",
  },
  {
    imgSrc: "../felicity400.jpg",
    name: "Felicity 450W",
    Voc: "46V",
    Isc: "12.2A",
    price: 19999,
    id: "felicity450",
    datasheet:
      "https://www.felicitysolar.com/u_file/2311/08/file/450WSolarPanel.pdf",
  },
  {
    imgSrc: "../felicity400.jpg",
    name: "Felicity 400W",
    Voc: "41V",
    Isc: "12.2A",
    price: 18999,
    id: "felicity400",
    datasheet:
      "https://www.felicitysolar.com/u_file/2311/08/file/450WSolarPanel.pdf",
  },
  {
    imgSrc: "../sevenss.jpg",
    name: "Seven SS Stars 550W",
    Voc: "n/a",
    Isc: "n/a",
    price: 20999,
    id: "sevenss550",
    datasheet: "n/a",
  },
  {
    imgSrc: "../sevenss.jpg",
    name: "Seven SS Stars 450W",
    Voc: "n/a",
    Isc: "n/a",
    price: 16999,
    id: "sevenss450",
    datasheet: "n/a",
  },
  {
    imgSrc: "../sevenss.jpg",
    name: "Seven SS Stars 450W",
    Voc: "n/a",
    Isc: "n/a",
    price: 14999,
    id: "sevenss300",
    datasheet: "n/a",
  },
  {
    imgSrc: "../jinko625.jpg",
    name: "Jinko TigerNeo 625W",
    Voc: "55.7V",
    Isc: "14.32A",
    price: 23499,
    id: "jinko625",
    datasheet:
      "https://jinkosolar.com.au/wp-content/uploads/2022/08/JKM620-625N-78HL4-V.pdf",
  },
  {
    imgSrc: "../jinko625.jpg",
    name: "Jinko TigerNeo 575W",
    Voc: "50.88V",
    Isc: "14.39A",
    price: 22499,
    id: "jinko575",
    datasheet:
      "https://www.jinkosolar.com/uploads/619f4244/JKM555-575N-72HL4-(V)-F1-EN.pdf",
  },
  {
    imgSrc: "../jinko560.png",
    name: "Jinko TigerNeo 560W",
    Voc: "50.67V",
    Isc: "14.13A",
    price: 21499,
    id: "jinko560",
    datasheet:
      "https://www.jinkosolar.com/uploads/619f40ec/JKM550-570N-72HL4-BDV-F1-EN.pdf",
  },
  {
    imgSrc: "../jinko560.png",
    name: "Jinko TigerNeo 550W",
    Voc: "50.27V",
    Isc: "14.01A",
    price: 20499,
    id: "jinko550",
    datasheet:
      "https://www.jinkosolar.com/uploads/619f40ec/JKM550-570N-72HL4-BDV-F1-EN.pdf",
  },
  {
    imgSrc: "../jinko560.png",
    name: "Jinko TigerNeo 470W",
    Voc: "52.1V",
    Isc: "11.68A",
    price: 19499,
    id: "jinko470",
    datasheet:
      "https://www.jinkosolar.com/uploads/TR%20JKM450-470N-7RL3-(V)-A1-EN.pdf",
  },
  {
    imgSrc: "../jinko560.png",
    name: "Jinko TigerNeo 460W",
    Voc: "51.7V",
    Isc: "11.5A",
    price: 18499,
    id: "jinko460",
    datasheet:
      "https://www.jinkosolar.com/uploads/TR%20JKM450-470N-7RL3-(V)-A1-EN.pdf",
  },
  {
    imgSrc: "../jinko560.png",
    name: "Jinko Cheetah Plus 435W",
    Voc: "51.61V",
    Isc: "10.67A",
    price: 17499,
    id: "jinko435",
    datasheet:
      "https://www.jinkosolar.com/uploads/Cheetah%20Plus%20JKM425-445M-78H-D1.2-EN-F35.pdf",
  },
  {
    imgSrc: "../jinko625.jpg",
    name: "Jinko Swan 405W",
    Voc: "48.45V",
    Isc: "10.42A",
    price: 16999,
    id: "jinko405",
    datasheet:
      "https://www.jinkosolar.com/uploads/5ed73333/SWAN%20JKM385-405M-72H-TV-A3,1(2)-EN-F30.pdf",
  },
  {
    imgSrc: "../jinko390.jpeg",
    name: "Jinko Cheetah plus 390W",
    Voc: "39.3V",
    Isc: "10.12A",
    price: 16499,
    id: "jinko390",
    datasheet:
      "https://www.jinkosolar.com/uploads/CheetahPerc%20JKM390-410M-72H-(V)-A3-EN.pdf",
  },
  {
    imgSrc: "../jinko625.jpg",
    name: "Jinko Cheetah plus 370W",
    Voc: "43.75V",
    Isc: "10.73A",
    price: 15499,
    id: "jinko370",
    datasheet:
      "https://jinkosolar.com.au/wp-content/uploads/2020/03/JKM350-370M-66HB-A1-EN-ForAUSCEC-1.pdf",
  },
  {
    imgSrc: "../JA410.jpeg",
    name: "JA PERC 410W",
    Voc: "50.12V",
    Isc: "10.37A",
    price: 16999,
    id: "JA410",
    datasheet:
      "https://www.jasolar.com/uploadfile/2019/0603/20190603111930535.pdf",
  },
  {
    imgSrc: "../JA410.jpeg",
    name: "JA PERC 460W",
    Voc: "49.91V",
    Isc: "11.5A",
    price: 17999,
    id: "JA460",
    datasheet:
      "https://www.jasolar.com/uploadfile/2022/0512/20220512051304453.pdf",
  },
];
