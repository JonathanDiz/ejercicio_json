let obj1, obj2, obj3, obj4

obj1 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },

  obj2 = {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },

  obj3 = {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },

  obj4 = {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  }

const OBJ1_ID = JSON.stringify(obj1.id)
const OBJ1_NAME = JSON.stringify(obj1.name)
const OBJ1_USERNAME = JSON.stringify(obj1.username)
const OBJ1_EMAIL = JSON.stringify(obj1.email)
const OBJ1_ADDRESS = JSON.stringify(obj1.address)
const OBJ1_PHONE = JSON.stringify(obj1.phone)
const OBJ1_WEBSITE = JSON.stringify(obj1.website)
const OBJ1_COMPANY_NAME = JSON.stringify(obj1.company.name)
const OBJ1_COMPANY_CATCHPHRSE = JSON.stringify(obj1.company.catchPhrase)
const OBJ1_COMPANY_BS = JSON.stringify(obj1.company.bs)

const OBJ2_ID = JSON.stringify(obj2.id)
const OBJ2_NAME = JSON.stringify(obj2.name)
const OBJ2_USERNAME = JSON.stringify(obj2.username)
const OBJ2_EMAIL = JSON.stringify(obj2.email)
const OBJ2_ADDRESS = JSON.stringify(obj2.address)
const OBJ2_PHONE = JSON.stringify(obj2.phone)
const OBJ2_WEBSITE = JSON.stringify(obj2.website)
const OBJ2_COMPANY_NAME = JSON.stringify(obj2.company.name)
const OBJ2_COMPANY_CATCHPHRSE = JSON.stringify(obj2.company.catchPhrase)
const OBJ2_COMPANY_BS = JSON.stringify(obj2.company.bs)

const OBJ3_ID = JSON.stringify(obj3.id)
const OBJ3_NAME = JSON.stringify(obj3.name)
const OBJ3_USERNAME = JSON.stringify(obj3.username)
const OBJ3_EMAIL = JSON.stringify(obj3.email)
const OBJ3_ADDRESS = JSON.stringify(obj3.address)
const OBJ3_PHONE = JSON.stringify(obj3.phone)
const OBJ3_WEBSITE = JSON.stringify(obj3.website)
const OBJ3_COMPANY_NAME = JSON.stringify(obj3.company.name)
const OBJ3_COMPANY_CATCHPHRSE = JSON.stringify(obj3.company.catchPhrase)
const OBJ3_COMPANY_BS = JSON.stringify(obj3.company.bs)

const OBJ4_ID = JSON.stringify(obj4.id)
const OBJ4_NAME = JSON.stringify(obj4.name)
const OBJ4_USERNAME = JSON.stringify(obj4.username)
const OBJ4_EMAIL = JSON.stringify(obj4.email)
const OBJ4_ADDRESS = JSON.stringify(obj4.address)
const OBJ4_PHONE = JSON.stringify(obj4.phone)
const OBJ4_WEBSITE = JSON.stringify(obj4.website)
const OBJ4_COMPANY_NAME = JSON.stringify(obj4.company.name)
const OBJ4_COMPANY_CATCHPHRSE = JSON.stringify(obj4.company.catchPhrase)
const OBJ4_COMPANY_BS = JSON.stringify(obj4.company.bs)

document.getElementById('obj1_id').innerHTML = OBJ1_ID
document.getElementById('obj1_name').innerHTML = OBJ1_NAME
document.getElementById('obj1_username').innerHTML = OBJ1_USERNAME
document.getElementById('obj1_email').innerHTML = OBJ1_EMAIL
document.getElementById('obj1_address').innerHTML = OBJ1_ADDRESS
document.getElementById('obj1_phone').innerHTML = OBJ1_PHONE
document.getElementById('obj1_website').innerHTML = OBJ1_WEBSITE
document.getElementById('obj1_company__name').innerHTML = OBJ1_COMPANY_NAME
document.getElementById('obj1_company__catchPhrase').innerHTML = OBJ1_COMPANY_CATCHPHRSE
document.getElementById('obj1_company__bs').innerHTML = OBJ1_COMPANY_BS

document.getElementById('obj2_id').innerHTML = OBJ2_ID
document.getElementById('obj2_name').innerHTML = OBJ2_NAME
document.getElementById('obj2_username').innerHTML = OBJ2_USERNAME
document.getElementById('obj2_email').innerHTML = OBJ2_EMAIL
document.getElementById('obj2_address').innerHTML = OBJ2_ADDRESS
document.getElementById('obj2_phone').innerHTML = OBJ2_PHONE
document.getElementById('obj2_website').innerHTML = OBJ2_WEBSITE
document.getElementById('obj2_company__name').innerHTML = OBJ2_COMPANY_NAME
document.getElementById('obj2_company__catchPhrase').innerHTML = OBJ2_COMPANY_CATCHPHRSE
document.getElementById('obj2_company__bs').innerHTML = OBJ2_COMPANY_BS

document.getElementById('obj3_id').innerHTML = OBJ3_ID
document.getElementById('obj3_name').innerHTML = OBJ3_NAME
document.getElementById('obj3_username').innerHTML = OBJ3_USERNAME
document.getElementById('obj3_email').innerHTML = OBJ3_EMAIL
document.getElementById('obj3_address').innerHTML = OBJ3_ADDRESS
document.getElementById('obj3_phone').innerHTML = OBJ3_PHONE
document.getElementById('obj3_website').innerHTML = OBJ3_WEBSITE
document.getElementById('obj3_company__name').innerHTML = OBJ3_COMPANY_NAME
document.getElementById('obj3_company__catchPhrase').innerHTML = OBJ3_COMPANY_CATCHPHRSE
document.getElementById('obj3_company__bs').innerHTML = OBJ3_COMPANY_BS

document.getElementById('obj4_id').innerHTML = OBJ4_ID
document.getElementById('obj4_name').innerHTML = OBJ4_NAME
document.getElementById('obj4_username').innerHTML = OBJ4_USERNAME
document.getElementById('obj4_email').innerHTML = OBJ4_EMAIL
document.getElementById('obj4_address').innerHTML = OBJ4_ADDRESS
document.getElementById('obj4_phone').innerHTML = OBJ4_PHONE
document.getElementById('obj4_website').innerHTML = OBJ4_WEBSITE
document.getElementById('obj4_company__name').innerHTML = OBJ4_COMPANY_NAME
document.getElementById('obj4_company__catchPhrase').innerHTML = OBJ4_COMPANY_CATCHPHRSE
document.getElementById('obj4_company__bs').innerHTML = OBJ4_COMPANY_BS


