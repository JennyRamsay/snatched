use jaiAesthetics;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Jennifer Ramsay",
        "address": "9 Braidfauld Place", 
        "email": "jenny.ramsay@gmail.com", 
        "date_of_birth": "04/01/1984"
    },
    
    {
        "name": "Nadine Heltberg",
        "address": "69 Grampian Way", 
        "email": "Nadine.Heltberg@gmail.com", 
        "date_of_birth": "11/11/1988"
    }]),

db.treatments.insertMany([

    {
        "package": "2.2ml Package",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£200.00"
    },
        
    {
        "package": "Botox 1 area",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£90.00"
    },

    {
        "package": "Botox 2 areas",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£110.00"
    },

    {
        "package": "Botox 3 areas",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£80.00"
    },

    {
        "package": "0.5ml lip filler",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£180.00"
    },

    {
        "package": "Russian lip filler",
        "description": "Russian lips are a flat lip technique that lifts the lip and defines the cupids bow",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£110.00"
    },

    {
        "package": "1.1ml lip filler",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£100.00"
    },

    {
        "package": "1.1ml Filler Any Area",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£100.00"
    },

    {
        "package": "3.3ml Filler Package",
        "Length_of_service": "30 minutes",
        "Cost_of_service": "£270.00"
    },

    {
        "package": "4.4ml Filler Package",
        "Length_of_service": "30 minutes",
        "Cost_of_service": "£350.00"
    },

    {
        "package": "5.5ml Filler Package",
        "Length_of_service": "30 minutes",
        "Cost_of_service": "£400.00"
    },

    {
        "package": "1.1ml Filler Any Area",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£100.00"
    },

    {
        "package": "Lip Dissolve",
        "description": "hyaluronidase is used to dissolve filler",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£100.00"
    },

    {
        "package": "Jalupro Under Eye Skin Booster",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£100.00"
    },

    {
        "package": "Tear Trough Filler ( Under Eye )",
        "description": "Consultation required before booking this treatment as not everyone is a suitable please message the page and send over clear photos of under eyes or book a free consultation on our booking system.",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£150.00"
    },

    {
        "package": "Fat Dissolve Small Area",
        "small_area": "Chin, Lower tummy, bra fat, love handles, knees, under buttocks",
        "description": "Fat dissolve is an acid called deoxycholic that is naturally produced in the body that breaks down the fat cells when its injected directly into the fat pockets the fat is broken down and flushed out the body",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£50.00"
    },

    {
        "package": "Fat Dissolve Large Area",
        "large_area": "Full Tummy, Inner thighs, Outer thighs, Arms, Buttocks",
        "description": "Fat dissolve is an acid called deoxycholic that is naturally produced in the body that breaks down the fat cells when its injected directly into the fat pockets the fat is broken down and flushed out the body",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£70.00"
    },

    {
        "package": "Fox Eye Threads",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£200.00"
    },

    {
        "package": "Mid Face Threads",
        "Length_of_service": "30 minutes",
        "Cost_of_service": "£400.00"
    },

    {
        "package": "Full Face Threads",
        "Length_of_service": "30 minutes",
        "Cost_of_service": "£700.00"
    },

    {
        "package": "Plasma Under Eyes",
        "description": "Fibroblast plasma is an absolute revolutionary procedure which requires zero surgery. It is a non-surgical, non-invasive treatment that is designed to tighten and lift the skin, shrinking excess skin, crow’s feet, bags and wrinkles. It is known to be radical in wrinkle smoothing and eyelid tightening, reducing hooded eyelids.",
        "Length_of_service": "30 minutes",
        "Cost_of_service": "£130.00"
    },

    {
        "package": "Plasma Eyelids",
        "description": "Fibroblast plasma is an absolute revolutionary procedure which requires zero surgery. It is a non-surgical, non-invasive treatment that is designed to tighten and lift the skin, shrinking excess skin, crow’s feet, bags and wrinkles. It is known to be radical in wrinkle smoothing and eyelid tightening, reducing hooded eyelids.",
        "Length_of_service": "30 minutes",
        "Cost_of_service": "£130.00"
    },

    {
        "package": "Plasma Smokers Lines",
        "description": "Fibroblast plasma is an absolute revolutionary procedure which requires zero surgery. It is a non-surgical, non-invasive treatment that is designed to tighten and lift the skin, shrinking excess skin, crow’s feet, bags and wrinkles. It is known to be radical in wrinkle smoothing and eyelid tightening, reducing hooded eyelids.",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£100.00"
    },

    {
        "package": "Plasma Crows Feet",
        "description": "Fibroblast plasma is an absolute revolutionary procedure which requires zero surgery. It is a non-surgical, non-invasive treatment that is designed to tighten and lift the skin, shrinking excess skin, crow’s feet, bags and wrinkles. It is known to be radical in wrinkle smoothing and eyelid tightening, reducing hooded eyelids.",
        "Length_of_service": "15 minutes",
        "Cost_of_service": "£100.00"
    }

]);