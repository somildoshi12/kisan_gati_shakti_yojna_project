import './App.css';
// import Form from './Components/Form';
import Homepage from './Components/Homepage';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Harvesting from './Components/Harvesting';
import React, { useState } from 'react'

// import img from './Images/andhra.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";

function App() {



  const [name, setName] = useState('');
  const [states, setStates] = useState('');


  const [title, setTitle] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [climate, setClimate] = useState('');
  const [pic, setPic] = useState('');
  const [method, setMethod] = useState('');


  const handlePages = () => {

    if (states === '1') {
      setTitle('Andhra Pradesh');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('The region has a tropical climate and depends on monsoons for rainfall. According to the Köppen climate classification, it has a non-arid climate with minimum mean temperatures of 18 °C (64 °F). The most humid is the tropical monsoon climate characterized by moderate to high year-round temperatures and seasonally heavy rainfall above 2,000 mm (79 in) per year. The tropical climate is experienced in a strip of south-western lowlands abutting the Malabar Coast, the Western Ghats; the islands of Lakshadweep and Andaman and Nicobar are also subject to this climate');

      setPic('./Images/andhra.jpg');

      setMethod('Rainwater harvesting (RWH) is a simple method by which rainfall is collected for future usage. The collected rainwater may be stored, utilised in different ways or directly used for recharge purposes. With depleting groundwater levels and fluctuating climate conditions, RWH can go a long way to help mitigate these effects. Capturing the rainwater can help recharge local aquifers, reduce urban flooding and most importantly ensure water availability in water-scarce zones. Though the term seems to have picked up greater visibility in the last few years, it was, and is even today, a traditional practice followed in rural India. Some ancient rainwater harvesting methods followed in India include madakas, ahar pynes, surangas, taankas and many more. This water conservation method can be easily practiced in individual homes, apartments, parks,offices and temples too, across the world. Farmers have recharged their dry borewells, createdwater banks in drought areas, greened their farms, increased sustainability of their waterresources and even created a river. Technical know how for the rooftop RWH with direct storage canbe availed for better implementation. RWH An effective method in water scarce times, it is also aneasily doable practice');
    }
    else if (states === '2') {
      setTitle('Arunachal Pradesh');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('The soil and climatic condition of the state offers an ideal condition for the production of a wide variety of fruits and vegetables. In the valleys and foothills, tropical fruits like pineapple, oranges and banana are produced, while in cold and high altitude areas, temperate fruits like apple, peach, plum, etc. are grown. Vegetables are grown in all areas, the plains, the foothills, in the valleys and on the high hills. Besides fruits and vegetables, there are vast potential for the cultivation of coffee and more tea in Arunachal Pradesh.');

      setPic('');

      setMethod('Arunachal Pradesh with a massive 94% rural population, is the largest state in the North-East India. Consequently, the economy of the state is based of agriculture. Jhum cultivation and Terrace farming are the major patterns that the farmers employ to uplift agriculture in Arunachal Pradesh. Most of the agriculture operations are performed by using animate power sources. In Jhum cultivation only hand tools are used such as spade, khurpi, sickle, dibbler, daw, grass slasher etc.  Lands are prepared by cutting down the shrubs/weeds with the help of Phwawrah or spade and sowing is done manually by dibbling. Out of 83,743 sq. km of agriculture land in Arunachal Pradesh, 1.10 lakh hectare is under Jhum cultivation and 90 lakh hectare under permanent cultivation. The topography and climate of Arunachal Pradesh is conducive for the cultivation of rice, millet, wheat, pulses, sugarcane and potatoes. Since most of the farm, operations in Arunachal Pradesh are done by manually or using animal power hence, there is great scope of selective mechanizing by introducing improved hand tools such as improved sickles, dibblers, weeders, etc. in order to reduce drudgery. The seed bed preparation operations should be mechanized by promoting animal/power tiller drawn equipment.');
    }
    else if (states === '3') {
      setTitle('Assam');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('Assam lies in Eastern Himalayan zone of India, and it has five sub agro- climatic zones. Paddy, Tea, Banana, Orange, Potato, Lemon, Coconut, Arcanuts and other vegetables are grown across the state in all the five agro-climatic zones. Apart from this, fruits like mango, guava, litchi, pineapple and jackfruit are grown in the central and upper Brahmaputra valley zone whereas in the lower Brahmaputra valley and the Barak valley zones Arcanut production finds prominent place. Out of 78,438 sq km area of the Assam only 39,88,600 ha area is under cultivation. There are two distinct seasons, kharif (July to October), and rabi (October to March).The zone is ideally suitable for growing Paddy horticultural crops viz. Mango, jack fruit, guava, banana, litchi, citrus; papaya, pears, bear, vegetables, potato and tomato. Tea is the most important non-food crop of the Assam and contributes significantly to its economy');

      setPic('');

      setMethod('The total farm power available in the state is 0.75 HP/ha. Most of the agriculture operations are performed by using animate power sources. The stationery farm power sources, viz; irrigation pump and electric motor are commonly used in irrigated area and use of mechanical mobile farm power sources is negligible. The availability of human power is 0.375 kW/ha., animal power 0.525 kW/ha and mechanical power is 0.20 kW/ha. Since most of the farm operations in Assam are done using animal power, hence, there is great scope of selective mechanizing in Assam where, small hand tools are used involving drudgery. The seed bed preparation operations should be mechanized by promoting animal drawn equipment. For land preparation in Assam cultivators are being used generally. While there is great scope of introducing improved tractor drawn land preparation implements like; M.B. plough, Disc plough, Rotavator, etc. and improved sickle for harvesting and tubular maize sheller for shelling. For irrigated areas animal drawn M.B. Plough, disc harrow, animal drawn Bakhar Blade, animal drawn Puddler, animal drawn three tyne cultivator; for sowing, animal drawn seed cum fertilizer and tractor drawn Potato Planter and Digger cum Elevator, Zero-till drill, Strip-till drill, Vegetable transplanter; for spraying medicine, Aero-blast sprayer, for harvesting, Potato harvester, Self-propelled vertical conveyor reaper; for threshing Multi-crop, thresher etc. needs to be promoted in the state.');
    }
    else if (states === '4') {
      setTitle('Bihar');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('Most of Northeast India and much of North India are subject to a humid subtropical climate and a subtropical highland climate. Though they experience warm to hot summers, temperatures during the coldest months generally fall as low as 0 °C (32 °F). Due to ample monsoon rains, India has two subtropical climate subtypes under the Köppen system: Cwa and Cwb. In most of this region, there is very little precipitation during the winter, owing to powerful anticyclonic and katabatic (downward-flowing) winds from Central Asia. Humid subtropical regions are subject to pronounced dry winters. Winter rainfall—and occasionally snowfall—is associated with large storm systems such as "Nortwesters" and "Western disturbances"; the latter are steered by westerlies towards the Himalayas. Most summer rainfall occurs during powerful thunderstorms associated with the southwest summer monsoon; occasional tropical cyclones also contribute. Annual rainfall ranges from less than 1,000 millimetres (39 in) in the west to over 2,500 millimetres (98 in) in parts of the northeast. As most of this region is far from the ocean, the wide temperature swings more characteristic of a continental climate predominate; the swings are wider than in those in tropical wet regions, ranging from 24 °C (75 °F) in north-central India to 27 °C (81 °F) in the east');

      setPic('');

      setMethod('The average power availability in state is about 0.69 kW/ ha and target is to achieve 2 kW/ha by the year 2020. This is necessary to increase yield and cropping intensity also to enhance proper utilization of natural resources. There is scope for utilizing high capacity machine for timeliness of operation, management of farm machinery and for mechanization in hilly areas. The use of manual rice transplanter, manual pre-germinated paddy seeder, self-propelled rice transplanter, self-propelled combine and multi-crop threshers have tremendous scope in Madhya Pradesh. This demands good quality machines and better after sale and service facilities.The main crops grown in kharif season are Soybean, Paddy, Maize, Bajara and Tur etc. and in rabi season Wheat, Gram, Mustered, Cotton, Jowar and vegetables. Along with this Sugarcane, Custard apple and Banana also grown in some districts. Madhya Pradesh is highest producer of pulses, Gram and Soybean contributing 21.38%, 40.33% and 59.92%, respectively and is second in oil seed production; Jowar, Masoor contributing 22.10, 14.11, and 22.30%, respectively to the total production of India.');
    }
    else if (states === '5') {
      setTitle('Chhattisgarh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('Most of North India and much of North India are subject to a humid subtropical climate and a subtropical highland climate. Though they experience warm to hot summers, temperatures during the coldest months generally fall as low as 0 °C (32 °F). Due to ample monsoon rains, India has two subtropical climate subtypes under the Köppen system: Cwa and Cwb. In most of this region, there is very little precipitation during the winter, owing to powerful anticyclonic and katabatic (downward-flowing) winds from Central Asia. Humid subtropical regions are subject to pronounced dry winters. Winter rainfall—and occasionally snowfall—is associated with large storm systems such as "Nortwesters" and "Western disturbances"; the latter are steered by westerlies towards the Himalayas. Most summer rainfall occurs during powerful thunderstorms associated with the southwest summer monsoon; occasional tropical cyclones also contribute. Annual rainfall ranges from less than 1,000 millimetres (39 in) in the west to over 2,500 millimetres (98 in) in parts of the northeast. As most of this region is far from the ocean, the wide temperature swings more characteristic of a continental climate predominate; the swings are wider than in those in tropical wet regions, ranging from 24 °C (75 °F) in north-central India to 27 °C (81 °F) in the east');

      setPic('');

      setMethod('The average power availability in M.P state is about 0.69 kW/ ha and target is to achieve 2 kW/ha by the year 2020. This is necessary to increase yield and cropping intensity also to enhance proper utilization of natural resources. There is scope for utilizing high capacity machine for timeliness of operation, management of farm machinery and for mechanization in hilly areas. The use of manual rice transplanter, manual pre-germinated paddy seeder, self-propelled rice transplanter, self-propelled combine and multi-crop threshers have tremendous scope in Madhya Pradesh. This demands good quality machines and better after sale and service facilities.The main crops grown in kharif season are Soybean, Paddy, Maize, Bajara and Tur etc. and in rabi season Wheat, Gram, Mustered, Cotton, Jowar and vegetables. Along with this Sugarcane, Custard apple and Banana also grown in some districts. Madhya Pradesh is highest producer of pulses, Gram and Soybean contributing 21.38%, 40.33% and 59.92%, respectively and is second in oil seed production; Jowar, Masoor contributing 22.10, 14.11, and 22.30%, respectively to the total production of India.');
    }
    else if (states === '6') {
      setTitle('Delhi');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate("The climate of Delhi is an overlap between monsoon-influenced humid subtropical (Köppen climate classification Cwa) and semi-arid (Köppen climate classification BSh), with high variation between summer and winter temperatures and precipitation. Delhi's version of a humid subtropical climate is markedly different from many other humid subtropical cities such as São Paulo, New Orleans and Brisbane in that the city features dust storms (something more commonly seen in a desert climate) and wildfire haze (something seen in a tropical climate during the dry season) due to its semi-arid climate. Summer starts in early April and peaks in late May or early June, with average temperatures near 38 °C (100 °F) although occasional heat waves can result in highs close to 45 °C (113 °F) on some days and therefore higher apparent temperature. The monsoon starts in late June and lasts until mid-September, with about 797.3 mm (31.39 inches) of rain. The average temperatures are around 29 °C (84 °F), although they can vary from around 25 °C (77 °F) on rainy days to 32 °C (90 °F) during dry spells. The monsoons recede in late September, and the post-monsoon season continues till late October, with average temperatures sliding from 29 to 21 °C (84 to 70 °F). Winter starts in November and peaks in January, with average temperatures around 6–7 °C (43–45 °F). Although winters are cold, Delhi's proximity to the Himalayas results in cold waves leading to lower apparent temperature due to wind chill. Delhi is notorious for its heavy fogs and haze during the winter season. In December, reduced visibility leads to disruption of road, air and rail traffic. Winter ends by the first week of March.");

      setPic('');

      setMethod('The national capital territory, (NCT), of Delhi receives 611 mm of rainfall on an average annually and the number of rainy days are as low as 20-30. (A rainy day is specified as a day with more than or equal to 2.5 mm of rainfall). The geology of Delhi comprises Alwar quartzites and alluvium whose vertical hydraulic conductivity, (permeability), is high compared to the horizontal permeability. This makes the conditions favourable for artificial recharge.Thus most of the urban rainwater harvesting efforts revolve around recharge of aquifers which is the best option available taking into consideration the rainfall pattern and availability.An analysis done based on the rainfall availability and demand supply gap shows that even 50 per cent of the rainwater harvested could help in bridging the demand supply gap.The Delhi government has launched several initiatives to improve people’s access to water. In this article, the method followed in rainwater harvesting (RWH) is described. It is noted that while some benefits have been derived, the full potential of RWH remains untapped.In Delhi, people’s access to piped water supply is marked by spatial inequalities and shortages. Most of the population receives piped supply of water within premises, but only for two to four hours a day, and quantity received is less. For many others living in the city’s informal areas, municipal supply remains unavailable. To bridge the water demand and supply gap and to ensure 100 percent population coverage, the Delhi government’s water agency, namely Delhi Jal Board (DJB), has embarked on a number of policy measures, including rainwater harvesting (RWH). On an average, the city receives 600 mm of rainfall every year mainly during monsoon season from July to September, and DJB aims to ensure that this natural resource is harvested as much as possible, both for non-potable uses (such as in construction, gardening, horticulture, sanitation, etc.) as well as for groundwater recharge. The city has been facing the problem of over exploitation of groundwater, which is leading to declining water table in several areas of Delhi.');
    }
    else if (states === '7') {
      setTitle('Goa');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate("Goa features a tropical monsoon climate under the Köppen climate classification. Goa, being in the tropical zone and near the Arabian Sea, has a hot and humid climate for most of the year. The month of May is usually the hottest, seeing daytime temperatures of over 35 °C (95 °F) coupled with high humidity. The state's three seasons are Southwest monsoon period (June–September), post-monsoon period (October–January), and pre-monsoon period (February–May). Over 90% of the average annual rainfall (3,000 mm or 120 in) is received during the monsoon season.");

      setPic('');

      setMethod('he Agriculture in Punjab state is highly intensive in terms of land, capital, energy, nutrients, agriculture inputs and water etc. With only 1.5% of geographical area of the country, Punjab has produced about 22% of wheat, 10% of rice and 13% of cotton of the total produce of these crops in the country during 2001-02.Punjab is the most mechanized state and the farm power availability in the State during the year 2001 was 3.50 kW/ha. The State is also a hub for manufacturing of agricultural machines. The productivity level of different crops is also high. Scope of increase in area under agriculture has reached at a saturation level as 98.8 percent of cultivable land in the State is already under plough. The agriculture production can only be increased to some extent through enhanced cropping intensity, change in cropping pattern, use of high yielding varieties, following good cultivation practices and availability of better post-harvest technology etc.  Water harvesting, conservation machinery such as laser guided land leveler, ridge and bed planter, Inter-crop planter, pneumatic precision planter, sugarcane harvester, cotton picker, tractor operated pond excavation machinery, drip and sprinkler irrigation system also need to be promoted.Climatically the state has three major seasons - summer, winter and rainy season. The Punjab Climate is determined by the extreme hot and extreme cold conditions. The region lying near the foot hills of Himalayas receive heavy rainfall whereas the region lying at a distant from the hills, the rainfall is scanty and the temperature is high.');
    }
    else if (states === '8') {
      setTitle('Gujarat');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('The plains of Gujarat are very hot and dry in summer and cold and dry in winter. Water availability and soil suitability are the primary requirements for stable agricultural production. Due to erratic rainfall and lack of irrigation for agriculture, arid regions suffer from volatile conditions for agriculture. ');

      setPic('');

      setMethod('Because of the high salinity of soil in arid regions of Gujarat and other states creates an impermeable layer that prevents rain water from seeping in, rainwater harvesting is the most suitable in these regions. This leads to water logging and the standing water again increases the salinity of the soil. Hence, Bhungroo (meaning "straw" in Gujarati) is an innovative water harvesting technique for irrigation introduced by Indian women farmers. It frees excess water from flood prone and waterlogged farmland by drawing all the excess water underground and making land accessible for farming. The main advantage of this technique is that the water stored during rainy season in unsaturated layers of soils can be pumped for farming in dry season, hence farmers can have dual season farming.');
    }
    else if (states === '9') {
      setTitle('Haryana');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('Climatically the state has three major seasons - summer, winter and rainy season. The Punjab Climate is determined by the extreme hot and extreme cold conditions. The region lying near the foot hills of Himalayas receive heavy rainfall whereas the region lying at a distant from the hills, the rainfall is scanty and the temperature is high');

      setPic('');

      setMethod('The Agriculture in Punjab state is highly intensive in terms of land, capital, energy, nutrients, agriculture inputs and water etc. With only 1.5% of geographical area of the country, Punjab has produced about 22% of wheat, 10% of rice and 13% of cotton of the total produce of these crops in the country during 2001-02.Punjab is the most mechanized state and the farm power availability in the State during the year 2001 was 3.50 kW/ha. The State is also a hub for manufacturing of agricultural machines. The productivity level of different crops is also high. Scope of increase in area under agriculture has reached at a saturation level as 98.8 percent of cultivable land in the State is already under plough. The agriculture production can only be increased to some extent through enhanced cropping intensity, change in cropping pattern, use of high yielding varieties, following good cultivation practices and availability of better post-harvest technology etc.  Water harvesting, conservation machinery such as laser guided land leveler, ridge and bed planter, Inter-crop planter, pneumatic precision planter, sugarcane harvester, cotton picker, tractor operated pond excavation machinery, drip and sprinkler irrigation system also need to be promoted.Climatically the state has three major seasons - summer, winter and rainy season. The Punjab Climate is determined by the extreme hot and extreme cold conditions. The region lying near the foot hills of Himalayas receive heavy rainfall whereas the region lying at a distant from the hills, the rainfall is scanty and the temperature is high.');
    }
    else if (states === '10') {
      setTitle('Himachal Pradesh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('Across from the main Himalaya Range, even the southwest cloudbands break up and the climate of  and Zanskar is extremely dry and cold. Annual precipitation is only around 100 mm per year and humidity is very low. This region, almost all above 3,000 meters above sea level and winters are extremely cold.');

      setPic('');

      setMethod('');
    }
    else if (states === '11') {
      setTitle('Jammu and Kashmir');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('Across from the main Himalaya Range, even the southwest cloudbands break up and the climate of Ladakh and Zanskar is extremely dry and cold. Annual precipitation is only around 100 mm per year and humidity is very low. This region, almost all above 3,000 meters above sea level and winters are extremely cold.');

      setPic('');

      setMethod("The state is divided into three agro-climatic zones: Jammu, Kashmir and Ladakh each have its own specific geo-climatic condition. Rice is the chief crop of Kashmir zone, followed by maize, barley and wheat, while, maize and wheat are important crops grown in Jammu. In the Ladakh region, barley is the major cereal crop followed by wheat. Jammu and Kashmir, being a hilly state, is blessed with naturally occurring micro agro-climatic regions suitable for cultivation of a wide range of agri-horticultural crops with a great potential for development. But the level of farm mechanization in the state is very poor with respect to mechanical power, efficient implements, water management, land reclamation, renewable energy and post-harvest technology sectors. Despite various constraints, there is a great scope for increasing productivity of land and farmer's economy through creation of small water resources for irrigation, land development, use of efficient farm power and implements, rain water harvest, disseminating renewable energy gadgets and introducing small scale agro- based industries employing post harvest engineering principles.");
    }
    else if (states === '12') {
      setTitle('Jharkhand');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '13') {
      setTitle('Karnataka');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '14') {
      setTitle('Kerala');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate("Being the very first and the last state of India to receive heavy rainfall every year, this “land of coconuts” is most suitable for rainwater harvesting. Kerala, which lies in the tropic region, is mostly subject to the type of humid tropical wet climate experienced by most of Earth's rainforests. As per Köppen climate classification, it belongs to the category of Tropical monsoon climate Meanwhile, its extreme eastern fringes experience a drier tropical wet and dry climate. Kerala receives an average annual rainfall of 3107 mm – some 7,030 crore m3 of water. This compares to the all-India average is 1,197 mm. Hence, rice is the most common crop that can be grown easily in these conditions.");

      setPic('');

      setMethod('The main crops grown in the state are paddy, ginger and banana in kharif season, paddy in rabi season, and paddy, pea, ginger and tapioca in zaid season. Agro- climatic condition in Kerala suits the cultivation of variety of important seasonal crops and perennial crops grown in the state. Kerala climate suites cultivation of various crops like paddy, coconut, pulses, rubber, tea, coffee, pepper, cardamom, arecanut, ginger, tapioca cashew etc. As in the rest of India, there has been a steady shift from animal power to electro-mechanical sources of power in Kerala although the rate of change has been slower than that of the leading agricultural States. The availability of power is estimated at 0.69 kW/ha. Out of this about 90% comes from tractors, engines and motors. Track type combine harvesters are in use in Kerala. There is great scope for mechanisation of spices and plantation crops. There are very few agricultural implement manufacturers and so there is need to motivate few entrepreneurs to start agricultural implement manufacturing in the state.');
    }
    else if (states === '15') {
      setTitle('Madhya Pradesh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('•	Agro and Sub Agro climatic zones: An “Agro-climatic zone” is a land unit in terms of major climates, suitable for a certain range of crops and cultivars. Agro-climatic conditions mainly refer to soil types, rainfall, temperature and water availability which influence the type of vegetations. Madhya Pradesh has remarkable agrarian diversity having a wide range of climatic backcloth within and between different crop seasons, variety of soil types ranging from light textured soil to very heavy rich clay vertisols, each with their own inherent problems, and cropping patterns. The State is divided into ten agro-climatic zones.');

      setPic('');

      setMethod('The average power availability in M.P state is about 0.69 kW/ ha and target is to achieve 2 kW/ha by the year 2020. This is necessary to increase yield and cropping intensity also to enhance proper utilization of natural resources. There is scope for utilizing high capacity machine for timeliness of operation, management of farm machinery and for mechanization in hilly areas. The use of manual rice transplanter, manual pre-germinated paddy seeder, self-propelled rice transplanter, self-propelled combine and multi-crop threshers have tremendous scope in Madhya Pradesh. This demands good quality machines and better after sale and service facilities.The main crops grown in kharif season are Soybean, Paddy, Maize, Bajara and Tur etc. and in rabi season Wheat, Gram, Mustered, Cotton, Jowar and vegetables. Along with this Sugarcane, Custard apple and Banana also grown in some districts. Madhya Pradesh is highest producer of pulses, Gram and Soybean contributing 21.38%, 40.33% and 59.92%, respectively and is second in oil seed production; Jowar, Masoor contributing 22.10, 14.11, and 22.30%, respectively to the total production of India.');
    }
    else if (states === '16') {
      setTitle('Maharashtra');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '17') {
      setTitle('Manipur');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod("Agriculture is the main occupation of the people of Manipur and only 7.41 % area is under cultivation. The zone is ideally suitable for growing horticultural crops viz. Mango, Jack Fruit, Guava, Banana, Litchi, Citrus; Papaya, Pears, vegetables, potato and tomato, Spices, Root & Tuber crops, Aromatic & Medicinal plants, etc. Fruits like- Banana, Pineapple and Citrus etc. take a major share in area and production. Among the vegetables, brinjal, tomato, chillies, Cabbage, cauliflower and capsicum hold great promise.  Besides these crops, Mushroom, Root & Tuber crops are also grown.Rains are the main source of water and if rainwater is harvested, the scarcity of water can be eliminated The state lies at a latitude of 23°83'N – 25°68'N and a longitude of 93°03'E – 94°78'E and having a geographical area of 22,347 km². In Manipur many areas face serious threats to a safe and steady supply of water. To solve the problems of water supply and availability of quality water can be complex, but through rooftop rainwater harvesting, it can be one of the feasible solution to meet the domestic water demand. Rooftop rainwater harvesting is one of the methods of rainwater harvesting. It is a system of catching rainwater directly from where it falls.");
    }
    else if (states === '18') {
      setTitle('Meghalaya');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('The climate of Meghalaya varies with the altitude. The climate of Khasi and Jaintia Hills is uniquely pleasant and bracing. It is neither too warm in summer nor too cold in winter, but over the plains of Garo Hills, the climate is warm and humid, except in winter. True to its name, the Meghalaya sky seldom remains free of clouds. The average annual rainfall is about 1,150 cm. Flood affected areas are mostly on the low altitude areas, bordering Assam and the international border (India-Bangladesh). Flash floods have become a regular feature in these areas, due to massive deforestation, unchecked jhum cultivation. The flood water carries huge amount of hill sand, stone, logs and trees, which are deposited in agricultural fields due to inundation of banks in the foot hills, thus causing immense damage to crops. The key to the health of the farm sector in the state lies in the health of the forest cover in the state. Every peak, every square inch of the upper range of the hills need to be under mixed forest cover to protect the soil from leaching and erosion to help regulate and decrease the fury of streams and rivulets during the monsoon season. Vegetation also help to retain soil moisture and ooze it out during the lean winter months to balance vegetative stress caused by mono cropping in the valley; to bestow various other advantage to help maintain the fragile eco-balance. This will ensure continuous cultivation of crops in the farm sector.');

      setPic('');

      setMethod('');
    }
    else if (states === '19') {
      setTitle('Mizoram');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '20') {
      setTitle('Nagaland');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '21') {
      setTitle('Odisha');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '22') {
      setTitle('Punjab');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('Climatically the state has three major seasons - summer, winter and rainy season. The Punjab Climate is determined by the extreme hot and extreme cold conditions. The region lying near the foot hills of Himalayas receive heavy rainfall whereas the region lying at a distant from the hills, the rainfall is scanty and the temperature is high.');

      setPic('');

      setMethod('Punjab (land of the five rivers) is one of the most fertile regions on earth. Punjab State which has earned a name of “Food Basket of the Country” & “Granary of India” has been contributing 40 percent of rice and 50-70 percent of wheat for the last two decades. The Agriculture in Punjab state is highly intensive in terms of land, capital, energy, nutrients, agriculture inputs and water etc. With only 1.5% of geographical area of the country, Punjab has produced about 22% of wheat, 10% of rice and 13% of cotton of the total produce of these crops in the country during 2001-02.Punjab is the most mechanized state and the farm power availability in the State during the year 2001 was 3.50 kW/ha. The State is also a hub for manufacturing of agricultural machines. The productivity level of different crops is also high. Scope of increase in area under agriculture has reached at a saturation level as 98.8 percent of cultivable land in the State is already under plough. The agriculture production can only be increased to some extent through enhanced cropping intensity, change in cropping pattern, use of high yielding varieties, following good cultivation practices and availability of better post-harvest technology etc.  Water harvesting, conservation machinery such as laser guided land leveler, ridge and bed planter, Inter-crop planter, pneumatic precision planter, sugarcane harvester, cotton picker, tractor operated pond excavation machinery, drip and sprinkler irrigation system also need to be promoted.');
    }
    else if (states === '23') {
      setTitle('Rajasthan');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('The climate in India keeps varying as per the latitude, altitude and season. Now, coming to Rajasthan, the climate here keeps varying because of its topography. It is the driest region in India. Rajasthan is located in the north western part of India and thus, it is more prone to different climatic changes. While the western part of Rajasthan is dry and infertile, the southwestern part is hilly and wet. The climate of Rajasthan keeps varying throughout the state. In the desert areas, it is usually hot and dry in summer and cold during the winters. Coming to the Aravali range, to the west, both rainfall and humidity are low. While to the east, weather can be characterized by high humidity and better rainfall. Below, we have further discussed about the climate in Rajasthan by dividing it into four seasons: Summer, Monsoon, Post-Monsoon and Winter.');

      setPic('');

      setMethod('Rajasthan has two principal crop seasons i.e., Rabi and Kharif. The Rabi crops are winter crops and are sown in the months of October and November and are harvested in the months of March and April. These are wheat, gram, pulses, etc. The Kharif crops are the crops that are grown in the summer season and are seeded in the months of June and July. These crops are harvested in the months of September and October and include bajra, pulses, jowar, maize and groundnut. Some places of Rajasthan that has black soil nurture the growth of major cash crops like cotton.In Rajasthan, unless the risk in crop production is reduced, the scope for development will remain highly restricted. The single most important factor for reducing the risk is soil moisture management. Further expansion of traditional irrigation characterized by low water productivity will not be feasible in the region with its limited surface and ground water resources. Conservation of soil moisture, use of precision irrigation to achieve highest possible water productivity and use of the limited water resource for high value crops are the pre-requisites to open the way for the development of region’s agriculture. Sufficient power and matching equipment should be available to the farmers of the region for quick land preparation and scientific planting of the various coarse cereals and other non-irrigated kharif crops under rainfed conditions to make best use of soil moisture for crop establishment, before the top layer of soil gets dry. Equipment for deep tillage to increase moisture intake needs introduction.');
    }
    else if (states === '24') {
      setTitle('Sikkim');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '25') {
      setTitle('Tamil Nadu');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '26') {
      setTitle('Telangana');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '27') {
      setTitle('Tripura');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '28') {
      setTitle('Uttar Pradesh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '29') {
      setTitle('Uttarakhand');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '30') {
      setTitle('West Bengal');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }

  }


  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleDropDown = (event) => {
    setStates(event.target.value);
  }






  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {/* <Form/> */}
          {/* <p>Outside value {a}</p> */}

          <Switch>


            <Route exact path="/harvesting">

              <Harvesting
                heading={title}
                heading2={title2}
                heading3={title3}
                method={method}
                pic={pic}
                climate={climate} />

            </Route>

            <Route exact path="/">

              <Intro />
              <Homepage />
              {/* <Form /> */}

              {/* <Route exact path="/harvesting">
                <Harvesting heading={title} />
              </Route> */}




              <div className="formPage">
                <div className="form">

                  <h1>Enter your details</h1>
                  <br />
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={handleName} />
                    <label htmlFor="floatingInput">Enter your name</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <select class="form-select my-3" aria-label="Default select example" onChange={handleDropDown}>
                    <option selected> --- Select your State -- </option>
                    <option value="1">Andhra Pradesh</option>
                    <option value="2">Arunachal Pradesh</option>
                    <option value="3">Assam</option>
                    <option value="4">Bihar</option>
                    <option value="5">Chhattisgarh</option>
                    <option value="6">Delhi</option>
                    <option value="7">Goa</option>
                    <option value="8">Gujarat</option>
                    <option value="9">Haryana</option>
                    <option value="10">Himachal Pradesh</option>
                    <option value="11">Jammu and Kashmir</option>
                    <option value="12">Jharkhand</option>
                    <option value="13">Karnataka</option>
                    <option value="14">Kerala</option>
                    <option value="15">Madhya Pradesh</option>
                    <option value="16">Maharashtra</option>
                    <option value="17">Manipur</option>
                    <option value="18">Meghalaya</option>
                    <option value="19">Mizoram</option>
                    <option value="20">Nagaland	</option>
                    <option value="21">Odisha</option>
                    <option value="22">Punjab</option>
                    <option value="23">Rajasthan</option>
                    <option value="24">Sikkim</option>
                    <option value="25">Tamil Nadu</option>
                    <option value="26">Telangana</option>
                    <option value="27">Tripura</option>
                    <option value="28">Uttar Pradesh</option>
                    <option value="29">Uttarakhand</option>
                    <option value="30">West Bengal</option>
                  </select>
                  <br />
                  <Link className="btn-form btn-dark" onClick={handlePages} to="/harvesting">Submit</Link>
                  {/* <p>value = {a}</p> */}
                  {/* <button type="button" class="btn btn-outline-success" onClick={handlePages}>Success</button> */}


                  {/* <button type="button" class="btn btn-outline-success" onClick={() => {
                    <Harvesting title="hi" />
                  }}>Success</button> */}
                  {/* <Link to={{
                    pathname: "/harvesting",
                    state: {
                        title : "abc"
                    }
                }}>Click</Link> */}
                  {/* <button type="button" class="btn btn-outline-success" >Success</button> */}

                </div>
              </div>










            </Route>

            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/form">
              {/* <Form /> */}
            </Route>



            {/* <Route exact path="/harvesting">
              <Harvesting heading={title}/>
            </Route> */}

          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
