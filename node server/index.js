const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/form');
    console.log('mongodb connected');
}

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    availability: {
        type: [String],
        required: true
    },
    jobPreferences: {
        type: [String],
        required: true
    },
    daysPreferences: {
        type: [String],
        required: true
    }
});

const volunteerModel = mongoose.model('volunteer', volunteerSchema);

const strayAnimalSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: true,
        unique: true
    },
    location: String,
    breed: String,
    ageGroup: String,
    gender: String,
    category: String,
    vaccinationDate: Date,
    nextVaccinationDate: Date,
    adoptionStatus: String,
    vaccinesGiven: [String],
    diseases: [String],
    image: String,
});

const StrayAnimal = mongoose.model('StrayAnimal', strayAnimalSchema);

const server = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(bodyParser.json());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
server.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const upload = multer({ storage: storage });

main().catch(err => console.log(err));

server.post('/volunteer', async (req, res) => {
    console.log('Received POST request for volunteer');
    try {
        let newVolunteer = new volunteerModel({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            location: req.body.location,
            availability: req.body.availability,
            jobPreferences: req.body.jobPreferences,
            daysPreferences: req.body.daysPreferences,
        });
        const doc = await newVolunteer.save();
        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ message: 'An error occurred', error });
    }
});

server.post('/volunteer_login', async (req, res) => {
    console.log('Received POST request for volunteer_login');
    const { username, password } = req.body;
    try {
       const volunteer = await volunteerModel.findOne({ username, password });
       if (!volunteer) {
         return res.status(400).json({ message: 'Invalid username or password' });
       }
       res.json({ message: 'Login successful', volunteer });
    } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Server error' });
    }
});

server.post('/strayAnimal', upload.single('image'), async (req, res) => {
    console.log('Received POST request for stray animal');
    try {
        let newStrayAnimal = new StrayAnimal({
            uniqueId: req.body.uniqueId,
            location: req.body.location,
            breed: req.body.breed,
            ageGroup: req.body.ageGroup,
            gender: req.body.gender,
            adoptionStatus: req.body.adoptionStatus,
            category: req.body.category,
            vaccinationDate: req.body.vaccinationDate,
            nextVaccinationDate: req.body.nextVaccinationDate,
            vaccinesGiven: req.body.vaccinesGiven,
            diseases: req.body.diseases,
            image: req.file.path, // Save the path of the uploaded image
        });
        const doc = await newStrayAnimal.save();
        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.error('Error handling POST request:', error);
        res.status(500).json({ message: 'An error occurred', error });
    }
});


server.get('/strayAnimal/category/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const db = mongoose.connection.db;
        const collection = db.collection('strayanimals');

        const pipeline = [
            { $match: { category: category } },
            { $group: { _id: { location: "$location", category: "$category" }, count: { $sum: 1 } } },
            { $project: { _id: 0, location: "$_id.location", category: "$_id.category", count: 1 } }
        ];

        const result = await collection.aggregate(pipeline).toArray();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

server.get('/locationData', async (req, res) => {
    try {
        const strayAnimalCounts = await StrayAnimal.aggregate([
            { $group: { _id: "$location", count: { $sum: 1 } } },
            { $project: { _id: 0, location: "$_id", count: 1 } }
        ]);

        const volunteerCounts = await volunteerModel.aggregate([
            { $group: { _id: "$location", count: { $sum: 1 } } },
            { $project: { _id: 0, location: "$_id", count: 1 } }
        ]);

        const locations = [...new Set([...strayAnimalCounts.map(sa => sa.location), ...volunteerCounts.map(v => v.location)])];

        const locationData = locations.map(location => {
            const strayAnimalCount = strayAnimalCounts.find(sa => sa.location === location)?.count || 0;
            const volunteerCount = volunteerCounts.find(v => v.location === location)?.count || 0;
            console.log(location);
            console.log(strayAnimalCount);
            console.log(volunteerCount);
            return { location, strayAnimalCount, volunteerCount };
        });
        res.json(locationData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

server.get('/volunteerJobPreferences', async (req, res) => {
    try {
        const result = await volunteerModel.aggregate([
            {
                $group: {
                    _id: { location: "$location", jobPreference: { $arrayElemAt: ["$jobPreferences", 0] } },
                    count: { $sum: 1 }
                }
            },
            {
                $group: {
                    _id: "$_id.location",
                    jobPreferences: {
                        $push: {
                            jobPreference: "$_id.jobPreference",
                            count: "$count"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    location: "$_id",
                    jobPreferences: 1
                }
            }
        ]);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error fetching volunteer job preferences:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

server.listen(8081, () => {
    console.log('listening on port 8081');
});