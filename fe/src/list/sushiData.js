const sushiData = [
  {
    id: 1,
    name: "Nigiri Salmone",
    image:
      "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN1c2hpfGVufDB8fDB8fHww",
    price: 8.99,
    description: "Delizioso nigiri di salmone fresco su base di riso.",
  },
  {
    id: 2,
    name: "Maki California",
    image:
      "https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fHww",
    price: 10.49,
    description: "Rotolo di sushi con avocado, cetriolo, e granchio.",
  },
  {
    id: 3,
    name: "Sashimi Tonno",
    image:
      "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c2hpfGVufDB8fDB8fHww",
    price: 12.99,
    description:
      "Freschi sottili tagli di tonno crudo, serviti con salsa di soia.",
  },
  {
    id: 4,
    name: "Uramaki Philadelphia",
    image:
      "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8fDA%3D",
    price: 11.99,
    description: "Rotolo di sushi con salmone, avocado e formaggio spalmabile.",
  },
  {
    id: 5,
    name: "Nigiri Unagi",
    image:
      "https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
    price: 6.99,
    description: "Nigiri di anguilla glassata su base di riso.",
  },
  {
    id: 6,
    name: "Uramaki Spicy Tuna",
    image:
      "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1c2hpfGVufDB8fDB8fHww",
    price: 10.99,
    description: "Rotolo di sushi con tonno piccante e avocado.",
  },
  {
    id: 7,
    name: "Sashimi Mix",
    image:
      "https://images.unsplash.com/photo-1634434738215-106d790e98b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN1c2hpfGVufDB8fDB8fHww",
    price: 13.99,
    description: "Assortimento di sashimi misti (tonno, salmone, branzino).",
  },
  {
    id: 8,
    name: "Roll di Tempura",
    image:
      "https://images.unsplash.com/photo-1607247098982-7b64021a4bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxzdXNoaXxlbnwwfHwwfHx8MA%3D%3D",
    price: 8.99,
    description: "Rotolo di sushi con tempura croccante di gamberi e avocado.",
  },
  {
    id: 9,
    name: "Sashimi Salmone",
    image:
      "https://images.unsplash.com/photo-1569945393177-ffe6dc868c0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxzdXNoaXxlbnwwfHwwfHx8MA%3D%3D",
    price: 4.99,
    description:
      "Descrizione: Freschi sottili tagli di salmone crudo, serviti con salsa di soia.",
  },
  {
    id: 10,
    name: "Nigiri Tonno",
    image:
      "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1c2hpJTIwY29uJTIwc2ZvbmRvJTIwbmVyb3xlbnwwfHwwfHx8MA%3D%3D",
    price: 16.99,
    description: "Nigiri di tonno fresco su base di riso cotto a vapore.",
  },
  {
    id: 11,
    name: "Dragon Roll",
    image:
      "https://images.unsplash.com/photo-1607247098789-6a43ebeaba4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg2fHxzdXNoaXxlbnwwfHwwfHx8MA%3D%3D",
    price: 11.99,
    description:
      " Rotolo di sushi con tempura di gamberi, avocado e un topping di anguilla glassata.",
  },
  {
    id: 12,
    name: "Temaki Gamberi",
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1c2hpJTIwY29uJTIwc2ZvbmRvJTIwbmVyb3xlbnwwfHwwfHx8MA%3D%3D",
    price: 9.99,
    description:
      "Cono di alga ripieno di gamberi cotti e verdure fresche, cotte in tempura.",
  },
];

export default sushiData;
