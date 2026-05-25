
// assets/js/data.js

const lugares = [
  {
    id: 1,
    nombre: "Yumbel",
    tempActual: 19,
    sensacion: 17,
    estadoActual: "Soleado",
    viento: "12 km/h",
    humedad: "58%",
    icono: "https://cdn-icons-png.flaticon.com/512/4814/4814268.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 10, max: 18, estado: "Soleado" },
      { dia: "Mar", min: 11, max: 19, estado: "Parcial" },
      { dia: "Mié", min: 12, max: 20, estado: "Soleado" },
      { dia: "Jue", min: 11, max: 17, estado: "Nublado" },
      { dia: "Vie", min: 13, max: 21, estado: "Soleado" },
      { dia: "Sáb", min: 14, max: 22, estado: "Soleado" },
      { dia: "Dom", min: 10, max: 16, estado: "Lluvia" }
    ]
  },
  {
    id: 2,
    nombre: "Los Ángeles",
    tempActual: 23,
    sensacion: 22,
    estadoActual: "Despejado",
    viento: "10 km/h",
    humedad: "52%",
    icono: "https://cdn-icons-png.flaticon.com/512/4814/4814268.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 13, max: 22, estado: "Soleado" },
      { dia: "Mar", min: 14, max: 23, estado: "Soleado" },
      { dia: "Mié", min: 15, max: 24, estado: "Parcial" },
      { dia: "Jue", min: 14, max: 22, estado: "Nublado" },
      { dia: "Vie", min: 16, max: 25, estado: "Soleado" },
      { dia: "Sáb", min: 17, max: 26, estado: "Soleado" },
      { dia: "Dom", min: 14, max: 20, estado: "Lluvia" }
    ]
  },
  {
    id: 3,
    nombre: "Santa Juana",
    tempActual: 21,
    sensacion: 20,
    estadoActual: "Soleado",
    viento: "9 km/h",
    humedad: "55%",
    icono: "https://cdn-icons-png.flaticon.com/512/4814/4814268.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 12, max: 20, estado: "Soleado" },
      { dia: "Mar", min: 13, max: 21, estado: "Soleado" },
      { dia: "Mié", min: 14, max: 22, estado: "Parcial" },
      { dia: "Jue", min: 13, max: 20, estado: "Nublado" },
      { dia: "Vie", min: 15, max: 23, estado: "Soleado" },
      { dia: "Sáb", min: 16, max: 24, estado: "Soleado" },
      { dia: "Dom", min: 12, max: 18, estado: "Lluvia" }
    ]
  },
  {
    id: 4,
    nombre: "Concepción",
    tempActual: 18,
    sensacion: 17,
    estadoActual: "Parcial",
    viento: "15 km/h",
    humedad: "70%",
    icono: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 11, max: 17, estado: "Nublado" },
      { dia: "Mar", min: 12, max: 18, estado: "Parcial" },
      { dia: "Mié", min: 13, max: 19, estado: "Soleado" },
      { dia: "Jue", min: 12, max: 17, estado: "Lluvia" },
      { dia: "Vie", min: 14, max: 20, estado: "Parcial" },
      { dia: "Sáb", min: 15, max: 21, estado: "Soleado" },
      { dia: "Dom", min: 11, max: 16, estado: "Nublado" }
    ]
  },
  {
    id: 5,
    nombre: "Chiguayante",
    tempActual: 17,
    sensacion: 16,
    estadoActual: "Nublado",
    viento: "13 km/h",
    humedad: "72%",
    icono: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 10, max: 16, estado: "Nublado" },
      { dia: "Mar", min: 11, max: 17, estado: "Parcial" },
      { dia: "Mié", min: 12, max: 18, estado: "Soleado" },
      { dia: "Jue", min: 11, max: 16, estado: "Lluvia" },
      { dia: "Vie", min: 13, max: 19, estado: "Parcial" },
      { dia: "Sáb", min: 14, max: 20, estado: "Soleado" },
      { dia: "Dom", min: 10, max: 15, estado: "Nublado" }
    ]
  },
  {
    id: 6,
    nombre: "San Pedro de la Paz",
    tempActual: 18,
    sensacion: 17,
    estadoActual: "Soleado",
    viento: "11 km/h",
    humedad: "60%",
    icono: "https://cdn-icons-png.flaticon.com/512/4814/4814268.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 11, max: 18, estado: "Soleado" },
      { dia: "Mar", min: 12, max: 19, estado: "Parcial" },
      { dia: "Mié", min: 13, max: 20, estado: "Soleado" },
      { dia: "Jue", min: 12, max: 18, estado: "Nublado" },
      { dia: "Vie", min: 14, max: 21, estado: "Soleado" },
      { dia: "Sáb", min: 15, max: 22, estado: "Soleado" },
      { dia: "Dom", min: 11, max: 17, estado: "Lluvia" }
    ]
  },
  {
    id: 7,
    nombre: "Talcahuano",
    tempActual: 17,
    sensacion: 15,
    estadoActual: "Viento",
    viento: "22 km/h",
    humedad: "68%",
    icono: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 10, max: 16, estado: "Viento" },
      { dia: "Mar", min: 11, max: 17, estado: "Nublado" },
      { dia: "Mié", min: 12, max: 18, estado: "Parcial" },
      { dia: "Jue", min: 11, max: 16, estado: "Lluvia" },
      { dia: "Vie", min: 13, max: 19, estado: "Viento" },
      { dia: "Sáb", min: 14, max: 20, estado: "Parcial" },
      { dia: "Dom", min: 10, max: 15, estado: "Nublado" }
    ]
  },
  {
    id: 8,
    nombre: "Tomé",
    tempActual: 18,
    sensacion: 16,
    estadoActual: "Soleado",
    viento: "14 km/h",
    humedad: "65%",
    icono: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 11, max: 18, estado: "Soleado" },
      { dia: "Mar", min: 12, max: 19, estado: "Parcial" },
      { dia: "Mié", min: 13, max: 20, estado: "Soleado" },
      { dia: "Jue", min: 12, max: 18, estado: "Nublado" },
      { dia: "Vie", min: 14, max: 21, estado: "Soleado" },
      { dia: "Sáb", min: 15, max: 22, estado: "Soleado" },
      { dia: "Dom", min: 11, max: 17, estado: "Lluvia" }
    ]
  },
  {
    id: 9,
    nombre: "Lota",
    tempActual: 16,
    sensacion: 14,
    estadoActual: "Nublado",
    viento: "12 km/h",
    humedad: "73%",
    icono: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 9, max: 15, estado: "Nublado" },
      { dia: "Mar", min: 10, max: 16, estado: "Parcial" },
      { dia: "Mié", min: 11, max: 17, estado: "Soleado" },
      { dia: "Jue", min: 10, max: 15, estado: "Lluvia" },
      { dia: "Vie", min: 12, max: 18, estado: "Parcial" },
      { dia: "Sáb", min: 13, max: 19, estado: "Soleado" },
      { dia: "Dom", min: 9, max: 14, estado: "Nublado" }
    ]
  },
  {
    id: 10,
    nombre: "Coronel",
    tempActual: 17,
    sensacion: 15,
    estadoActual: "Parcial",
    viento: "13 km/h",
    humedad: "69%",
    icono: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 10, max: 16, estado: "Parcial" },
      { dia: "Mar", min: 11, max: 17, estado: "Nublado" },
      { dia: "Mié", min: 12, max: 18, estado: "Soleado" },
      { dia: "Jue", min: 11, max: 16, estado: "Lluvia" },
      { dia: "Vie", min: 13, max: 19, estado: "Parcial" },
      { dia: "Sáb", min: 14, max: 20, estado: "Soleado" },
      { dia: "Dom", min: 10, max: 15, estado: "Nublado" }
    ]
  },
  {
    id: 11,
    nombre: "Lebu",
    tempActual: 15,
    sensacion: 13,
    estadoActual: "Viento",
    viento: "25 km/h",
    humedad: "75%",
    icono: "https://cdn-icons-png.flaticon.com/512/4814/4814268.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 8, max: 14, estado: "Viento" },
      { dia: "Mar", min: 9, max: 15, estado: "Nublado" },
      { dia: "Mié", min: 10, max: 16, estado: "Parcial" },
      { dia: "Jue", min: 9, max: 14, estado: "Lluvia" },
      { dia: "Vie", min: 11, max: 17, estado: "Viento" },
      { dia: "Sáb", min: 12, max: 18, estado: "Parcial" },
      { dia: "Dom", min: 8, max: 13, estado: "Nublado" }
    ]
  },
  {
    id: 12,
    nombre: "Antuco",
    tempActual: 12,
    sensacion: 10,
    estadoActual: "Despejado",
    viento: "8 km/h",
    humedad: "50%",
    icono: "https://cdn-icons-png.flaticon.com/512/4814/4814268.png",
    pronosticoSemanal: [
      { dia: "Lun", min: 5, max: 11, estado: "Soleado" },
      { dia: "Mar", min: 6, max: 12, estado: "Parcial" },
      { dia: "Mié", min: 7, max: 13, estado: "Soleado" },
      { dia: "Jue", min: 6, max: 11, estado: "Nublado" },
      { dia: "Vie", min: 8, max: 14, estado: "Soleado" },
      { dia: "Sáb", min: 9, max: 15, estado: "Soleado" },
      { dia: "Dom", min: 5, max: 10, estado: "Lluvia" }
    ]
  }
];
