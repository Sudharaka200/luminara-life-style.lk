import Realestate from "../models/Realestate.js";

//create Post
export const createRealestate = async (req, res) => {
  try {
    const {
      title,
      category,
      coverImg,
      companyLogo,
      price,
      description,
      location,
      video,
      images,
      landMap,
      googleMap,
      beds,
      baths,
    } = req.body;

    // Basic input validation (optional, but recommended)
    if (!title || !category || !coverImg || !companyLogo || !price || !description || !location || !googleMap || !landMap) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const newRealEstate = new Realestate({
      title,
      category,
      coverImg,
      companyLogo,
      price,
      description,
      location,
      video,
      images: images || [], 
      landMap,
      googleMap,
      beds,
      baths,
    });

    const savedRealEstate = await newRealEstate.save();
    res.status(201).json({
      message: `${category} RealEstate created successfully`,
      data: savedRealEstate,
    });
  } catch (error) {
    console.error("Error creating RealEstate:", error);
    res.status(400).json({
      message: "Failed to create RealEstate",
      errors: error.errors || error.message,
    });
  }
};

//get all Post
export const getAllRealestate = async (req, res) => {
    try {
        const realestate = await Realestate.find();
        res.status(200).json({ succes: true, realestate });
    } catch (error) {
        console.error("Error fetching realestate", error);
        res.status(200).json({ succes: false, message: "Server Error" });
    }
};

//get Post by Id
export const getPostById = async (req, res) => {
    try {
        const realestate = await Realestate.findById(req.params.id);
        if(!realestate)
            return res.status(400).json({ succes: false, message: "Post Not Found !"});

        res.status(200).json({ succes: true, realestate });
    }catch (error) {
        console.error("Error feching Product", error);
        res.status(500).json({ succes: false, message: "Server Error" });
    }
};

//update Post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            category,
            coverImg,
            companyLogo,
            price,
            description,
            location,
            video,
            images,
            landMap,
            googleMap,
            beds,
            baths,
        } = req.body;

        const updatePost = await Realestate.findByIdAndUpdate(
            id,
            {
                title,
                category,
                coverImg,
                companyLogo,
                price,
                description,
                location,
                video,
                images,
                landMap,
                googleMap,
                beds,
                baths,
            },
            {new: true, runValidators: true}
        );

        if(!updatePost) {
            return res.status(404).json ({ message: "Post not Found" });
        }

        res.status(200).json({
            message: "Post updated Succesfully",
            realestate: updatePost,
        });

    } catch (error) {
        console.error("Error updating Posy:", error);
        res.status(500).json({ message: "Server error" });
  }
};

//Delete Post
export const deletePost = async (req, res) => {
    try {
        const { id } =  req.params;

        const deletePost =  await Realestate.findByIdAndDelete(id);

        if(!deletePost) {
            return res.status(404).json({ message: "Post not Found" });
        }

        res.status(200).json({ message: "Post Deleted Successfully", realestate: deletePost });
    } catch (error) {
        console.error("Error Delete Post", error);
        res.status(500).json({ message: "Server Error" });
    }
};