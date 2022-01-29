# IMS
Identity Management System

Start docker environment: docker-compose up --build
 APIs

------------------Sign Up---------------

URL: localhost:3000/api/signup
POST /api/signup HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: cf1bd1d1-4cd4-ca26-6b48-422e2e0bd70f

{
"first_name":"ahsan",
"last_name": "latif",
"email": "mohsin1@gmail.com",
"password":"abc123",
"is_admin": 1,
"birthdate": "1990-05-29"
}

--------------------Get All Records---------------

URL: localhost:3000/api/users/all
GET /api/users/all HTTP/1.1
Host: localhost:3000
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjU5NDIzMDJhODRjOTIyYjY4NjBmMCIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2NDM0OTU4MDQsImV4cCI6MTY0MzQ5OTQwNH0.94hP8rPVab2EUI2MV6nIvnDwU1-idBPonkAkTM1ub3Y
Cache-Control: no-cache
Postman-Token: f1b41f7b-3e11-63ab-c7dd-579dc50dea01

--------------------Sign IN--------------------

User SignIn: localhost:3000/api/signin
POST /api/signin HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

{
	"email": "ahsan1@gmail.com",
	"password": "abc123"
}

Response: {
    "id": "61f5942302a84c922b6860f0",
    "first_name": "Ahsan",
    "last_name": "Latif",
    "email": "ahsan1@gmail.com",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjU5NDIzMDJhODRjOTIyYjY4NjBmMCIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2NDM0OTU4MDQsImV4cCI6MTY0MzQ5OTQwNH0.94hP8rPVab2EUI2MV6nIvnDwU1-idBPonkAkTM1ub3Y",
    "is_admin": true
}
--------------------Sign Out--------------------

URL: localhost:3000/api/signout
GET /api/signout HTTP/1.1
Host: localhost:3000
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjU5NDIzMDJhODRjOTIyYjY4NjBmMCIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2NDM0OTQ4NjYsImV4cCI6MTY0MzQ5ODQ2Nn0.qTkCPE8I36MdF2Pb-NrVK1mQuQQce4EeutT4I12Lkrw
Cache-Control: no-cache

----------------User Update:-------------------

URL: localhost:3000/api/users/61f5942302a84c922b6860f0
PUT /api/users/61f5942302a84c922b6860f0 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjU5NDIzMDJhODRjOTIyYjY4NjBmMCIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2NDM0ODc4NjYsImV4cCI6MTY0MzU3NDI2Nn0.VNm6M6a1SdS1zR6lv_on3HtZnADea5olOi4_oigRemM
Cache-Control: no-cache

{
"first_name": "Ahsan",
"last_name": "Latif",
"is_admin": 1
}

----------------------MY INFO---------------------------
Name: Ahsan Latif
Email: ahsanlatif18@gmail.com
Position: Backend Engineer
