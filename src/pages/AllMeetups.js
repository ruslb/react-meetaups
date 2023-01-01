import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
	{
	  id: 'm1',
	  title: 'Berlin, Germany',
	  image:
		 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1024px-Brandenburger_Tor_abends.jpg',
	  address: 'Pariser Platz, 10117 Berlin, Germany',
	  description:
		 'It is located in the western part of the city centre of Berlin within Mitte, at the junction of Unter den Linden and Ebertstraße, immediately west of the Pariser Platz.',
	},
	{
	  id: 'm2',
	  title: 'Long Beach, California',
	  image:
		 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Long_beach3_%28cropped%29.jpg',
	  address: '333 W. Ocean Blvd Long Beach, California, USA.',
	  description:
		 'Long Beach is a city in Los Angeles County, California. Long Beach is approximately 20 miles (32 km) south of downtown Los Angeles, and is part of the Gateway Cities region.',
	},
 ];
 
 function AllMeetupsPage() {
	return (
	  <section>
		 <h1>All Meetups</h1>
		 <MeetupList meetups={DUMMY_DATA} />
	  </section>
	);
 }
 
 export default AllMeetupsPage;