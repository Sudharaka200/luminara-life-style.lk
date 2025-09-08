import News from "../models/News.js";

//News Create
export const createNews =  async (req, res) => {
    try {
        const {
            image, title, description
        } = req.body;

        const newNews =  new News({
            image, title, description
        });

        await newNews.save();
        res.status(200).json({ message: "News Created Successfully!", news: newNews });
    } catch (error) {
        console.error("Error creating News", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Get All news
export const getAllNews =  async (req, res) => {
    try {
        const news =  await News.find();
        res.status(200).json({ success: true, news });
    } catch ( error ) {
        console.error("Error fetching News", error);
        res.status(500).json({ success : false, message: "Server Error" });
    }
};

//get News by ID
export const getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if(!news) 
            return res.status(404).json({ success: false, message: "News Not Found" });

            res.status(200).json({ success: true, news });
    } catch (error) {
        console.error("Error fetching news", error);
        res.status(500).json({ success: false, message: "Server Error" });
    } 
};

//update news
export const updateNews = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            image, title, description
        } = req.body;

        const updateNews = await News.findByIdAndUpdate(
            id,
            {
                image, title, description
            },
            { new: true, runValidators: true}
        );

        if(!updateNews) {
            return res.status(404).json({ message: "News Not Found" });
        }
        res.status(200).json({
            message : "News Update Successfully",
            news: updateNews,
        });
    } catch (error) {
        console.error("Error update News", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Delete News
export const deleteNews = async ( req, res ) => {
    try {
        const {id} = req.params;

        const deleteNews =  await News.findByIdAndDelete(id);
        
        if (!deleteNews) {
            return res.status(404).json({ message: "News not Found" });
        }

        res.status(200).json({ message: "News Deleted Successfully", news: deleteNews });
    } catch (error) {
        console.error("Error Delete news", error);
        res.status(500).json({ message: "Server Error" });
    }
};

