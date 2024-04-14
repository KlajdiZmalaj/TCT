# Javascript Advance

# CRUD Advance

- request METHODS

- request

- Websockets

API : https://jsonplaceholder.typicode.com/users
SOCKET : wss://test-ws.xcodetec.com/app/adda284f-9c28-46af-930a-1b65d8ad7f8f?protocol=7&client=js&version=7.4.0&flash=false

=== === ===
=== === ===
=== === ===
=== === ===
=== === ===

1. Te krijohet nje dashboard me produkte i cili avishon produktet nga API dhe i modifikon/fshin/shton ato.

   Backend API : https://klajdi-tct-backend.000webhostapp.com/

   Produkt Model :
   {
   type : `UPDATE | DELETE | null`,
   id : `number`,
   name : `string`,
   price : `string`,
   description : `string`
   }

- Te behet requesti GET dhe te nxirren Produktet ( ne forme kartash me HTML dhe CSS)
- Te behet request POST (pa type) dhe te shtohet nje produkt i ri (krijoni nje forme HTML)
- Te behet requesti POST (me type:`UPDATE` dhe id ) i cili modifikon vlerat per nje produkti te dhene ( krijo formen HTML)
- Te behet requesti POST (me type:`DELETE` dhe id ) i cili fshin nje produkt nga databaza
