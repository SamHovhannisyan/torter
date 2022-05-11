const users = [
    {
        id: 1,
        name: "Vahe",
        email: "vahe@mail.com",
        "password": "$2a$10$hoKa68wiWcqxPNjPv2cQQuMnEDf5j6/EM4YY7u7HHS.1Z94etprpy",
        "updatedAt": "2022-04-20T14:17:26.948Z",
        "createdAt": "2022-04-20T14:17:26.858Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NTA0NjQyNDZ9.Di2eqmBOI02rcG_ztZdDrhrrRw9agLb_G--ozXfFoO8"
    },
    {
        id: 2,
        name: "Gago",
        email: "gago@mail.com",
        "password": "$2a$10$hoKa68wiWcqxPNjPv2cQQuMnEDf5j6/EM4YY7u7HHS.1Z94etprpy",
        "updatedAt": "2022-04-20T14:17:26.948Z",
        "createdAt": "2022-04-20T14:17:26.858Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NTA0NjQyNDZ9.Di2eqmBOI02rcG_ztZdDrhrrRw9agLb_G--ozXfFoO8"
    },
    {
        id: 3,
        name: "Hamo",
        email: "hamo@mail.com",
        "password": "$2a$10$hoKa68wiWcqxPNjPv2cQQuMnEDf5j6/EM4YY7u7HHS.1Z94etprpy",
        "updatedAt": "2022-04-20T14:17:26.948Z",
        "createdAt": "2022-04-20T14:17:26.858Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NTA0NjQyNDZ9.Di2eqmBOI02rcG_ztZdDrhrrRw9agLb_G--ozXfFoO8"
    },
    {
        id: 4,
        name: "Ashot",
        email: "ashot@mail.com",
        "password": "$2a$10$hoKa68wiWcqxPNjPv2cQQuMnEDf5j6/EM4YY7u7HHS.1Z94etprpy",
        "updatedAt": "2022-04-20T14:17:26.948Z",
        "createdAt": "2022-04-20T14:17:26.858Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NTA0NjQyNDZ9.Di2eqmBOI02rcG_ztZdDrhrrRw9agLb_G--ozXfFoO8"
    },
    {
        id: 5,
        name: "Tiko",
        email: "tiko@mail.com",
        "password": "$2a$10$hoKa68wiWcqxPNjPv2cQQuMnEDf5j6/EM4YY7u7HHS.1Z94etprpy",
        "updatedAt": "2022-04-20T14:17:26.948Z",
        "createdAt": "2022-04-20T14:17:26.858Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NTA0NjQyNDZ9.Di2eqmBOI02rcG_ztZdDrhrrRw9agLb_G--ozXfFoO8"
    },
    {
        id: 6,
        name: "Ero",
        email: "ero@mail.com",
        "password": "$2a$10$hoKa68wiWcqxPNjPv2cQQuMnEDf5j6/EM4YY7u7HHS.1Z94etprpy",
        "updatedAt": "2022-04-20T14:17:26.948Z",
        "createdAt": "2022-04-20T14:17:26.858Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NTA0NjQyNDZ9.Di2eqmBOI02rcG_ztZdDrhrrRw9agLb_G--ozXfFoO8"
    }
]


const admins = [
    {
        id: 1,
        name: "Admin",
        email: "admin@mail.com",
        "password": "$2a$10$hoKa68wiWcqxPNjPv2cQQuMnEDf5j6/EM4YY7u7HHS.1Z94etprpy",
        "updatedAt": "2022-04-20T14:17:26.948Z",
        "createdAt": "2022-04-20T14:17:26.858Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NTA0NjQyNDZ9.Di2eqmBOI02rcG_ztZdDrhrrRw9agLb_G--ozXfFoO8"
    }
]


const aboutUs = [
    {
        titleHy: "About Us hy",
        titleEn: "About Us en",
        titleRu: "About Us ru",
        textHy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. essentially unc",
        textEn: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has r, a Latin onsectetur,literature, discovered the und",
        textRu: "here are many variations of passages of Lorem Ipsum available, but the majslhing embarrasto repeat predefined chunks as n",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        images: "https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg,https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg,https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg,https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg"
    }
]

const contacts = [
    {
        location: "Yerevan",
        email: "cake@gmail.com",
        phone: "099999999",
        facebook: "facebook.com",
        instagram: "instagram.com",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const aboutUsInfo = [
    {
        titleHy: "About Us Info Hy 1",
        titleEn: "About Us Info En 1",
        titleRu: "About Us Info Ru 1",
        textHy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. essentially unc",
        textEn: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has r, a Latin onsectetur,literature, discovered the und",
        textRu: "here are many variations of passages of Lorem Ipsum available, but the majslhing embarrasto repeat predefined chunks as n",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        image: "https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg"
    },
    {
        titleHy: "About Us Info Hy 2",
        titleEn: "About Us Info En 2",
        titleRu: "About Us Info Ru 2",
        textHy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. essentially unc",
        textEn: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has r, a Latin onsectetur,literature, discovered the und",
        textRu: "here are many variations of passages of Lorem Ipsum available, but the majslhing embarrasto repeat predefined chunks as n",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        image: "https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg"
    },
    {
        titleHy: "About Us Info Hy 3",
        titleEn: "About Us Info En 3",
        titleRu: "About Us Info Ru 3",
        textHy: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. essentially unc",
        textEn: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has r, a Latin onsectetur,literature, discovered the und",
        textRu: "here are many variations of passages of Lorem Ipsum available, but the majslhing embarrasto repeat predefined chunks as n",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        image: "https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg"
    }
]

const subscribers = [
    {
        name: "Vahe",
        email: "vahe@mail.com",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Hamo",
        email: "hamo@mail.com",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Gago",
        email: "gago@mail.com",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Ero",
        email: "ero@mail.com",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Vacho",
        email: "vacho@mail.com",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
]

const contactus = [
    {
        name: "Vacho",
        email: "vacho@mail.com",
        subject: "hello",
        message: "hellllllloooooooooooo",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Vacho",
        email: "vacho@mail.com",
        subject: "hello",
        message: "hellllllloooooooooooo",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Vacho",
        email: "vacho@mail.com",
        subject: "hello",
        message: "hellllllloooooooooooo",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Vacho",
        email: "vacho@mail.com",
        subject: "hello",
        message: "hellllllloooooooooooo",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        name: "Vacho",
        email: "vacho@mail.com",
        subject: "hello",
        message: "hellllllloooooooooooo",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },

]

const homebanner = [
    {
        titleHy: "Cake Hy",
        titleEn: "Cake En",
        titleRu: "Cake Ru",
        subTitleHy: "Cake Sub Title Hy",
        subTitleEn: "Cake Sub Title Hy",
        subTitleRu: "Cake Sub Title Hy",
        image: "https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg,https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const aboutUsBanner = [
    {
        titleHy: "About Cake Hy",
        titleEn: "About Cake En",
        titleRu: "About Cake Ru",
        subTititleHy: "About Cake Sub Title Hy",
        subTitleEn: "About Cake Sub Title Hy",
        subTitleRu: "About Cake Sub Title Hy",
        image: "https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cloudinary_id: "1"
    },
]

const category = [
    {
        nameHy: "Pie Hy",
        nameRu: "Pie Ru",
        nameEn: "Pie En",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        nameHy: "Cake Hy",
        nameRu: "Cake Ru",
        nameEn: "Cake En",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        nameHy: "Wedding Hy",
        nameRu: "Wedding Ru",
        nameEn: "Wedding En",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        nameHy: "Children Hy",
        nameRu: "Children Ru",
        nameEn: "Children En",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const product = [
    {
        nameHy: "tort 1 hy",
        nameRu: "tort 1 ru",
        nameEn: "tort 1 en",
        model: "898989",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtfBMMMly0J3FcTnkLJiLSgViwQZf_z7HViGuwYYrnRP4e9-KrcihyE0rppXPi4aoHWw&usqp=CAU",
        price: 6500,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "1",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "",
        cake_price: "",
        cake_addition_name_hy: "",
        cake_addition_name_ru: "",
        cake_addition_name_en: "",
        cake_addition_price: "",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 2 hy",
        nameRu: "tort 2 ru",
        nameEn: "tort 2 en",
        model: "898989",
        image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg",
        price: 7500,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "2",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "10-12,12-14,14-16",
        cake_price: "5400,6800,9520",
        cake_addition_name_hy: "marcipan hy,mankakan hy,vardi terriknerov hy,mi urish dzev hy, prosto hamov hy, shat hamov hy",
        cake_addition_name_ru: "marcipan ru,mankakan ru,vardi terriknerov ru,mi urish dzev ru, prosto hamov ru, shat hamov ru",
        cake_addition_name_en: "marcipan en,mankakan en,vardi terriknerov en,mi urish dzev en, prosto hamov en, shat hamov en",
        cake_addition_price: "3000,5600,4500,2500,9800,7500",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 3 hy",
        nameRu: "tort 3 ru",
        nameEn: "tort 3 en",
        model: "898989",
        image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg",
        price: 4000,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "3",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "10-12,12-14,14-16",
        cake_price: "1200,5700,9520",
        cake_addition_name_hy: "marcipan hy,mankakan hy,vardi terriknerov hy,mi urish dzev hy, prosto hamov hy, shat hamov hy",
        cake_addition_name_ru: "marcipan ru,mankakan ru,vardi terriknerov ru,mi urish dzev ru, prosto hamov ru, shat hamov ru",
        cake_addition_name_en: "marcipan en,mankakan en,vardi terriknerov en,mi urish dzev en, prosto hamov en, shat hamov en",
        cake_addition_price: "3000,5600,4500,2500,9800,7500",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"

    },
    {
        nameHy: "tort 4 hy",
        nameRu: "tort 4 ru",
        nameEn: "tort 4 en",
        model: "898989",
        image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg",
        price: 8600,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "4",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "",
        cake_price: "",
        cake_addition_name_hy: "",
        cake_addition_name_ru: "",
        cake_addition_name_en: "",
        cake_addition_price: "",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 5 hy",
        nameRu: "tort 5 ru",
        nameEn: "tort 5 en",
        model: "898989",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tlkr-wV7ZgRsCoQkFb-0shmPBPwi8g2VPw&usqp=CAU",
        price: 1230,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "1",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "10-12,12-14,14-16",
        cake_price: "5100,6500,8220",
        cake_addition_name_hy: "marcipan hy,mankakan hy,vardi terriknerov hy,mi urish dzev hy, prosto hamov hy, shat hamov hy",
        cake_addition_name_ru: "marcipan ru,mankakan ru,vardi terriknerov ru,mi urish dzev ru, prosto hamov ru, shat hamov ru",
        cake_addition_name_en: "marcipan en,mankakan en,vardi terriknerov en,mi urish dzev en, prosto hamov en, shat hamov en",
        cake_addition_price: "3000,5600,4500,2500,9800,7500",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 6 hy",
        nameRu: "tort 6 ru",
        nameEn: "tort 6 en",
        model: "898989",
        image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg",
        price: 4561,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "2",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "",
        cake_price: "",
        cake_addition_name_hy: "",
        cake_addition_name_ru: "",
        cake_addition_name_en: "",
        cake_addition_price: "",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 7 hy",
        nameRu: "tort 7 ru",
        nameEn: "tort 7 en",
        model: "898989",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtfBMMMly0J3FcTnkLJiLSgViwQZf_z7HViGuwYYrnRP4e9-KrcihyE0rppXPi4aoHWw&usqp=CAU",
        price: 7826,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "3",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "1,2,3",
        cake_price: "1,2,3",
        cake_addition_name_hy: "marcipan hy,mankakan hy,vardi terriknerov hy,mi urish dzev hy, prosto hamov hy, shat hamov hy",
        cake_addition_name_ru: "marcipan ru,mankakan ru,vardi terriknerov ru,mi urish dzev ru, prosto hamov ru, shat hamov ru",
        cake_addition_name_en: "marcipan en,mankakan en,vardi terriknerov en,mi urish dzev en, prosto hamov en, shat hamov en",
        cake_addition_price: "3000,5600,4500,2500,9800,7500",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 8 hy",
        nameRu: "tort 8 ru",
        nameEn: "tort 8 en",
        model: "898989",
        image: "http://res.cloudinary.com/armcoding/image/upload/v1650964258/ovb59nfgjxbynyeg7jy2.png,http://res.cloudinary.com/armcoding/image/upload/v1650964265/wdzxzt7upnvktztk1jzh.png,http://res.cloudinary.com/armcoding/image/upload/v1650964275/xy1mk0ntzd2penxhlmto.png",
        price: 300,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "3",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "",
        cake_price: "",
        cake_addition_name_hy: "",
        cake_addition_name_ru: "",
        cake_addition_name_en: "",
        cake_addition_price: "",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 9 hy",
        nameRu: "tort 9 ru",
        nameEn: "tort 9 en",
        model: "898989",
        image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg",
        price: 99999,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "2",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "1,2,3",
        cake_price: "1,2,3",
        cake_addition_name_hy: "marcipan hy,mankakan hy,vardi terriknerov hy,mi urish dzev hy, prosto hamov hy, shat hamov hy",
        cake_addition_name_ru: "marcipan ru,mankakan ru,vardi terriknerov ru,mi urish dzev ru, prosto hamov ru, shat hamov ru",
        cake_addition_name_en: "marcipan en,mankakan en,vardi terriknerov en,mi urish dzev en, prosto hamov en, shat hamov en",
        cake_addition_price: "3000,5600,4500,2500,9800,7500",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 10 hy",
        nameRu: "tort 10 ru",
        nameEn: "tort 10 en",
        model: "898989",
        image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg",
        price: 8524,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "3",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "1,2,3",
        cake_price: "1,2,3",
        cake_addition_name_hy: "marcipan hy,mankakan hy,vardi terriknerov hy,mi urish dzev hy, prosto hamov hy, shat hamov hy",
        cake_addition_name_ru: "marcipan ru,mankakan ru,vardi terriknerov ru,mi urish dzev ru, prosto hamov ru, shat hamov ru",
        cake_addition_name_en: "marcipan en,mankakan en,vardi terriknerov en,mi urish dzev en, prosto hamov en, shat hamov en",
        cake_addition_price: "3000,5600,4500,2500,9800,7500",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    },
    {
        nameHy: "tort 11 hy",
        nameRu: "tort 11 ru",
        nameEn: "tort 11 en",
        model: "898989",
        image: "https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-8.jpg",
        price: 2300,
        descriptionHy: " hy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionRu: " ru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        descriptionEn: "en Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        category_id: "4",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
        cake_count: "",
        cake_price: "",
        cake_addition_name_hy: "",
        cake_addition_name_ru: "",
        cake_addition_name_en: "",
        cake_addition_price: "",
        long_description_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_ey: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        long_description_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        adition_info_hy: "hy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_ru: "ru Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        adition_info_en: "en Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol",
        addition_info_value:"500,600,700"
    }
]
const basket = [
    {
        product_id: "1",
        user_id: "5",
        quantity: "1",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        product_id: "2",
        user_id: "1",
        quantity: "4",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        product_id: "3",
        user_id: "5",
        quantity: "8",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        product_id: "6",
        user_id: "3",
        quantity: "2",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        product_id: "4",
        user_id: "7",
        quantity: "9",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
]

const homeFooter = [
    {
        titleHy: "hy Story Behind Every piece",
        titleRu: "hy Story Behind Every piece",
        titleEn: "hy Story Behind Every piece",
        subTitleHy: "hy It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        subTitleRu: "ru It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        subTitleEn: "en It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        image: "https://cdn.shopify.com/s/files/1/2107/6729/files/GoldenCurl_BlogPost_287656177_Image24_1024x1024.png?v=1598024030",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const aboutFooter = [
    {
        titleHy: "hy Story Behind Every piece",
        titleRu: "hy Story Behind Every piece",
        titleEn: "hy Story Behind Every piece",
        subTitleHy: "hy Company name ",
        subTitleRu: "ru  Company name",
        subTitleEn: "en Company name",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXUp2t-hdQw_-At8QgSR2DB1hRee6HtLxdYd8ACZpcBNHm3jS7s-iPdki9cfysdnhMBA&usqp=CAU",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const productFooter = [
    {
        titleHy: "hy Product Behind Every piece",
        titleRu: "hy Product Behind Every piece",
        titleEn: "hy Product Behind Every piece",
        subTitleHy: "hy Company name ",
        subTitleRu: "ru  Company name",
        subTitleEn: "en Company name",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKJeYqwAA4l44tOTk51h1lubTMUPDIxEUO5HAOl-Ouuh-mRvTBtrwqsFlwXa04vIg_LM&usqp=CAU",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const detailFooter = [
    {
        titleHy: "hy Product Detail Behind Every piece",
        titleRu: "hy Product Detail  Behind Every piece",
        titleEn: "hy Product Detail  Behind Every piece",
        subTitleHy: "hy Company name ",
        subTitleRu: "ru  Company name",
        subTitleEn: "en Company name",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKJeYqwAA4l44tOTk51h1lubTMUPDIxEUO5HAOl-Ouuh-mRvTBtrwqsFlwXa04vIg_LM&usqp=CAU",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const chooseData = [
    {
        titleHy: "hy Why Choose us ",
        titleRu: "ru Why Choose us ",
        titleEn: "en Why Choose us ",
        textHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        textRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        textEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bPBqwM-3tCtb28RVYPwUU81LOnGocKdgcg&usqp=CAU",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const delevery = [
    {
        bannerImage: "http://i.stack.imgur.com/ZuAmS.jpg",
        titleHy: "hy Delivary Terms",
        titleRu: "ru Delivary Terms",
        titleEn: "en Delivary Terms",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z"
    }
]

const deleveryData = [
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const termData = [
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        subjectHy: "hy Why Choose us ",
        subjectRu: "ru Why Choose us ",
        subjectEn: "en Why Choose us ",
        answerHy: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerRu: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        answerEn: "Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,Lorem ipsum dolor sit ametconsectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]


const terms = [
    {
        bannerImage: "http://i.stack.imgur.com/ZuAmS.jpg",
        titleHy: "hy Delivary Terms",
        titleRu: "ru Delivary Terms",
        titleEn: "en Delivary Terms",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const deleveryValues = [
    {
        loacation: "Yerevan",
        price: "2560",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        loacation: "Yerevan1",
        price: "2560",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        loacation: "Yerevan1",
        price: "2560",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        loacation: "Yerevan1",
        price: "2560",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        loacation: "Yerevan1",
        price: "2560",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        loacation: "Yerevan1",
        price: "2560",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    },
    {
        loacation: "Yerevan1",
        price: "2560",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const productBanner = [
    {
        image: "http://i.stack.imgur.com/ZuAmS.jpg",
        titleHy: "hy Delivary Terms",
        titleRu: "ru Delivary Terms",
        titleEn: "en Delivary Terms",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const wishBanner = [
    {
        image: "http://i.stack.imgur.com/ZuAmS.jpg",
        titleHy: "hy Delivary Terms",
        titleRu: "ru Delivary Terms",
        titleEn: "en Delivary Terms",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const basketBanner = [
    {
        image: "http://i.stack.imgur.com/ZuAmS.jpg",
        titleHy: "hy Delivary Terms",
        titleRu: "ru Delivary Terms",
        titleEn: "en Delivary Terms",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

const detailBanner = [
    {
        image: "http://i.stack.imgur.com/ZuAmS.jpg",
        titleHy: "hy Delivary Terms",
        titleRu: "ru Delivary Terms",
        titleEn: "en Delivary Terms",
        updatedAt: "2022-04-20T14:17:26.948Z",
        createdAt: "2022-04-20T14:17:26.858Z",
    }
]

module.exports = {
    users,
    admins,
    aboutUs,
    contacts,
    aboutUsInfo,
    subscribers,
    contactus,
    homebanner,
    aboutUsBanner,
    category,
    product,
    basket,
    homeFooter,
    aboutFooter,
    productFooter,
    detailFooter,
    chooseData,
    delevery,
    terms,
    deleveryValues,
    deleveryData,
    termData,
    productBanner,
    wishBanner,
    basketBanner,
    detailBanner
}