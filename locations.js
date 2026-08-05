// ============================================================
//  KIKI.COM — Global Locations Data (Compact Format)
//  ~4,700+ major cities across India (36 States/UTs)
// ============================================================

const LOCATIONS_RAW = {
  India: {
    "Andhra Pradesh": "Visakhapatnam,Vijayawada,Guntur,Nellore,Kurnool,Rajahmundry,Tirupati,Kakinada,Kadapa,Anantapur,Eluru,Ongole,Nandyal,Machilipatnam,Adoni,Tenali,Proddatur,Chittoor,Hindupur,Bhimavaram,Madanapalle,Guntakal,Dharmavaram,Gudivada,Narasaraopet,Tadipatri,Mangalagiri,Chilakaluripet,Sullurpeta,Tadepalligudem,Amaravati,Puttaparthi,Markapur,Kavali,Palacole,Bapatla,Vinukonda,Narsapuram,Pithapuram,Tuni,Palasa,Rajam,Srikakulam,Vizianagaram,Bobbili,Tanuku,Kovvur,Nidadavole,Akividu,Palakollu,Jangareddygudem",
    "Arunachal Pradesh": "Itanagar,Naharlagun,Pasighat,Tawang,Ziro,Bomdila,Along,Tezu,Roing,Khonsa,Changlang,Deomali,Miao,Namsai,Daporijo,Yingkiong,Anini,Koloriang,Sagalee,Seppa,Bhalukpong,Dirang",
    "Assam": "Guwahati,Silchar,Dibrugarh,Jorhat,Nagaon,Tinsukia,Tezpur,Bongaigaon,Sivasagar,Dhubri,Diphu,Goalpara,North Lakhimpur,Karimganj,Haflong,Hailakandi,Mangaldoi,Golaghat,Nalbari,Barpeta,Morigaon,Kokrajhar,Chirang,Baksa,Udalguri,Darrang,Sonitpur,Dhemaji,Majuli,Biswanath,Hojai",
    "Bihar": "Patna,Gaya,Bhagalpur,Muzaffarpur,Purnia,Darbhanga,Arrah,Begusarai,Katihar,Munger,Chapra,Hajipur,Saharsa,Sasaram,Bettiah,Motihari,Siwan,Supaul,Madhubani,Sitamarhi,Kishanganj,Buxar,Jehanabad,Aurangabad,Nawada,Jamui,Lakhisarai,Sheikhpura,Nalanda,Rajgir,Bodh Gaya,Danapur,Dehri,Bhabua",
    "Chhattisgarh": "Raipur,Bhilai,Bilaspur,Korba,Durg,Rajnandgaon,Jagdalpur,Raigarh,Ambikapur,Dhamtari,Chirmiri,Bhatapara,Mahasamund,Kanker,Kondagaon,Narayanpur,Bijapur,Sukma,Dantewada,Baikunthpur,Manendragarh,Surajpur,Balrampur,Jashpur,Dongargarh,Kawardha",
    "Goa": "Panaji,Margao,Vasco da Gama,Mapusa,Ponda,Bicholim,Curchorem,Sanquelim,Calangute,Canacona,Quepem,Valpoi,Pernem,Sanguem,Cuncolim,Benaulim,Colva,Baga,Anjuna,Vagator,Candolim,Sinquerim,Dona Paula,Miramar,Old Goa",
    "Gujarat": "Ahmedabad,Surat,Vadodara,Rajkot,Bhavnagar,Jamnagar,Gandhinagar,Junagadh,Anand,Bharuch,Navsari,Morbi,Surendranagar,Mehsana,Gandhidham,Nadiad,Porbandar,Ankleshwar,Gondal,Veraval,Botad,Amreli,Vapi,Valsad,Palanpur,Patan,Himmatnagar,Godhra,Dahod,Kalol,Bhuj,Mandvi,Mundra",
    "Haryana": "Faridabad,Gurugram,Panipat,Ambala,Yamunanagar,Rohtak,Hisar,Karnal,Sonipat,Panchkula,Bhiwani,Sirsa,Bahadurgarh,Jind,Thanesar,Kaithal,Rewari,Palwal,Pehowa,Pinjore,Narnaul,Mahendragarh,Nuh,Hodal,Sohna,Manesar,Pataudi,Jhajjar",
    "Himachal Pradesh": "Shimla,Dharamshala,Solan,Mandi,Kullu,Manali,Kangra,Hamirpur,Una,Bilaspur,Chamba,Dalhousie,Khajjiar,Palampur,Nurpur,Nahan,Paonta Sahib,Baddi,Parwanoo,Nalagarh,Rampur,Keylong,Kaza",
    "Jharkhand": "Ranchi,Jamshedpur,Dhanbad,Bokaro,Deoghar,Hazaribagh,Giridih,Ramgarh,Phusro,Dumka,Pakur,Godda,Sahibganj,Rajmahal,Lohardaga,Gumla,Simdega,Khunti,Chaibasa,Ghatsila,Patratu,Jhumri Tilaiya,Daltonganj,Medininagar",
    "Karnataka": "Bengaluru,Mysuru,Mangaluru,Hubballi,Belagavi,Kalaburagi,Ballari,Vijayapura,Shivamogga,Tumakuru,Davanagere,Udupi,Bidar,Raichur,Dharwad,Gadag,Haveri,Chitradurga,Chikkamagaluru,Hassan,Mandya,Chamarajanagar,Madikeri,Karwar,Sirsi,Kumta,Kundapur,Kaup,Moodbidri,Bantwal,Puttur,Ramanagara,Channapatna,Kolar,Bagalkot,Badami,Hospet",
    "Kerala": "Thiruvananthapuram,Kochi,Kozhikode,Thrissur,Kollam,Palakkad,Alappuzha,Malappuram,Kannur,Kasaragod,Kottayam,Idukki,Ernakulam,Pathanamthitta,Wayanad,Thalassery,Vatakara,Koyilandy,Tirur,Ponnani,Tiruvalla,Changanacherry,Punalur,Kayamkulam,Cherthala,Attingal,Neyyattinkara,Varkala,Paravur,Guruvayur,Munnar,Kalpetta,Payyanur",
    "Madhya Pradesh": "Bhopal,Indore,Jabalpur,Gwalior,Ujjain,Sagar,Dewas,Satna,Ratlam,Rewa,Murwara,Singrauli,Burhanpur,Khandwa,Bhind,Chhindwara,Vidisha,Chhatarpur,Damoh,Mandsaur,Khargone,Neemuch,Pithampur,Hoshangabad,Sehore,Betul,Seoni,Balaghat,Datia,Nagda,Shahdol,Tikamgarh,Raisen,Alirajpur,Jhabua,Mandla,Guna,Shivpuri,Dindori,Morena,Narsimhapur,Harda,Shajapur,Rajgarh,Mhow,Sanwer,Depalpur,Hatod,Mahidpur,Khachrod,Tarana,Badnawar,Dhamnod,Gandhwani,Kukshi,Barwani,Rajpur,Sendhwa,Niwali,Anjad,Maheshwar,Mandleshwar,Kasrawad,Bhikangaon,Sanawad,Harsud,Mundi,Punasa,Khalwa,Timarni,Sirali,Bankhedi,Pipariya,Sohagpur,Seoni Malwa,Itarsi,Banapura,Budni,Rehti,Ashta,Nasrullaganj,Obedullaganj,Ichhawar,Udaipura,Begumganj,Silwani,Bareli,Gairatganj,Sanchi,Basoda,Gyarsi,Kurwai,Lateri,Nateran,Kolaras,Pohari,Picchore,Narwar,Karera,Khaniyadhana,Lahar,Gohad,Mehgaon,Mau,Mihona,Sabalgarh,Joura,Ambah,Porsa,Kailaras,Sumawali,Dimani,Banmore,Dabra,Bhitarwar,Sevda,Bamore,Lashkar,Morar,Antri,Seondha,Indergarh,Bhander,Gormi,Paron,Niwari,Prithvipur,Jatara,Baldeogarh,Palera,Nowgong,Bijawar,Gaurihar,Rajnagar,Bada Malhera,Rahatgarh,Rehli,Bina,Khurai,Malthon,Deori,Patera,Jabera,Hatta,Patharia,Banda,Patan,Sihora,Shahpura,Kundam,Majholi,Panagar,Katni,Vijayraghavgarh,Rithi,Bahoriband,Badwara,Teonthar,Mauganj,Sirmour,Gurh,Nagod,Maihar,Uchehara,Raghurajnagar,Churhat,Sidhi,Waidhan,Devsar,Beohari,Jaisinghnagar,Kotma,Anuppur,Pushparajgarh,Amarkantak,Umaria,Bandhovgarh,Ghughari,Nainpur,Bichhia,Narsinghpur,Gadarwara,Kareli,Saikheda,Gotegaon,Chichli,Amarwara,Sausar,Pandhurna,Multai,Shahpur,Bhainsdehi,Amla,Sarni,Athner,Lakhnadaun,Chhapara,Barghat,Keolari,Waraseoni,Kirnapur,Lamta,Lanji,Baihar,Khairlanji,Katangi,Tirodi,Deosar,Paraswada",
    "Maharashtra": "Mumbai,Pune,Nagpur,Nashik,Aurangabad,Solapur,Kolhapur,Amravati,Nanded,Thane,Pimpri-Chinchwad,Kalyan,Ulhasnagar,Mira-Bhayandar,Bhiwandi,Vasai-Virar,Panvel,Navi Mumbai,Malegaon,Dhule,Jalgaon,Akola,Latur,Ahmednagar,Satara,Sangli,Ratnagiri,Sindhudurg,Osmanabad,Parbhani,Hingoli,Beed,Jalna,Buldhana,Washim,Yavatmal,Wardha,Bhandara,Gondia,Chandrapur,Gadchiroli,Raigad,Alibag,Pen,Khopoli,Karjat,Roha,Murud,Shrivardhan,Mahad,Poladpur,Mangaon,Tala,Sudhagad,Pali,Mhasala,Dapoli,Khed,Chiplun,Guhagar,Sangameshwar,Lanja,Rajapur,Sawantwadi,Kudal,Malvan,Vengurla,Devgad,Kankavli,Oras,Vaibhavvadi,Shiroda,Dodamarg,Amboli,Ajra,Chandgad,Gadhinglaj,Kagal,Shirol,Hatkanangle,Ichalkaranji,Miraj,Tasgaon,Khanapur,Jat,Vita,Atpadi,Kavthe Mahankal,Palus,Walwa,Islampur,Shirala,Karad,Wai,Mahabaleshwar,Panchgani,Patan,Khatav,Koregaon,Man,Khandala,Baramati,Indapur,Daund,Shirur,Junnar,Ambegaon,Maval,Haveli,Mulshi,Velhe,Bhor,Purandar,Pandharpur,Mohol,Malshiras,Sangola,Mangalvedha,Barshi,Akkalkot,Karmala,Madha,Akluj,North Solapur,South Solapur,Rahata,Kopargaon,Sangamner,Akole,Shrirampur,Nevasa,Parner,Shrigonda,Jamkhed,Pathardi,Nagar,Rahuri,Sinnar,Dindori,Igatpuri,Nandgaon,Surgana,Kalwan,Baglan,Chandwad,Yeola,Niphad,Peth,Trimbakeshwar,Peint,Jawhar,Mokhada,Vikramgad,Vada,Shahapur,Murbad,Ambarnath,Badlapur,Titwala,Kulgaon,Wada,Dahanu,Palghar,Vasai,Talasari,Shirpur,Shindkheda,Sakri,Nandurbar,Shahada,Taloda,Akkalkuwa,Molgi,Sindkheda,Pimpalner,Dondaicha,Jamner,Chalisgaon,Bhadgaon,Pachora,Parola,Dharangaon,Raver,Yawal,Muktainagar,Khamgaon,Malkapur,Mehkar,Jalgaon Jamod,Sangrampur,Motala,Nandura,Shegaon,Chikhli,Lonar,Murtijapur,Risod,Manora,Karanja,Mangrulpir,Daryapur,Anjangaon,Achalpur,Paratwada,Chandur Bazar,Nandgaon Peth,Chandur Railway,Morshi,Warud,Dharni,Chikhaldara,Melghat,Pusad,Umarkhed,Mahagaon,Ner,Darwha,Ralegaon,Kelapur,Wani,Babhulgaon,Ghatanji,Digras,Hinganghat,Arvi,Deoli,Seloo,Samudrapur,Kamptee,Umred,Bhiwapur,Parseoni,Ramtek,Mouda,Savner,Narkhed,Katol,Hingna,Butibori,Tirora,Sadak Arjuni,Deori,Goregaon,Amgaon,Arjuni Morgaon,Tumsar,Pauni,Lakhandur,Sakoli,Mohadi,Lakhani,Ashti,Mul,Rajura,Bhadravati,Warora,Chimur,Sindewahi,Nagbhid,Brahmapuri,Korpana,Jiwati,Ballarpur,Gondpipri,Armori,Kurkheda,Chamorshi,Sironcha,Aheri,Allapalli,Bhamragad,Etapalli,Lata,Mulchera,Desaiganj,Dhanora,Korchi,Kinwat,Kandhar,Mudkhed,Naigaon,Degloor,Dharmabad,Biloli,Hadgaon,Mukhed,Loha,Umri,Bhokar,Ardhapur,Selu,Pathri,Sonpeth,Manwath,Gangakhed,Jintur,Purna,Basmath,Kalamnuri,Aundha,Sengaon,Badnapur,Bhokardan,Jafrabad,Mantha,Ambad,Ghansavangi,Omerga,Tuljapur,Bhoom,Kalamb,Washi,Ausa,Ahmadpur,Nilanga,Chakur,Renapur,Udgir,Jalkot,Deoni,Georai,Majalgaon,Patoda,Parli,Ambajogai,Kaij,Dharur,Wadwani,Shirur Kasar,Paithan,Gangapur,Vaijapur,Sillod,Soygaon,Khuldabad,Kannad,Fulambri",
    "Manipur": "Imphal,Thoubal,Bishnupur,Churachandpur,Senapati,Ukhrul,Moreh,Kakching,Jiribam,Tamenglong,Chandel,Tengnoupal,Pherzawl,Kangpokpi,Noney,Kamjong,Moirang,Nambol,Oinam,Lilong,Mayang Imphal,Patsoi,Lamsang,Langthabal,Wangoi,Kumbi,Yairipok,Wangjing,Khangabok,Heirok,Sugnu,Nungba,Tousem,Tamei,Tipaimukh,Singhat,Thanlon,Henglep,Vangai,Samulamlan,Loktak,Kasom Khullen,Phungyar,Chassad,Khamasom,Saikul,Kangchup,Mao,Maram,Purul,Tadubi,Paomata,Saitu,Lungchong Maring,Jessami,Chingai,Kachai,Sangai,Hundung,Chakpikarong,Machi,Pallel,Wangkhem,Nongpok Sekmai",
    "Meghalaya": "Shillong,Tura,Jowai,Nongstoin,Baghmara,Williamnagar,Nongpoh,Resubelpara,Mairang,Cherrapunji,Mawlai,Laban,Mawkhar,Rynjah,Polo,Nongthymmai,Madanrting,Umsning,Byrnihat,Umiam,Barapani,Mawsynram,Pynursla,Smit,Mawryngkneng,Mawshynrut,Mawkyrwat,Ranikor,Nongkrem,Bhoirymbong,Maweit,Khliehriat,Amlarem,Nartiang,Lad Rymbai,Mynso,Rymbai,Sutnga,Saipung,Rongjeng,Selsella,Phulbari,Dalu,Gasuapara,Tikrikilla,Damalgre,Betasing,Rajabala,Mahendraganj,Nengkong,Samgre,Gambegre,Garo Hills,North Garo Hills,South Garo Hills,East Garo Hills,West Garo Hills,East Khasi Hills,West Khasi Hills,Ri Bhoi,East Jaintia Hills,West Jaintia Hills,Bajengdoba",
    "Mizoram": "Aizawl,Lunglei,Saiha,Champhai,Kolasib,Serchhip,Mamit,Lawngtlai,Khawzawl,Hnahthial,Saitual,Thenzawl,Tlabung,Zawlnuam,Phullen,Biate,Vairengte,Kawlkulh,North Vanlaiphai,South Vanlaiphai,Darlawn,Tlangnuam,Khawruhlian,Phaileng,Zemabawk,Lengpui,Tuidam,Sialsir,Chhingchhip,Thingsulthliah,Aibawk,Sakawrtuichhun,Sangau,Bungthuam,Reiek,Hmuifang,Ngopa,Khumtung,Khawbung,Rulchawm,Kawlbem,Chhiahtlang,Marpara,Bairabi,Hnahlan,Ngharchhip,Khawdungsei,Tiau,Seling,West Lungdar,East Lungdar,Chawngte,Tuipang,Lungpher,Siaha,Palak,Phura,Tuichawng,Ngengpui",
    "Nagaland": "Kohima,Dimapur,Mokokchung,Tuensang,Wokha,Zunheboto,Mon,Phek,Longleng,Kiphire,Peren,Niuland,Chumoukedima,Tseminyu,Pfutsero,Meluri,Chizami,Jakhama,Viswema,Kidima,Tsiesema,Chedema,Zubza,Chiephobozou,Khriezino,Sechu,Botsa,Diphupar,Nagarjan,Sovima,Jotsoma,Mima,Khuzama,Thizama,Phekerkriema,Baikaho,Nihoto,Nerhema,Toluvi,Lumami,Impur,Changtongya,Watiyim,Tuli,Longtrok,Asuto,Mangkolemba,Tamlu,Anaki,Naginimora,Tobu,Tizit,Aboi,Wakching,Sheangha,Longwa,Niengphi,Sangpangkong,Shamator,Chare,Noklak,Khezhakeno,Pungro,Seyochung,Tsurho,Sangtam,Mimi,Akhegwo,Satakha,Ghathashi,Aghunato,Akuluto,Suruhoto,Tening,Jalukie,Athibung,Baghty,Bhandari,Chukitong,Sanis,Wozhuro,Noksen,Yimkhiong,Sungro,Akhegouna",
    "Odisha": "Bhubaneswar,Cuttack,Rourkela,Brahmapur,Sambalpur,Puri,Balasore,Bhadrak,Baripada,Jharsuguda,Kendrapara,Paradip,Jagatsinghpur,Jajpur,Dhenkanal,Angul,Talcher,Deogarh,Sundargarh,Keonjhar,Mayurbhanj,Kendujhar,Phulbani,Bolangir,Boudh,Subarnapur,Bargarh,Nuapada,Sonepur,Nabarangpur,Koraput,Malkangiri,Rayagada,Kalahandi,Bhawanipatna,Jeypore,Titilagarh,Kantabanji,Bhima Bhoi,Balangir,Tusra,Patnagarh,Tarbha,Binka,Birmaharajpur,Attabira,Padampur,Saintala,Khaprakhol,Muniguda,Gudari,Kashipur,Gunupur,Bissam Cuttack,Nabarangapur,Umerkote,Chandahandi,Kosagumuda,Chitrakonda,Korukonda,Mathili,Khatiguda,Podia,Bonai,Panposh,Birmitrapur,Rajgangpur,Kiragas,Subdega,Lephripara,Kuanrmunda,Banharpali,Ib,Brajarajnagar,Belpahar,Burla,Hirakud,Rairakhol,Bamra,Banarpal,Athamallik,Kishorenagar,Pallahara,Chhendipada,Kaniha,Kamakhyanagar,Hindol,Bhuban,Parjang,Gandia,Vyasanagar,Jajpur Road,Dharmasala,Sukinda,Mangalpur,Korei,Binjharpur,Dasarathpur,Bari,Aul,Rajnagar,Patkura,Mahakalpada,Marsaghai,Pattamundai,Erasama,Kujang,Tirtol,Naugaon,Balikuda,Khordha,Jatni,Banapur,Chilika,Nimapara,Pipili,Delang,Begunia,Bolagarh,Sakhigopal,Konark,Brahmagiri,Kakatpur,Gop,Nimapada,Balugaon,Berhampur,Bhanjanagar,Phiringia,Balliguda,Raikia,Daringbadi,G Udayagiri,Baliguda,Kantamal,Binika,Ullunda,Daspalla,Nayagarh,Khandapara,Ranapur,Gania,Gajapati,Paralakhemundi,Mohana,Kashinagar,R Udayagiri,Sunabeda,Narayanpatna,Boipariguda,Laxmipur,Borigumma,Kotpad,Pottangi",
    "Punjab": "Ludhiana,Amritsar,Jalandhar,Patiala,Bathinda,Mohali,Firozpur,Hoshiarpur,Gurdaspur,Pathankot,Moga,Fazilka,Fatehgarh Sahib,Sangrur,Barnala,Muktsar,Faridkot,Kapurthala,Nawanshahr,Rupnagar,Tarn Taran,Abohar,Malerkotla,Phagwara,Khanna,Morinda,Sirhind,Rajpura,Zirakpur,Kharar,Derabassi,Anandpur Sahib,Ropar,Nangal,Bassi Pathana,Amloh,Gobindgarh,Samrala,Doraha,Machhiwara,Sahnewal,Payal,Raikot,Jagraon,Sunam,Dhuri,Lehragaga,Dirba,Moonak,Ahmedgarh,Nabha,Ghanaur,Samana,Sanaur,Bhunerheri,Shutrana,Patran,Banur,Chamkaur Sahib,Kurali,Balachaur,Kartarpur,Sultanpur Lodhi,Dhilwan,Nadala,Garhshankar,Mahilpur,Mukerian,Dasuya,Tanda,Hardas,Khem Karan,Patti,Bhikhiwind,Ajnala,Rayya,Jandiala Guru,Lopoke,Fatehabad,Mehta,Beas,Dera Baba Nanak,Batala,Dinanagar,Sri Hargobindpur,Qadian,Dhariwal,Kalanaur,Fatehgarh Churian,Sujanpur,Mamun,Dhaar Kalan,Ferozepur Cantonment,Jalalabad,Malout,Gidderbaha,Lambi,Bareta,Mansa,Budhlada,Sardulewala,Bhikhi,Rampura Phul,Phul,Goniana,Nihal Singh Wala,Dharamkot,Baghapurana,Kot Ise Khan,Jaitu,Kotkapura,Zira,Tapa,Bhadaur,Dhanaula",
    "Rajasthan": "Jaipur,Jodhpur,Udaipur,Kota,Bikaner,Ajmer,Bhilwara,Alwar,Bharatpur,Sikar,Pali,Sri Ganganagar,Hanumangarh,Jhunjhunu,Chittorgarh,Tonk,Sawai Madhopur,Barmer,Jaisalmer,Nagaur,Dholpur,Bundi,Jhalawar,Dungarpur,Banswara,Dausa,Sirohi,Pratapgarh,Karauli,Rajsamand,Churu,Baran,Jalore,Kishangarh,Beawar,Gangapur City,Makrana,Fatehpur,Sujangarh,Sardarshahar,Ratangarh,Ladnun,Merta City,Kuchaman,Didwana,Parbatsar,Jayal,Nawa,Degana,Bhinmal,Sanchore,Raniwara,Ahore,Balotra,Pachapadra,Sheo,Baytu,Siwana,Gadra Road,Gudamalani,Dhorimanna,Chohtan,Ramsar,Sindhari,Tilwara,Samdari,Baitu,Bhawad,Ramjiwala,Nohar,Rawatsar,Pilibanga,Padampur,Gharsana,Anupgarh,Suratgarh,Raisinghnagar,Vijaynagar,Sriganganagar,Karanpur,Sadulshahar,Bhadra,Sangaria,Tibbi,Taranagar,Rajgarh,Sridungargarh,Bidasar,Dungargarh,Nokha,Kolayat,Deshnok,Lunkaransar,Pugal,Khajuwala,Bajju,Poogal,Mahajan,Shri Dungargarh,Mundwa,Merta,Sojat,Jaitaran,Rohat,Sumerpur,Bali,Desuri,Marwar Junction,Raipur,Sojat Road,Rani,Falna,Luni,Phalodi,Shergarh,Bhopalgarh,Bilara,Osian,Mandore,Pipar City,Khinwsar,Riyan Bari,Pokaran,Ramdevra,Fatehgarh,Sam,Bhaniyana,Tijara,Ramgarh,Laxmangarh,Kathumar,Kishangarh Bas,Behror,Mundawar,Neemrana,Shahjahanpur,Kotkasim,Bansur,Thana Gazi,Malakhera,Umren,Nadbai,Mahuwa,Nagar,Weir,Bayyana,Deeg,Rajakhera,Bari,Saramathura,Todabhim,Hindaun,Gangapur,Wazirpur,Nainwa,Lakheri,Indergarh,Keshoraipatan,Atru,Chhipabarod,Kelwara,Nimbahera,Chhoti Sadri,Arnod,Mangrol,Bagidora,Ghatol,Anandpuri,Kushalgarh,Sagwara,Aspur,Bichhiwara,Salumbar,Nathdwara,Kankroli,Bhim,Deoli,Amet,Railmagra,Mavli,Vallabhnagar,Salumber,Girwa,Jhadol,Kotra,Gogunda,Phulad,Kherwada,Reodar,Pindwara,Sheoganj,Abu Road,Mount Abu",
    "Sikkim": "Gangtok,Namchi,Gyalshing,Mangan,Rangpo,Jorethang,Nayabazar,Ravangla,Singtam,Yuksom,Pelling,Lachung,Lachen,Chungthang,Dikchu,Rongli,Aritar,Rhenock,Sirwani,Majhitar,Ranipool,Rumtek,Martam,Pakyong,Namthang,Temi,Damthang,Melli,Sombaria,Soreng,Dentam,Uttarey,Tashiding,Rinchenpong,Hilley,Pemayangste,Singshore,Darap,Kecheopalri,Legship,Yangang,Sikkip,Samdruptse,Bermiok,Kaluk,Chakung",
    "Tamil Nadu": "Chennai,Coimbatore,Madurai,Tiruchirappalli,Salem,Tirunelveli,Tiruppur,Vellore,Erode,Thoothukudi,Thanjavur,Dindigul,Tiruvannamalai,Nagercoil,Cuddalore,Kumbakonam,Kancheepuram,Hosur,Sivakasi,Udhagamandalam,Pollachi,Karaikudi,Pudukkottai,Ramanathapuram,Villupuram,Vridhachalam,Ariyalur,Karur,Namakkal,Dharmapuri,Krishnagiri,Perambalur,Nagapattinam,Thiruvarur,Tirupur,Virudhunagar,Ambattur,Avadi,Tambaram,Pallavaram,Guduvancheri,Chengalpattu,Sriperumbudur,Arakkonam,Ranipet,Gudiyatham,Ambur,Jolarpet,Vaniyambadi,Tirupattur,Harur,Palacodu,Pappireddipatti,Thoppur,Omalur,Mettur,Edappadi,Rasipuram,Gobichettipalayam,Bhavani,Sathyamangalam,Perundurai,Nambiyur,Oddanchatram,Palani,Udumalaipettai,Valparai,Anamalai,Mettupalayam,Kangeyam,Dharapuram,Avinashi,Veerapandi,Sulur,Annur,Coonoor,Kotagiri,Gudalur,Nilgiris,Theni,Bodinayakanur,Periyakulam,Andipatti,Uthamapalayam,Cumbum,Melur,Thirumangalam,Usilampatti,Vadipatti,Batlagundu,Natham,Nilakottai,Kodaikanal,Vedasandur,Ayyalur,Manapparai,Musiri,Kulithalai,Srirangam,Thiruverumbur,Lalgudi,Thuraiyur,Sendurai,Andimadam,Jayamkondam,Ulundurpet,Vikravandi,Tindivanam,Gingee,Sankarapuram,Vanur,Kallakurichi,Chidambaram,Kattumannarkovil,Vriddhachalam,Panruti,Neyveli,Bhuvanagiri,Srimushnam,Sirkazhi,Mayiladuthurai,Vedaranyam,Kollidam,Needamangalam,Papanasam,Orathanadu,Pattukottai,Aranthangi,Karambakudi,Tiruvarankulam,Sivaganga,Devakottai,Aruppukkottai,Sattur,Sankarankovil,Tenkasi,Kadayanallur,Thisayanvilai,Palayamkottai,Nanguneri,Valliyur,Ambasamudram,Cheranmahadevi,Shenkottai,Alangulam,Kovilpatti,Kayalpattinam,Ettayapuram,Nazareth,Paramakudi,Rameswaram,Mandapam,Keelakarai,Mudukulathur,Kamuthi,Manamadurai,Marthandam,Colachel,Padmanabhapuram,Kuzhithurai,Thuckalay,Eraniel",
    "Telangana": "Hyderabad,Warangal,Nizamabad,Khammam,Karimnagar,Ramagundam,Mahbubnagar,Nalgonda,Adilabad,Suryapet,Miryalaguda,Siddipet,Jagtial,Mancherial,Nirmal,Kothagudem,Bhadrachalam,Bodhan,Kamareddy,Sangareddy,Medak,Zaheerabad,Sircilla,Metpally,Peddapalli,Sultanabad,Bhupalpally,Mahabubabad,Jangaon,Yellandu,Palwancha,Madhira,Wyra,Pinapaka,Manuguru,Asifabad,Boath,Luxettipet,Sirpur,Khanapur,Bellampalli,Mandamarri,Chennur,Jannaram,Narnoor,Utnoor,Dilawarpur,Mudhole,Lokeswaram,Bazarhathnoor,Ichoda,Wankdi,Talamadla,Bheemgal,Nandipet,Balkonda,Banswada,Yellareddy,Jukkal,Korata,Bhiknur,Pitlam,Machareddy,Nagireddypet,Sadasivpet,Toopran,Narsapur,Ameenpur,Gummadidala,Patancheru,Narayankhed,Andole,Manoor,Jogipet,Ramayampet,Gajwel,Dubbak,Husnabad,Huzurabad,Vemulawada,Metpalle,Peddapalle,Sriram Sagar,Choppadandi,Gangadhara,Kalwakurthy,Shadnagar,Jadcherla,Kosgi,Nagarkurnool,Achampet,Alampur,Wanaparthy,Gadwal,Ieeja,Bhongir,Ramannapeta,Yadagirigutta,Huzurnagar,Kodad,Devarakonda,Marriguda,Alair,Nakrekal,Munugode,Mothkur,Chityal,Palakurthi,Ghanpur,Thorrur,Narsampet,Mulugu,Medaram,Eturnagaram,Hanamkonda,Kazipet,Parkal,Wardhannapet,Kataram,Burgampadu",
    "Tripura": "Agartala,Udaipur,Dharmanagar,Kailasahar,Ambassa,Belonia,Sabroom,Khowai,Teliamura,Bishalgarh,Sonamura,Melaghar,Kumarghat",
    "Uttar Pradesh": "Lucknow,Kanpur,Agra,Varanasi,Meerut,Prayagraj,Ghaziabad,Noida,Bareilly,Aligarh,Moradabad,Saharanpur,Gorakhpur,Ayodhya,Firozabad,Jhansi,Muzaffarnagar,Mathura,Rampur,Shahjahanpur,Farrukhabad,Maunath Bhanjan,Hapur,Faizabad,Etawah,Mirzapur,Bulandshahr,Sambhal,Amroha,Hardoi,Fatehpur,Raebareli,Orai,Sitapur,Bahraich,Modinagar,Unnao,Jaunpur,Lakhimpur,Hathras,Banda,Pilibhit,Barabanki,Khurja,Gonda,Mainpuri,Lalitpur,Etah,Deoria,Ghazipur,Sultanpur,Azamgarh,Bijnor,Basti,Chandausi,Akbarpur,Ballia,Tanda,Greater Noida,Vrindavan",
    "Uttarakhand": "Dehradun,Haridwar,Roorkee,Haldwani,Rudrapur,Kashipur,Rishikesh,Mussoorie,Nainital,Almora,Pithoragarh,Ramnagar,Kichha,Manglaur,Jaspur,Pauri,Kotdwar,Tehri,Chamoli,Uttarkashi,Joshimath,Badrinath,Kedarnath",
    "West Bengal": "Kolkata,Asansol,Siliguri,Durgapur,Bardhaman,Malda,Baharampur,Habra,Kharagpur,Darjeeling,Howrah,South Dumdum,Rajpur Sonarpur,Maheshtala,Gopalpur,Bhatpara,Panihati,Kamarhati,Kulti,Bally,Barasat,Alipurduar,Jalpaiguri,Raiganj,Balurghat,Basirhat,Bankura,Kalyani,Haldia,Krishnanagar,Nabadwip,Midnapore,Purulia,Cooch Behar,Bolpur,Shantiniketan,Kalimpong",
    "Andaman & Nicobar Islands": "Port Blair,Diglipur,Rangat,Mayabunder,Campbell Bay,Car Nicobar,Havelock Island,Neil Island",
    "Chandigarh": "Chandigarh,Manimajra",
    "Dadra & Nagar Haveli and Daman & Diu": "Daman,Diu,Silvassa,Amli,Naroli",
    "Delhi (NCT)": "New Delhi,Dwarka,Rohini,Pitampura,Lajpal Nagar,Saket,Karol Bagh,Vasant Kunj,Connaught Place,Hauz Khas,Greater Kailash,Janakpuri,Laxmi Nagar,Defence Colony,Chanakyapuri,Sarita Vihar,Okhla,Mehrauli",
    "Jammu & Kashmir": "Srinagar,Jammu,Anantnag,Baramulla,Sopore,Udhampur,Kathua,Rajouri,Poonch,Gulmarg,Pahalgam,Patnitop,Kupwara,Pulwama,Kulgam,Ganderbal,Doda,Kishtwar,Ramban,Reasi",
    "Ladakh": "Leh,Kargil,Padum,Nubra,Zanskar,Diskit,Turtuk,Dras,Shey,Thiksey,Alchi",
    "Lakshadweep": "Kavaratti,Agatti,Minicoy,Amini,Androth,Kalpeni,Kadmat,Kiltan,Chetlat,Bitra",
    "Puducherry": "Puducherry,Karaikal,Mahe,Yanam,Auroville,Ozhukarai"
  }
};

// Expand compact string data into LOCATIONS object & ALL_CITIES array
const LOCATIONS = {};
const ALL_CITIES = [];

function cityCount(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffffffff;
  return Math.abs(h % 280) + 20;
}

const REGION_FLAGS = { India: '🇮🇳' };

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
 
Object.entries(LOCATIONS_RAW).forEach(([region, statesMap]) => {
  LOCATIONS[region] = {};
  Object.entries(statesMap).forEach(([stateName, citiesStr]) => {
    const cityList = citiesStr.split(',').map(s => s.trim()).filter(Boolean);
    LOCATIONS[region][stateName] = cityList;
 
    cityList.forEach(cityName => {
      ALL_CITIES.push({
        name: cityName,
        slug: slugify(cityName),
        state: stateName,
        stateSlug: slugify(stateName),
        region: region,
        country: 'India',
        flag: REGION_FLAGS[region] || '🌍',
        count: cityCount(cityName),
      });
    });
  });
});
 
// Helper — get city from slug (searches ALL_CITIES + CITIES)
function getCityBySlug(slug) {
  if (typeof CITIES !== 'undefined') {
    const ind = CITIES.find(c => c.slug === slug);
    if (ind) return { ...ind, region: 'India', country: 'India', state: ind.region, flag: '🇮🇳' };
  }
  return ALL_CITIES.find(c => c.slug === slug) || null;
}

// Helper — get state/country info and its cities
function getStateInfo(stateSlugOrName) {
  const query = stateSlugOrName.toLowerCase();
  for (const c of ALL_CITIES) {
    if (c.stateSlug === query || c.state.toLowerCase() === query) {
      const citiesInState = ALL_CITIES.filter(x => x.state === c.state);
      return {
        name: c.state,
        slug: c.stateSlug,
        region: c.region,
        flag: REGION_FLAGS[c.region] || '🌍',
        cities: citiesInState,
        totalCount: citiesInState.reduce((acc, curr) => acc + curr.count, 0)
      };
    }
  }
  return null;
}

// Helper — get cities for a region
function getCitiesByRegion(region) {
  return ALL_CITIES.filter(c => c.region === region);
}

// Helper — get cities for a state/country
function getCitiesByState(state) {
  return ALL_CITIES.filter(c => c.state === state || c.stateSlug === state);
}

// Helper — search cities worldwide
function searchCities(query) {
  const q = query.toLowerCase();
  return ALL_CITIES.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.state.toLowerCase().includes(q)
  ).slice(0, 20);
}

// Top cities for nav/homepage
const TOP_INDIA_CITIES = ['mumbai','delhi','bengaluru','hyderabad','chennai','kolkata','pune','ahmedabad','jaipur','surat','lucknow','kanpur','nagpur','indore','bhopal']
  .map(s => ALL_CITIES.find(c => c.slug === s)).filter(Boolean);

console.log(`[kiki.com] Compact Locations loaded: ${ALL_CITIES.length} cities across ${Object.keys(LOCATIONS_RAW.India).length} Indian States/UTs!`);
