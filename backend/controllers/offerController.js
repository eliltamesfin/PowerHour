import Offer from "../models/offer.js";

const postNewOffer = async (req, res) => {
  try {
    const { title, description, monthlyPrice, deadline, duration } = req.body;
    const newOffer = new Offer({ title, description, monthlyPrice, deadline, duration });

    const existingOffer = await Offer.findOne({ title });
    if(existingOffer) {
      return res.status(400).json({ error: 'The Offer with the same title already exists' });
    }
    await newOffer.save();
    res.status(201).json({message: 'Offer created successfully', offer: newOffer});
    res.json(newOffer);
  } catch (error) {
    res.status(500).json({ error: 'Error saving offer', details: error.message });
  }
};

const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching offers', details: error.message });
  }
};

const updateOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, monthlyPrice, deadline, duration } = req.body;
    const updatedOffer = await Offer.findByIdAndUpdate(
      id,
      { title, description, monthlyPrice, deadline, duration },
      { new: true }
    );

    if (!updatedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }

    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ error: 'Error updating offer', details: error.message });
  }
};

const deleteOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOffer = await Offer.findByIdAndDelete(id);

    if (!deletedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }

    res.json(deletedOffer);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting offer', details: error.message });
  }
};

export { postNewOffer, getAllOffers, updateOfferById, deleteOfferById };
