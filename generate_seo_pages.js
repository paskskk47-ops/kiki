const fs = require('fs');
const path = require('path');

// Raw list of states and cities from the user
const rawList = `
Andhra Pradesh
Visakhapatnam Call Girls
Vijayawada Call Girls
Guntur Call Girls
Tirupati Call Girls
Kurnool Call Girls
Nellore Call Girls
Kadapa Call Girls
Amaravati Call Girls
Ongole Call Girls
Chittoor Call Girls
Guntakal Call Girls
Tadepalligudem Call Girls
Dharmavaram Call Girls
Hindupur Call Girls
Adoni Call Girls
Rajampet Call Girls
Tirumala Call Girls
Vizianagaram Call Girls
Machilipatnam Call Girls
Bhimavaram Call Girls
Palakollu Call Girls
Proddatur Call Girls
Srikakulam Call Girls
Kakinada Call Girls
Rajahmundry Call Girls
Anantapur Call Girls
Eluru Call Girls
Nandyal Call Girls
Madanapalle Call Girls
Tenali Call Girls
Gudivada Call Girls
Narasaraopet Call Girls
Mangalagiri Call Girls
Chilakaluripet Call Girls
Vuyyuru Call Girls
Kuppam Call Girls
Kumbum Call Girls
Kadiri Call Girls
Arunachal Pradesh
Itanagar Call Girls
Tawang Call Girls
Pasighat Call Girls
Lower Subansiri Call Girls
Ziro Call Girls
Assam
Bongaigaon Call Girls
Dibrugarh Call Girls
Digboi Call Girls
Dispur Call Girls
Dhubri Call Girls
Dubri Call Girls
Guwahati Call Girls
Jorhat Call Girls
Nagaon Call Girls
Rangia Call Girls
Silchar Call Girls
Sonari Call Girls
Tezpur Call Girls
Tinsukia Call Girls
Bihar
Patna Call Girls
Gaya Call Girls
Muzaffarpur Call Girls
Bhagalpur Call Girls
Purnia Call Girls
Darbhanga Call Girls
Bihar Sharif Call Girls
Arrah Call Girls
Nalanda Call Girls
Bhojpur Call Girls
Begusarai Call Girls
Katihar Call Girls
Munger Call Girls
Chhapra Call Girls
Bettiah Call Girls
Saharsa Call Girls
Sasaram Call Girls
Hajipur Call Girls
Vaishali Call Girls
Rohtas Call Girls
Siwan Call Girls
Motihari Call Girls
Nawada Call Girls
Bagaha Call Girls
Buxar Call Girls
Kishanganj Call Girls
Sitamarhi Call Girls
Jamalpur Call Girls
Jehanabad Call Girls
Aurangabad Call Girls
Bodh Gaya Call Girls
Chhattisgarh
Ambikapur Call Girls
Bhilai Call Girls
Bilaspur Call Girls
Dhamtari Call Girls
Dhamtri Call Girls
Durg Call Girls
Gaurela Call Girls
Jagadalpur Call Girls
Jagdalpur Call Girls
Korba Call Girls
Kumhari Call Girls
Mahasamund Call Girls
Pendra Call Girls
Raigarh Call Girls
Raipur Call Girls
Ratanpur Call Girls
Saraipali Call Girls
Sarguja Call Girls
Goa
Panaji Call Girls
Calangute Call Girls
Margao Call Girls
Vasco da Gama Call Girls
Candolim Call Girls
Gujarat
Ahmedabad Call Girls
Amreli Call Girls
Anand Call Girls
Bardoli Call Girls
Bareja Call Girls
Bhavnagar Call Girls
Bharuch Call Girls
Bhuj Call Girls
Botad Call Girls
Chikhli Call Girls
Dahod Call Girls
Deesa Call Girls
Dholka Call Girls
Gandhi Nagar Call Girls
Gandhidham Call Girls
Gandhinagar Call Girls
Godhra Call Girls
Gondal Call Girls
Halol Call Girls
Jamnagar Call Girls
Jetpur Call Girls
Junagadh Call Girls
Junagarh Call Girls
Kadi Call Girls
Kalol Call Girls
Kamrej Call Girls
Kandla Call Girls
Kosamba Call Girls
Kutch Call Girls
Mandvi Call Girls
Mehsana Call Girls
Morbi Call Girls
Nadiad Call Girls
Navsari Call Girls
Palanpur Call Girls
Patan Call Girls
Porbandar Call Girls
Rajkot Call Girls
Rajpipla Call Girls
Rander Call Girls
Sanand Call Girls
Surat Call Girls
Surendranagar Call Girls
Una Call Girls
Vadodara Call Girls
Valsad Call Girls
Vapi Call Girls
Veraval Call Girls
Haryana
Ambala Call Girls
Bahadurgarh Call Girls
Bhiwani Call Girls
Faridabad Call Girls
Gohana Call Girls
Gurgaon Call Girls
Hisar Call Girls
Jhajjar Call Girls
Jind Call Girls
Kaithal Call Girls
Karnal Call Girls
Kurukshetra Call Girls
Kurushetra Call Girls
Mahendragarh Call Girls
Panchkula Call Girls
Panipat Call Girls
Rewari Call Girls
Rohtak Call Girls
Sirsa Call Girls
Sonipat Call Girls
Thanesar Call Girls
Yamunanagar Call Girls
Himachal Pradesh
Baddi Call Girls
Bilaspur Call Girls
Chamba Call Girls
Dharamshala Call Girls
Ghumarwin Call Girls
Hamirpur Call Girls
Kangra Call Girls
Kullu Call Girls
Manali Call Girls
Mandi Call Girls
Nalagarh Call Girls
Nurpur Call Girls
Palampur Call Girls
Shimla Call Girls
Solan Call Girls
Una Call Girls
Jharkhand
Ranchi Call Girls
Jamshedpur Call Girls
Dhanbad Call Girls
Bokaro Call Girls
Deoghar Call Girls
Hazaribagh Call Girls
Giridih Call Girls
Ramgarh Call Girls
Karnataka
Arsikere Call Girls
Bagalkot Call Girls
Belagavi Call Girls
Bellary Call Girls
Bengaluru Call Girls
Bhadravati Call Girls
Bidar Call Girls
Bijapur Call Girls
Bommasandra Call Girls
Chikmagalur Call Girls
Chitradurga Call Girls
Davanagere Call Girls
Devanahalli Call Girls
Devanhali Call Girls
Dharwad Call Girls
Electronic City Call Girls
Gadag Call Girls
Hassan Call Girls
Haveri Call Girls
Hospet Call Girls
HSR Layout Call Girls
Hubballi Call Girls
Hubli Call Girls
Jainagar Call Girls
Jayanagar Call Girls
Kalaburagi Call Girls
Kolar Call Girls
Koppal Call Girls
Koramangala Call Girls
Kormangla Call Girls
Mandya Call Girls
Mangalore Call Girls
Mangaluru Call Girls
Mangluru Call Girls
Manipal Call Girls
Marathahalli Call Girls
Mysore Call Girls
Mysuru Call Girls
Nelamangala Call Girls
Neelmangla Call Girls
Raichur Call Girls
Ranebennur Call Girls
Shimoga Call Girls
Sirsi Call Girls
Tumkur Call Girls
Udupi Call Girls
Whitefield Call Girls
Kerala
Kochi Call Girls
Thiruvananthapuram Call Girls
Kozhikode Call Girls
Thrissur Call Girls
Kollam Call Girls
Kannur Call Girls
Kottayam Call Girls
Palakkad Call Girls
Alappuzha Call Girls
Ernakulam Call Girls
Malappuram Call Girls
Kasaragod Call Girls
Pathanamthitta Call Girls
Wayanad Call Girls
Idukki Call Girls
Manjeri Call Girls
Thalassery Call Girls
Ponnani Call Girls
Payyanur Call Girls
Kodungallur Call Girls
Parappanangadi Call Girls
Guruvayur Call Girls
Tanur Call Girls
Irinjalakuda Call Girls
Changanassery Call Girls
Kunnamkulam Call Girls
Ottappalam Call Girls
Chalakudy Call Girls
Kottakkal Call Girls
Mananthavady Call Girls
Punalur Call Girls
Nilambur Call Girls
Taliparamba Call Girls
Varkala Call Girls
Chavakkad Call Girls
Kothamangalam Call Girls
Attingal Call Girls
Paravur Call Girls
Angamaly Call Girls
Haripad Call Girls
Muvattupuzha Call Girls
Kottarakara Call Girls
Adoor Call Girls
Pattambi Call Girls
Aluva Call Girls
Madhya Pradesh
Betul Call Girls
Bhind Call Girls
Bhopal Call Girls
Burhanpur Call Girls
Chhatarpur Call Girls
Chhindwara Call Girls
Damoh Call Girls
Datia Call Girls
Dewas Call Girls
Dhar Call Girls
Guna Call Girls
Gwalior Call Girls
Indore Call Girls
Itarsi Call Girls
Jabalpur Call Girls
Katni Call Girls
Khajuraaho Call Girls
Khandwa Call Girls
Khargone Call Girls
Mandsaur Call Girls
Morena Call Girls
Nagda Call Girls
Neemuch Call Girls
Panchmadi Call Girls
Pithampur Call Girls
Ratlam Call Girls
Rewa Call Girls
Sagar Call Girls
Satna Call Girls
Sehore Call Girls
Seoni Call Girls
Shivpuri Call Girls
Singrauli Call Girls
Ujjain Call Girls
Vidisha Call Girls
Maharashtra
Achalpur Call Girls
Ahmednagar Call Girls
Akola Call Girls
Akot Call Girls
Ambarnath Call Girls
Ambajogai Call Girls
Ambojogai Call Girls
Amravati Call Girls
Aurangabad Call Girls
Badlapur Call Girls
Baramati Call Girls
Barshi Call Girls
Beed Call Girls
Bhiwandi Call Girls
Bhusawal Call Girls
Chandrapur Call Girls
Dharashiv Call Girls
Dhule Call Girls
Dombivali Call Girls
Dombivli Call Girls
Gondia Call Girls
Hinganghat Call Girls
Ichalkaranji Call Girls
Jalgaon Call Girls
Jalna Call Girls
Junnar Call Girls
Kalyan Call Girls
Kharadi Call Girls
Kolhapur Call Girls
Latur Call Girls
Lonavala Call Girls
Malegaon Call Girls
Mira Bhayandar Call Girls
Mumbai Call Girls
Nagpur Call Girls
Nanded Call Girls
Nandurbar Call Girls
Nashik Call Girls
Navi Mumbai Call Girls
Osmanabad Call Girls
Palghar Call Girls
Panvel Call Girls
Parbhani Call Girls
Pimpri Chinchwad Call Girls
Pune Call Girls
Raigad Call Girls
Ratnagiri Call Girls
Sangli Call Girls
Satara Call Girls
Solapur Call Girls
Thane Call Girls
Udgir Call Girls
Vasai Virar Call Girls
Wardha Call Girls
Yavatmal Call Girls
Manipur
Imphal Call Girls
Bishnupur Call Girls
Meghalaya
Shillong Call Girls
Mizoram
Aizawl Call Girls
Nagaland
Kohima Call Girls
Dimapur Call Girls
Odisha
Bhubaneswar Call Girls
Cuttack Call Girls
Rourkela Call Girls
Puri Call Girls
Sambalpur Call Girls
Balangir Call Girls
Balasore Call Girls
Barbil Call Girls
Berhampur Call Girls
Bhadrak Call Girls
Bhawanipatna Call Girls
Burla Call Girls
Dhenkanal Call Girls
Jeypore Call Girls
Jharsuguda Call Girls
Joda Call Girls
Talcher Call Girls
Punjab
Abohar Call Girls
Ambala Call Girls
Amritsar Call Girls
Anandpur Sahib Call Girls
Barnala Call Girls
Batala Call Girls
Bathinda Call Girls
Chandigarh Call Girls
Faridkot Call Girls
Fazilka Call Girls
Firozpur Call Girls
Gurdaspur Call Girls
Hoshiarpur Call Girls
Hosiyarpur Call Girls
Jalandhar Call Girls
Kapurthala Call Girls
Ludhiana Call Girls
Malerkotla Call Girls
Mansa Call Girls
Moga Call Girls
Mohali Call Girls
Muktsar Call Girls
Patiala Call Girls
Pathankot Call Girls
Phagwara Call Girls
Rajpura Call Girls
Rupnagar Call Girls
Sangrur Call Girls
Sunam Call Girls
Zirakpur Call Girls
Rajasthan
Jaipur Call Girls
Jodhpur Call Girls
Udaipur Call Girls
Ajmer Call Girls
Kota Call Girls
Bikaner Call Girls
Jaisalmer Call Girls
Alwar Call Girls
Pushkar Call Girls
Chittorgarh Call Girls
Bundi Call Girls
Sikar Call Girls
Bhilwara Call Girls
Sri Ganganagar Call Girls
Bharatpur Call Girls
Sawai Madhopur Call Girls
Nagaur Call Girls
Dungarpur Call Girls
Jhunjhunu Call Girls
Hanumangarh Call Girls
Nathdwara Call Girls
Banswara Call Girls
Jhalawar Call Girls
Beawar Call Girls
Pali Call Girls
Hindaun Call Girls
Barmer Call Girls
Nawalgarh Call Girls
Bhiwadi Call Girls
Makrana Call Girls
Dholpur Call Girls
Baran Call Girls
Churu Call Girls
Kishangarh Call Girls
Tonk Call Girls
Sirohi Call Girls
Mount Abu Call Girls
Balotra Call Girls
Sikkim
Gangtok Call Girls
Mangan Call Girls
Namchi Call Girls
Tamil Nadu
Chennai Call Girls
Coimbatore Call Girls
Madurai Call Girls
Trichy Call Girls
Salem Call Girls
Vellore Call Girls
Tirunelveli Call Girls
Tiruppur Call Girls
Erode Call Girls
Thanjavur Call Girls
Thoothukudi Call Girls
Dindigul Call Girls
Ooty Call Girls
Kodaikanal Call Girls
Nagapattinam Call Girls
Pollachi Call Girls
Kanchipuram Call Girls
Hosur Call Girls
Nagercoil Call Girls
Namakkal Call Girls
Cuddalore Call Girls
Kumbakonam Call Girls
Tiruvannamalai Call Girls
Rajapalayam Call Girls
Sivakasi Call Girls
Karur Call Girls
Pudukkottai Call Girls
Ambur Call Girls
Sriperumbudur Call Girls
Dharmapuri Call Girls
Kanyakumari Call Girls
Mahabalipuram Call Girls
Thiruvallur Call Girls
Telangana
Hyderabad Call Girls
Warangal Call Girls
Nizamabad Call Girls
Karimnagar Call Girls
Secunderabad Call Girls
Khammam Call Girls
Adilabad Call Girls
Nalgonda Call Girls
Suryapet Call Girls
Ramagundam Call Girls
Jagtial Call Girls
Mahbubnagar Call Girls
Miryalaguda Call Girls
Siddipet Call Girls
Madhapur Call Girls
Kondapur Call Girls
Patancheru Call Girls
Kompally Call Girls
Kapra Call Girls
Ghatkesar Call Girls
Tripura
Agartala Call Girls
Dharmanagar Call Girls
Uttar Pradesh
Agra Call Girls
Aligarh Call Girls
Allahabad Call Girls
Amroha Call Girls
Ayodhya Call Girls
Azamgarh Call Girls
Bahraich Call Girls
Ballia Call Girls
Banda Call Girls
Barabanki Call Girls
Bareilly Call Girls
Basti Call Girls
Bijnor Call Girls
Bulandshahr Call Girls
Chandauli Call Girls
Etawah Call Girls
Farrukhabad Call Girls
Fatehpur Call Girls
Firozabad Call Girls
Gaziabad Call Girls
Ghaziabad Call Girls
Gomti Nagar Call Girls
Gonda Call Girls
Gorakhpur Call Girls
Greater Noida Call Girls
Hapur Call Girls
Hardoi Call Girls
Indira Nagar Call Girls
Jalaun Call Girls
Jaunpur Call Girls
Jhansi Call Girls
Kanpur Call Girls
Lakhimpur Kheri Call Girls
Lalitpur Call Girls
Lucknow Call Girls
Mainpuri Call Girls
Mathura Call Girls
Meerut Call Girls
Merut Call Girls
Mirzapur Call Girls
Moradabad Call Girls
Muzaffarnagar Call Girls
Noida Call Girls
Pilibhit Call Girls
Prayagraj Call Girls
Raebareli Call Girls
Rampur Call Girls
Sahanjhapur Call Girls
Saharanpur Call Girls
Sambhal Call Girls
Shahjahanpur Call Girls
Sitapur Call Girls
Unnao Call Girls
Varanasi Call Girls
Vrindavan Call Girls
Uttarakhand
Almora Call Girls
Dehradun Call Girls
Haldwani Call Girls
Haridwar Call Girls
Kashipur Call Girls
Kathgodam Call Girls
Kotdwar Call Girls
Mussoorie Call Girls
Nainital Call Girls
Pithoragarh Call Girls
Rishikesh Call Girls
Roorkee Call Girls
Rudrapur Call Girls
Rurki Call Girls
Srinagar Call Girls
Tehri Call Girls
Tihri Call Girls
Uttarkashi Call Girls
West Bengal
Alipurduar Call Girls
Asansol Call Girls
Baharampur Call Girls
Balurghat Call Girls
Bankura Call Girls
Baranagar Call Girls
Barasat Call Girls
Barrackpore Call Girls
Baruipur Call Girls
Basirhat Call Girls
Bhatpara Call Girls
Bidhan Nagar Call Girls
Bolpur Call Girls
Budge Budge Call Girls
Cooch Behar Call Girls
Dankuni Call Girls
Darjeeling Call Girls
Digha Call Girls
Dum Dum Call Girls
Durgapur Call Girls
Garia Call Girls
Habra Call Girls
Haldia Call Girls
Hooghly Call Girls
Howrah Call Girls
Jalpaiguri Call Girls
Kamarhati Call Girls
Kanchrapara Call Girls
Kharagpur Call Girls
Kolkata Call Girls
Krishnanagar Call Girls
Malda Call Girls
Medinipur Call Girls
Murshidabad Call Girls
Paschim Medinipur Call Girls
Purulia Call Girls
Raiganj Call Girls
Rajarhat Call Girls
Ranaghat Call Girls
Shantiniketan Call Girls
Shantipur Call Girls
Siliguri Call Girls
Uluberia Call Girls
Delhi NCR
Aerocity Call Girls
Anand Vihar Call Girls
Ashok Vihar Call Girls
Badarpur Call Girls
Bhikaji Cama Place Call Girls
Central Delhi Call Girls
Chanakyapuri Call Girls
Chandni Chowk Call Girls
Chattarpur Call Girls
Connaught Place Call Girls
Connaught Palace (CP) Call Girls
Daryaganj Call Girls
Defence Colony Call Girls
Delhi Call Girls
Dilshad Garden Call Girls
Dwarka Call Girls
Dwarka Mor Call Girls
East Delhi Call Girls
GB Road Call Girls
Golf Links Call Girls
Govindpuri Call Girls
Greater Kailash Call Girls
Green Park Call Girls
Gulabi Bagh Call Girls
Hauz Khas Call Girls
Janakpuri Call Girls
Jankpuri Call Girls
Jangpura Call Girls
Jasola Call Girls
Kailash Colony Call Girls
Kalkaji Call Girls
Kamla Nagar Call Girls
Kapas Hera Call Girls
Karol Bagh Call Girls
Karolbagh Call Girls
Khan Market Call Girls
Kirti Nagar Call Girls
Lajpat Nagar Call Girls
Laxmi Nagar Call Girls
Mahipalpur Call Girls
Malviya Nagar Call Girls
Mayapuri Call Girls
Mayur Vihar Call Girls
Mehrauli Call Girls
Model Town Call Girls
Moti Nagar Call Girls
Mukherjee Nagar Call Girls
Munirka Call Girls
Najafgarh Call Girls
Nehru Place Call Girls
New Delhi Call Girls
New Friends Colony Call Girls
Nirman Vihar Call Girls
North Delhi Call Girls
Okhla Call Girls
Old Delhi Call Girls
Paharganj Call Girls
Palam Call Girls
Paschim Vihar Call Girls
Patel Nagar Call Girls
Patparganj Call Girls
Pitampura Call Girls
Pragati Maidan Call Girls
Preet Vihar Call Girls
Punjabi Bagh Call Girls
Qutub Minar Call Girls
Rajendra Nagar Call Girls
Rajiv Chowk Call Girls
Rajouri Garden Call Girls
Ramesh Nagar Call Girls
RK Puram Call Girls
Rohini Call Girls
Sadar Bazar Call Girls
Safdarjung Enclave Call Girls
Saket Call Girls
Sangam Vihar Call Girls
Sarita Vihar Call Girls
Sarojini Nagar Call Girls
Shahdara Call Girls
Shalimar Bagh Call Girls
South Extension Call Girls
Subhash Nagar Call Girls
Tilak Nagar Call Girls
Tughlakabad Call Girls
Uttam Nagar Call Girls
Vasant Kunj Call Girls
Vasant Vihar Call Girls
Vikas Puri Call Girls
Vikaspuri Call Girls
Vivek Vihar Call Girls
West Delhi Call Girls
Yamuna Vihar Call Girls
Chandigarh
Chandigarh Call Girls
Manimajra Call Girls
Jammu and Kashmir
Jammu Call Girls
Srinagar Call Girls
Anantnag Call Girls
Baramulla Call Girls
Gulmarg Call Girls
Pahalgam Call Girls
Sonamarg Call Girls
Katra Call Girls
Ladakh
Leh Call Girls
Puducherry
Pondicherry Call Girls
Karaikal Call Girls
Mahe Call Girls
Yanam Call Girls
Andaman and Nicobar Islands
Port Blair Call Girls
Dadra and Nagar Haveli
Amli Call Girls
Silvassa Call Girls
Goa Locations
Panaji Call Girls
Anjuna Call Girls
Arambol Call Girls
Baga Call Girls
Bardez Call Girls
Bicholim Call Girls
Calangute Call Girls
Canacona Call Girls
Candolim Call Girls
Colva Call Girls
Cuncolim Call Girls
Goa Call Girls
Mapusa Call Girls
Mormugao Call Girls
Pernem Call Girls
Ponda Call Girls
Porvorim Call Girls
Sanguem Call Girls
Sattari Call Girls
Valpoi Call Girls
Mumbai Locations
Andheri Call Girls
Antop-Hill Call Girls
Bandra Call Girls
Belapur Call Girls
Borivali Call Girls
Breach Candy Call Girls
Carter Road Call Girls
Chembur Call Girls
Church Gate Call Girls
Colaba Call Girls
Cuffe Parade Call Girls
Dombivli Call Girls
Ghatkopar Call Girls
Goregaon Call Girls
Grant Road Call Girls
Jogeshwari Call Girls
Juhu Call Girls
Kandivali Call Girls
Kapas Hera Call Girls
Kemps Corner Call Girls
Khar Call Girls
Kopar Khairane Call Girls
Kurla Call Girls
Lavasa Call Girls
Lokhandwala Call Girls
Malabar Hill Call Girls
Malad Call Girls
Mahalaxmi Call Girls
Mahim Call Girls
Marine Lines Call Girls
Mira Road Call Girls
Mulund Call Girls
Mumbai Central Call Girls
Nariman Point Call Girls
Nerul Call Girls
Oshiwara Call Girls
Pali Hill Call Girls
Peddar Road Call Girls
Powai Call Girls
Santacruz Call Girls
Sant Nagar Call Girls
Sion Call Girls
Vasai Call Girls
Vashi Call Girls
Versova Call Girls
Vile Parle Call Girls
Wadala Call Girls
Delhi Locations
Alipur Call Girls
Bawana Call Girls
Central Delhi Call Girls
East Delhi Call Girls
Kapas Hera Call Girls
North Delhi Call Girls
Punjabi Bagh Call Girls
Rajokri Call Girls
Sadar Bazar Call Girls
South Delhi Call Girls
Vikas Puri Call Girls
West Delhi Call Girls
Rajasthan Locations
Amer Call Girls
Bhadra Call Girls
Dausa Call Girls
Didwana Call Girls
Gangapur Call Girls
Ganganagar Call Girls
Jaipur Malviya Nagar Call Girls
Jaipur Vaishali Nagar Call Girls
Jalore Call Girls
Kumbhalgarh Call Girls
Ladnun Call Girls
Laxmangarh Call Girls
Merta Call Girls
Nawalgarh Call Girls
Neemrana Call Girls
Niwai Call Girls
Nohar Call Girls
Ranakpur Call Girls
Rawatbhata Call Girls
Shekhawati Call Girls
Sojat Call Girls
Jaipur Locations
Jagatpura Call Girls
Gopalpura Call Girls
Sitapura Call Girls
Sanganer Call Girls
200 Feet Bypass Call Girls
Chandpole Call Girls
Jaipur Malviya Nagar Call Girls
Jaipur Vaishali Nagar Call Girls
Uttar Pradesh Locations
Ambedkar Nagar Call Girls
Amethi Call Girls
Arwal Call Girls
Azamgarh Call Girls
Badaun Call Girls
Baghpat Call Girls
Bahraich Call Girls
Bakhtiyarpur Call Girls
Ballia Call Girls
Basti Call Girls
Bijnor Call Girls
Chandauli Call Girls
Chandausi Call Girls
Chitrakoot Call Girls
Chitrakut Call Girls
Deoria Call Girls
Etah Call Girls
Etawah Call Girls
Faizabad Call Girls
Farrukhabad Call Girls
Fatehabad Call Girls
Gokul Call Girls
Gopalganj Call Girls
Hapur Call Girls
Hardoi Call Girls
Jaunpur Call Girls
Jiribam Call Girls
Kheri Call Girls
Lakhimpur Call Girls
Mainpuri Call Girls
Mau Call Girls
Pratapgarh Call Girls
Raisen Call Girls
Rajgir Call Girls
Sarnath Call Girls
Sheohar Call Girls
Sultanpur Call Girls
Supaul Call Girls
Bihar Locations
Araria Call Girls
Banka Call Girls
Bhabua Call Girls
Bhojpur Call Girls
Darbhanga Call Girls
Gopalganj Call Girls
Hilsa Call Girls
Jamui Call Girls
Kaimur Call Girls
Khagaria Call Girls
Khagaul Call Girls
Lakhisarai Call Girls
Madhepura Call Girls
Madhubani Call Girls
Nalanda Call Girls
Nawada Call Girls
Pashchim Champaran Call Girls
Purbi Champaran Call Girls
Samastipur Call Girls
Saran Call Girls
Sheikhpura Call Girls
Sitamarhi Call Girls
Siwan Call Girls
Andhra Pradesh Locations
Andhra Pradesh Call Girls
East Godavari Call Girls
Nuzvid Call Girls
Prakasam Call Girls
Rangareddy Call Girls
Sri Potti Sriramulu Nellore Call Girls
Tadepalligude Call Girls
Tanuku Call Girls
West Godavari Call Girls
YSR Call Girls
Vijayapura Call Girls
Karnataka Locations
Badami Call Girls
Bangalore Rural Call Girls
Chamarajanagar Call Girls
Chikkaballapura Call Girls
Dakshina Kannada Call Girls
Davangere Call Girls
Gulbarga Call Girls
Hampi Call Girls
Hubli Call Girls
Karnatka Call Girls
Karwar Call Girls
Kodagu Call Girls
Madikeri Call Girls
Mangalore Call Girls
Mysore Call Girls
Ramanagara Call Girls
Uttara Kannada Call Girls
Yadgir Call Girls
Maharashtra Locations
Alibag Call Girls
Bhor Call Girls
Chiplun Call Girls
Chhota Udaipur Call Girls
Dombivli Call Girls
Hinjewadi Call Girls
Jejuri Call Girls
Karad Call Girls
Kamshet Call Girls
Khandala Call Girls
Lavasa Call Girls
Mahabaleshwar Call Girls
Matheran Call Girls
Nashik Call Girls
Pandharpur Call Girls
Panchgani Call Girls
Saswad Call Girls
Talegaon Dabhade Call Girls
Vajreshwari Call Girls
Washim Call Girls
West Bengal Locations
Dakshin Dinajpur Call Girls
Haora Call Girls
Hugli Call Girls
Kalimpong Call Girls
Koch Bihar Call Girls
Maldah Call Girls
Nadia Call Girls
North Twenty Four Parganas Call Girls
Purba Medinipur Call Girls
Puruliya Call Girls
Raiganj Call Girls
South Twenty Four Parganas Call Girls
Uttar Dinajpur Call Girls
Tamil Nadu Locations
Ariyalur Call Girls
Dharmapuri Call Girls
Kancheepuram Call Girls
Kanniyakumari Call Girls
Krishnagiri Call Girls
Perambalur Call Girls
Ramanathapuram Call Girls
Sivaganga Call Girls
Theni Call Girls
The Nilgiris Call Girls
Thiruvarur Call Girls
Thoothukkudi Call Girls
Tiruchengode Call Girls
Tiruchirappalli Call Girls
Tamilnadu Call Girls
Viluppuram Call Girls
Virudhunagar Call Girls
Telangana Locations
Mahaboobnagar Call Girls
Medak Call Girls
Telangana Call Girls
Odisha Locations
Angul Call Girls
Boudh Call Girls
Gajapati Call Girls
Ganjam Call Girls
Jagatsinghpur Call Girls
Jajpur Call Girls
Kalahandi Call Girls
Kandhamal Call Girls
Kendrapara Call Girls
Keonjhar Call Girls
Khurda Call Girls
Koraput Call Girls
Malkangiri Call Girls
Mayurbhanj Call Girls
Nabarangpur Call Girls
Nayagarh Call Girls
Nuapada Call Girls
Odisha Call Girls
Rayagada Call Girls
Sonepur Call Girls
Sundargarh Call Girls
Assam Locations
Assam Call Girls
Baksa Call Girls
Barpeta Call Girls
Biswanath Call Girls
Bongaigaon Call Girls
Cachar Call Girls
Charaideo Call Girls
Chirang Call Girls
Darrang Call Girls
Dhemaji Call Girls
Dhubri Call Girls
Dispur Call Girls
Dima Hasao North Cachar Hills Call Girls
Goalpara Call Girls
Golaghat Call Girls
Hailakandi Call Girls
Hojai Call Girls
Kamrup Call Girls
Kamrup Metropolitan Call Girls
Karbi Anglong Call Girls
Karimganj Call Girls
Kokrajhar Call Girls
Majuli Call Girls
Morigaon Call Girls
Nalbari Call Girls
Sivasagar Call Girls
Sonitpur Call Girls
South Salamara Mankachar Call Girls
Udalguri Call Girls
West Karbi Anglong Call Girls
Manipur Locations
Chandel Call Girls
Churachandpur Call Girls
Imphal East Call Girls
Imphal West Call Girls
Jiribam Call Girls
Kakching Call Girls
Kamjong Call Girls
Kangpokpi Call Girls
Manipur Call Girls
Mon Call Girls
Noney Call Girls
Pherzawl Call Girls
Senapati Call Girls
Tamenglong Call Girls
Tengnoupal Call Girls
Thoubal Call Girls
Ukhrul Call Girls
Meghalaya Locations
Ampati South West Khasi Hills Call Girls
Baghmara South West Garo Hills Call Girls
East Garo Hills Call Girls
Jowai West Khasi Hills Call Girls
Khliehriat East Khasi Hills Call Girls
Mawkyrwat West Garo Hills Call Girls
Meghalaya Call Girls
Nongpoh South Garo Hills Call Girls
Nongstoin Call Girls
Resubelpara Ri Bhoi Call Girls
Shillong North Garo Hills Call Girls
Tura West Jaintia Hills Call Girls
Williamnagar East Jaintia Hills Call Girls
Mizoram Locations
Champhai Call Girls
Kolasib Call Girls
Lawngtlai Call Girls
Lunglei Call Girls
Mamit Call Girls
Mizoram Call Girls
Saiha Call Girls
Serchhip Call Girls
Nagaland Locations
Kiphire Call Girls
Longleng Call Girls
Mokokchung Call Girls
Mon Call Girls
Nagaland Call Girls
Peren Call Girls
Phek Call Girls
Tuensang Call Girls
Wokha Call Girls
Zunheboto Call Girls
Sikkim Locations
East Sikkim Call Girls
Geyzing Call Girls
Mangan South Sikkim Call Girls
Namchi West Sikkim Call Girls
Gangtok North Sikkim Call Girls
Sikkim Call Girls
Tripura Locations
Tripura Call Girls
Gujarat Locations
Aravalli Call Girls
Banaskantha Call Girls
Chhota Udaipur Call Girls
Dang Call Girls
Devbhoomi Dwarka Call Girls
Gir Somnath Call Girls
Gujarat Call Girls
Kachchh Call Girls
Kheda Call Girls
Mahisagar Call Girls
Narmada Call Girls
Panch Mahals Call Girls
Sabarkantha Call Girls
Tapi Call Girls
Haryana Locations
Fatehgarh Sahib Call Girls
Haryana Call Girls
Hansi Call Girls
Mewat Call Girls
Narnaul Call Girls
Palwal Call Girls
Samana Call Girls
Sohna Call Girls
Himachal Pradesh Locations
Dalhousie Call Girls
Hampi Call Girls
Himachal Pradesh Call Girls
Kinnaur Call Girls
Lahaul And Spiti Call Girls
Mcleod Ganj Call Girls
Mhow Call Girls
Sirmaur Call Girls
Sundernagar Call Girls
Punjab Locations
Batala Call Girls
Ferozpur Call Girls
Firozepur Call Girls
Kotkapura Call Girls
Mansa Call Girls
Muktasar Call Girls
Panjab Call Girls
Samana Call Girls
Sas Nagar Call Girls
SBS Nagar Call Girls
Tarn Taran Call Girls
Madhya Pradesh Locations
Hoshangabad Call Girls
Madhya Pradesh Call Girls
Jammu And Kashmir Locations
Jammu And Kashmir Call Girls
Jharkhand Locations
Jharkhand Call Girls
Uttarakhand Locations
Uttarakhand Call Girls
Kerala Locations
Kerala Call Girls
Munnar Call Girls
Lakshadweep
Kavaratti Call Girls
Lakshadweep Call Girls
Daman And Diu
Daman Call Girls
Other Locations
Gujrat Call Girls
Haora Call Girls
Jaipur Malviya Nagar Call Girls
Jaipur Vaishali Nagar Call Girls
Krishna Call Girls
Krishna Nagar Call Girls
Maharastra Call Girls
Mandu Call Girls
Nerul Call Girls
Nongstoin Call Girls
Rajasthan Call Girls
Uttar Pradesh Call Girls
West Bengal Call Girls
`;

// Helper to slugify state/city names
function slugify(text) {
  return text.toString().toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Parse the raw text list
const lines = rawList.split('\n').map(l => l.trim()).filter(Boolean);
const states = [];
let currentState = null;

// Categories of groups to distinguish states from sub-locations/location headers
const listGroups = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi NCR', 'Chandigarh',
  'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Andaman and Nicobar Islands',
  'Dadra and Nagar Haveli', 'Lakshadweep', 'Daman And Diu',
  
  // Custom Locations Groups
  'Goa Locations', 'Mumbai Locations', 'Delhi Locations', 'Rajasthan Locations',
  'Jaipur Locations', 'Uttar Pradesh Locations', 'Bihar Locations', 'Andhra Pradesh Locations',
  'Karnataka Locations', 'Maharashtra Locations', 'West Bengal Locations', 'Tamil Nadu Locations',
  'Telangana Locations', 'Odisha Locations', 'Assam Locations', 'Manipur Locations',
  'Meghalaya Locations', 'Mizoram Locations', 'Nagaland Locations', 'Sikkim Locations',
  'Tripura Locations', 'Gujarat Locations', 'Haryana Locations', 'Himachal Pradesh Locations',
  'Punjab Locations', 'Madhya Pradesh Locations', 'Jammu And Kashmir Locations',
  'Jharkhand Locations', 'Uttarakhand Locations', 'Kerala Locations', 'Other Locations'
];

lines.forEach(line => {
  if (listGroups.includes(line)) {
    currentState = {
      name: line,
      slug: slugify(line),
      cities: []
    };
    states.push(currentState);
  } else if (currentState) {
    const cleanCityName = line.replace(/\s+Call\s+Girls$/i, '').trim();
    currentState.cities.push({
      fullName: line,
      cleanName: cleanCityName,
      slug: slugify(cleanCityName)
    });
  }
});

console.log(`Parsed ${states.length} states/groups containing in total ${states.reduce((acc, s) => acc + s.cities.length, 0)} city files.`);

// Template for State HTML page
function getStateTemplate(stateName, stateSlug) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Escorts in ${stateName} — Verified Call Girls Directory | kiki.com</title>
  <meta name="description" content="Discover premium independent escorts and verified call girls across ${stateName}. Direct contact numbers and reviews on kiki.com.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23e63946' d='M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.604 4.068 2 6.219 2c1.666 0 3.077.837 4.185 2.093C11.404 2.837 12.815 2 14.481 2 17.072 2 19 4.104 19 7.191c0 4.105-5.37 8.863-11 14.402z'/></svg>">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="locations.css">
  <style>
    .state-hero { position: relative; padding: calc(var(--header-h) + 50px) 24px 50px; background: var(--bg-2); border-bottom: 1px solid var(--border); text-align: center; }
    .state-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: var(--radius-pill); background: rgba(230, 57, 70, 0.1); border: 1px solid rgba(230, 57, 70, 0.3); color: var(--red); font-size: 0.85rem; font-weight: 700; margin-bottom: 14px; }
    .state-title-h1 { font-size: clamp(2.2rem, 4.5vw, 3.2rem); font-weight: 900; line-height: 1.15; margin-bottom: 16px; }
    .state-sub { color: var(--text-muted); font-size: 1.05rem; max-width: 720px; margin: 0 auto 30px; line-height: 1.6; }
    .state-cities-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin-top: 24px; }
    .state-city-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-radius: var(--radius-sm); background: var(--bg-2); border: 1px solid var(--border); text-decoration: none; transition: var(--transition); }
    .state-city-item:hover { background: var(--bg-3); border-color: var(--red); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(230, 57, 70, 0.15); }
    .state-city-left { font-weight: 700; color: var(--text); font-size: 1rem; }
    .state-city-right { font-size: 0.8rem; font-weight: 700; color: var(--red); background: rgba(230, 57, 70, 0.1); padding: 4px 10px; border-radius: var(--radius-pill); }
    .state-filter-box { max-width: 480px; margin: 0 auto 30px; position: relative; }
    .state-filter-input { width: 100%; padding: 14px 20px 14px 44px; border-radius: var(--radius-pill); background: var(--bg-3); border: 1px solid var(--border); color: var(--text); font-size: 0.95rem; }
    .state-filter-input:focus { outline: none; border-color: var(--red); }
    .state-filter-box svg { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: var(--text-dim); }
  </style>
</head>
<body>
  <div id="header-mount"></div>
  <div class="state-hero">
    <div class="state-badge">🇮🇳 India Directory</div>
    <h1 class="state-title-h1">Escorts in <span class="hero-gradient-text">${stateName}</span></h1>
    <p class="state-sub">Browse verified independent escorts, call girls, and agency companions in ${stateName}.</p>
    <div class="state-filter-box">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" id="state-search-input" class="state-filter-input" placeholder="Filter cities in ${stateName}…" autocomplete="off">
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-6 mt-6" id="breadcrumb-mount"></div>
  <main class="max-w-7xl mx-auto px-6 py-8">
    <div class="flex items-center justify-between border-b border-border pb-4 mb-6">
      <h2 class="text-2xl font-black">Available Locations</h2>
      <span class="text-sm text-text-muted" id="state-city-counter">—</span>
    </div>
    <div class="state-cities-grid" id="state-cities-grid"></div>
    <div class="mt-16 pt-12 border-t border-border">
      <h2 class="text-2xl font-black mb-6">🔥 Featured Escorts in ${stateName}</h2>
      <div class="profiles-grid" id="state-profiles-grid"></div>
    </div>
    <div class="seo-block mt-16">
      <div class="seo-block-inner" id="state-seo-block"></div>
    </div>
  </main>
  <div id="footer-mount"></div>

  <script src="data.js"></script>
  <script src="locations.js"></script>
  <script src="components.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('header-mount').innerHTML = renderHeader();
      document.getElementById('footer-mount').innerHTML = renderFooter();
      initHeader(); initAgeGate(); initCookieBanner();

      const stateParam = '${stateSlug}';
      let stateInfo = typeof getStateInfo === 'function' ? getStateInfo(stateParam) : null;
      if (!stateInfo) {
        stateInfo = {
          name: '${stateName}',
          slug: stateParam,
          region: 'India',
          flag: '🇮🇳',
          cities: [
            { name: '${stateName} Central', slug: stateParam + '-central', count: 34 }
          ],
          totalCount: 34
        };
      }

      document.getElementById('state-city-counter').textContent = stateInfo.cities.length + ' Cities';

      // Breadcrumb
      document.getElementById('breadcrumb-mount').innerHTML = renderBreadcrumb([
        { label: 'Home', href: 'index.html' },
        { label: 'Locations', href: 'locations.html' },
        { label: stateInfo.name, href: '#' }
      ]);

      function renderCities(citiesList) {
        const grid = document.getElementById('state-cities-grid');
        grid.innerHTML = citiesList.map(c => {
          const citySeoSlug = c.slug + '-call-girls';
          return '<a href="' + citySeoSlug + '.html" class="state-city-item">' +
            '<span class="state-city-left">' + c.name + '</span>' +
            '<span class="state-city-right">' + c.count + ' listings →</span>' +
            '</a>';
        }).join('');
      }
      renderCities(stateInfo.cities);

      const filterInput = document.getElementById('state-search-input');
      if (filterInput) {
        filterInput.addEventListener('input', (e) => {
          const q = e.target.value.trim().toLowerCase();
          const filtered = stateInfo.cities.filter(c => c.name.toLowerCase().includes(q));
          renderCities(filtered);
        });
      }

      const profilesGrid = document.getElementById('state-profiles-grid');
      if (profilesGrid && typeof PROFILES !== 'undefined') {
        const sample = PROFILES.slice(0, 8);
        profilesGrid.innerHTML = sample.map(p => renderProfileCard(p, { showCity: true })).join('');
      }

      document.getElementById('state-seo-block').innerHTML = '<h2>Verified Escorts and Call Girls in ' + stateInfo.name + '</h2>' +
        '<p>Welcome to the premium index of escorts and call girls in ' + stateInfo.name + '. Browse local companion directories and verify photos before booking.</p>';
    });
  </script>
</body>
</html>`;
}

// Template for City HTML page
function getCityTemplate(cityName, citySlug, stateName, pageType) {
  let pageTitle = '';
  let pageH1 = '';
  let pageIntro = '';
  let seoHeading = '';
  let seoPara = '';
  let keywordPlural = '';

  if (pageType === 'call-girls') {
    keywordPlural = 'Call Girls';
    pageTitle = `${cityName} Call Girls — Verified Independent Escorts | kiki.com`;
    pageH1 = `${cityName} Call Girls`;
    pageIntro = `Verified call girls, companion agencies, and VIP escorts in ${cityName}, ${stateName}. Call or WhatsApp directly to book.`;
    seoHeading = `Independent Escorts and Call Girls in ${cityName}`;
    seoPara = `Find premium adult companion services, high-class call girls, and independent agency profiles based in ${cityName}, ${stateName || 'India'}. Discover verified escorts offering top-tier services, social dates, and private travel arrangements.`;
  } else if (pageType === 'escorts') {
    keywordPlural = 'Escorts';
    pageTitle = `${cityName} Escorts — High Class Independent Companions | kiki.com`;
    pageH1 = `${cityName} Escorts`;
    pageIntro = `Premium independent escorts, high-class companions, and VIP escort agencies in ${cityName}, ${stateName}. Find verified profiles here.`;
    seoHeading = `High Class Escorts and Companions in ${cityName}`;
    seoPara = `Discover high-class escorts, elite agency models, and exclusive independent companions in ${cityName}, ${stateName || 'India'}. Enjoy premium adult dates, social events companionship, and private travel hosting.`;
  } else if (pageType === 'massage') {
    keywordPlural = 'Massage';
    pageTitle = `${cityName} Erotic Massage — Sensual Body-to-Body Spa | kiki.com`;
    pageH1 = `${cityName} Erotic Massage`;
    pageIntro = `Discreet erotic massage parlors, sensual body-to-body massage providers, and independent masseuses in ${cityName}, ${stateName}.`;
    seoHeading = `Sensual Spa and Erotic Massage in ${cityName}`;
    seoPara = `Relax with top-tier erotic massage services, sensual spa treatments, and body-to-body massages in ${cityName}, ${stateName || 'India'}. Connect with independent masseuses offering private outcall services.`;
  } else if (pageType === 'male-escorts') {
    keywordPlural = 'Male Escorts';
    pageTitle = `${cityName} Male Escorts — Verified Gigolos & Playboys | kiki.com`;
    pageH1 = `${cityName} Male Escorts`;
    pageIntro = `Verified male escorts, professional gigolos, playboy companions, and male massage providers in ${cityName}, ${stateName}.`;
    seoHeading = `Male Escorts and Gigolos in ${cityName}`;
    seoPara = `Find professional male escorts, certified gigolos, and handsome playboy massage therapists in ${cityName}, ${stateName || 'India'}. Discreet bookings for female clients, couples, and premium events.`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <meta name="description" content="${pageIntro}">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <style>
    .city-hero { background: linear-gradient(135deg,rgba(230,57,70,0.15),rgba(0,0,0,0) 60%), var(--bg-2); border-bottom: 1px solid var(--border); padding: calc(var(--header-h) + 40px) 24px 40px; }
    .city-hero-inner { max-width: 1380px; margin: 0 auto; }
    .city-hero h1 { font-size: clamp(1.8rem,4vw,3rem); font-weight: 900; margin-bottom: 8px; }
    .city-hero p { color: var(--text-muted); font-size: 1rem; max-width: 600px; line-height: 1.6; margin-bottom: 20px; }
    .city-cat-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
    .city-tab { padding: 7px 18px; border-radius: var(--radius-pill); border: 1px solid var(--border); font-size: 0.85rem; font-weight: 600; color: var(--text-muted); cursor: pointer; transition: var(--transition); }
    .city-tab:hover,.city-tab.active { background: var(--red); color: #fff; border-color: var(--red); }
    .city-main { max-width: 1380px; margin: 0 auto; padding: 40px 24px 80px; }
    .city-grid-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
    .city-listing-count { font-size: 0.875rem; color: var(--text-muted); }
    .city-listing-count strong { color: var(--red); font-size: 1.1rem; }
    .city-districts { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 32px; }
    .city-district { padding: 5px 14px; border-radius: var(--radius-pill); background: var(--bg-2); border: 1px solid var(--border); font-size: 0.8rem; color: var(--text-muted); cursor: pointer; transition: var(--transition); }
    .city-district:hover { border-color: var(--red); color: var(--red); }
  </style>
</head>
<body>
  <div id="header-mount"></div>
  <div class="city-hero">
    <div class="city-hero-inner">
      <div id="breadcrumb-mount" class="mb-24"></div>
      <h1 id="city-name-title">${pageH1}</h1>
      <p id="city-intro">${pageIntro}</p>
      <div class="city-cat-tabs">
        <button class="city-tab active" onclick="filterCat(null,this)">All</button>
        <button class="city-tab" onclick="filterCat('female',this)">Escort Girls</button>
        <button class="city-tab" onclick="filterCat('trans',this)">Escort Trans</button>
        <button class="city-tab" onclick="filterCat('male',this)">Escort Boys</button>
      </div>
    </div>
  </div>

  <div class="city-main">
    <div class="city-grid-header">
      <div class="city-listing-count" id="city-count"></div>
      <a href="search.html" class="btn-secondary" style="width:auto;padding:8px 18px;font-size:0.85rem">Advanced Search →</a>
    </div>
    <div class="city-districts" id="city-districts"></div>
    <div class="profiles-grid" id="city-grid"></div>

    <div class="seo-block mt-24">
      <div class="seo-block-inner" id="city-seo"></div>
    </div>
  </div>
  <div id="footer-mount"></div>

  <script src="data.js"></script>
  <script src="locations.js"></script>
  <script src="components.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('header-mount').innerHTML = renderHeader();
      document.getElementById('footer-mount').innerHTML = renderFooter();
      initHeader(); initAgeGate(); initCookieBanner();

      const citySlug = '${citySlug}';
      const pageType = '${pageType}';
      
      let city = typeof getCityBySlug === 'function' ? getCityBySlug(citySlug) : null;
      if (!city) {
        city = { name: '${cityName}', slug: citySlug, state: '${stateName}', region: 'India', flag: '🇮🇳', count: 42 };
      }

      let keywordPlural = 'Call Girls';
      if (pageType === 'escorts') keywordPlural = 'Escorts';
      else if (pageType === 'massage') keywordPlural = 'Massage';
      else if (pageType === 'male-escorts') keywordPlural = 'Male Escorts';

      document.title = city.name + ' ' + keywordPlural + ' — Verified Independent Companions | kiki.com';
      document.getElementById('city-name-title').textContent = (city.flag || '🇮🇳') + ' ' + city.name + ' ' + keywordPlural;
      
      let introText = 'Discover verified ' + city.name + ' ' + keywordPlural.toLowerCase() + ', companion agencies, and VIP escorts. Call or WhatsApp directly to book.';
      if (pageType === 'massage') {
        introText = 'Relax with premium sensual spa treatments, body-to-body erotic massage, and independent masseuses in ' + city.name + '.';
      } else if (pageType === 'male-escorts') {
        introText = 'Book professional male escorts, certified gigolos, and playboy companions based in ' + city.name + '.';
      }
      document.getElementById('city-intro').textContent = introText;

      document.getElementById('breadcrumb-mount').innerHTML = renderBreadcrumb([
        { label: 'Home', href: 'index.html' },
        { label: 'Locations', href: 'locations.html' },
        { label: city.state, href: slugify(city.state) + '.html' },
        { label: city.name + ' ' + keywordPlural, href: '#' }
      ]);

      const districts = ['City Centre', 'Downtown', 'Old Town', 'Gated Community', 'Suburbs', 'West End', 'Metro Area'];
      document.getElementById('city-districts').innerHTML = districts.map(d => '<span class="city-district">' + d + '</span>').join('');

      let activeCat = null;
      function render() {
        let profiles = typeof getProfilesByCity === 'function' ? getProfilesByCity(citySlug, 30) : [];
        if (activeCat) profiles = profiles.filter(p => p.gender === activeCat);
        if (!profiles.length && typeof PROFILES !== 'undefined') {
          profiles = PROFILES.filter(p => !activeCat || p.gender === activeCat).slice(0, 12);
        }
        document.getElementById('city-grid').innerHTML = profiles.map(p => renderProfileCard(p, {showCity:false})).join('');
        document.getElementById('city-count').innerHTML = '<strong>' + city.count + '</strong> listings available in ' + city.name;
      }

      window.filterCat = (cat, el) => {
        activeCat = cat;
        document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        render();
      };

      // Peer links
      let peerCities = [];
      if (city.state && typeof getCitiesByState === 'function') {
        peerCities = getCitiesByState(city.state).filter(c => c.slug !== citySlug).slice(0, 12);
      }
      
      document.getElementById('city-seo').innerHTML = '<h2>' + '${seoHeading.replace(/'/g, "\\'")}' + '</h2>' +
        '<p>' + '${seoPara.replace(/'/g, "\\'")}' + '</p>' +
        '<h3>Browse More Locations in ' + city.state + '</h3>' +
        '<div class="seo-city-links">' +
          peerCities.map(c => '<a href="' + c.slug + '-' + pageType + '.html">' + c.name + ' ' + keywordPlural + '</a>').join('') +
          '<a href="' + slugify(city.state) + '.html" style="font-weight:700;color:var(--red)">View All ' + city.state + ' →</a>' +
        '</div>';

      render();
    });
    
    function slugify(text) {
      return text.toString().toLowerCase().trim().replace(/\\s+/g, '-').replace(/[^\\w\\-]+/g, '');
    }
  </script>
</body>
</html>`;
}

// Generate the files
states.forEach(state => {
  // Generate state file
  const statePath = path.join(__dirname, state.slug + '.html');
  try {
    fs.writeFileSync(statePath, getStateTemplate(state.name, state.slug), 'utf8');
  } catch(e) {
    console.error('Error writing state file: ' + statePath, e);
  }

  // Generate each city file (4 pages for every city location!)
  state.cities.forEach(city => {
    // 1. Call Girls page
    const callGirlsPath = path.join(__dirname, city.slug + '-call-girls.html');
    // 2. Escorts page
    const escortsPath = path.join(__dirname, city.slug + '-escorts.html');
    // 3. Massage page
    const massagePath = path.join(__dirname, city.slug + '-massage.html');
    // 4. Male Escorts page
    const maleEscortsPath = path.join(__dirname, city.slug + '-male-escorts.html');
    
    // Write Call Girls
    try {
      fs.writeFileSync(callGirlsPath, getCityTemplate(city.cleanName, city.slug, state.name, 'call-girls'), 'utf8');
    } catch(e) { console.error('Error writing call girls page: ', e); }

    // Write Escorts
    try {
      fs.writeFileSync(escortsPath, getCityTemplate(city.cleanName, city.slug, state.name, 'escorts'), 'utf8');
    } catch(e) { console.error('Error writing escorts page: ', e); }

    // Write Massage
    try {
      fs.writeFileSync(massagePath, getCityTemplate(city.cleanName, city.slug, state.name, 'massage'), 'utf8');
    } catch(e) { console.error('Error writing massage page: ', e); }

    // Write Male Escorts
    try {
      fs.writeFileSync(maleEscortsPath, getCityTemplate(city.cleanName, city.slug, state.name, 'male-escorts'), 'utf8');
    } catch(e) { console.error('Error writing male escorts page: ', e); }
  });
});

console.log('Successfully generated all SEO locations files (4 pages per location)!');
