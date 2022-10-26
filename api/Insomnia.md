Insomnia

1. CREATE HOTEL (localhost:8800/api/hotels)(POST)

`{`
`"name":"Hotel Xin9.9",`
`"type":"hotel",`
`"city":"Berlin",`
`"address":"somewhere",`
`"distance":"500",`
`"photos":"",`
`"title":"Best Hotel in the City",`
`"desc":"hotel description",`
`"rating":"",`
`"rooms":"",`
`"cheapestPrice":"100"`
`}`

2. UPDATE HOTEL (localhost:8800/api/hotels/631aa9a366f9a272e5cf339a)(PUT)

`{`
`"name": "Hotel Jane 9.9 PUT change"`
`}`

3. GET HOTEL (localhost:8800/api/hotels/6319b0e17a4fe254ff19557a)(GET)

4. GET ALL HOTELS (localhost:8800/api/hotels)(GET)

5. DELETE HOTEL (localhost:8800/api/hotels/6319f084c82c25e1b3490654)(DELETE)

6. REGISTER (localhost:8800/api/auth/register)(POST)

		{
	"username":"John1",
	"email":"john1@gmail.com",
	"password":"12345"
}

7. LOGIN (localhost:8800/api/auth/login)(POST)

{
	"username":"johnupdated",
	"password":"12345"
}

8. UPDATE USER (localhost:8800/api/users/checkadmin/63248a7707f3ecf4cc55f455)(GET)

{
	"username": "johnupdated"
}

9. CREATE ROOM(localhost:8800/api/rooms/631aa9a366f9a272e5cf339a)(POST)

{
	"title":"King Room",
	"desc":"King size bed, 1 bathroom, balcony",
	"price": 100,
	"maxPeople":2,
	"rommNumbers":[{"number":101},{"number":102}]
}

10. DELETE ROOM(localhost:8800/api/rooms/63306d93d0b0b01a8add15f8/631aa9a366f9a272e5cf339a  )(DELETE)
