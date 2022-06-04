// @desc Get resturants 
// @route GET /api/resturants/
// @access Private 
const getResturants = (req, res) => {
    res.status(200).json({Status : true, Message : 'List all resturants.'})
}

// @desc Store resturant
// @route POST /api/returants
// @access Private
const storeResurant = (req, res) => {
    res.status(201).json({Status : true, Message : 'Resturante created.'})
}

// @desc Get resturant
// @route GET /api/returants/:id
// @access Private
const getResturant = (req, res) => {
    res.status(200).json({Status : true, Message : 'Here is the resturant you are looking for.'})
}

// @desc Update resturant 
// @route PUT /api/resturants/:id
// @access Private
const updateResturant = (req, res) => {
    res.status(200).json({Status : true, Message: 'Resturant updated.'})
}

// @desc Delete resturant
// @route DELETE /api/resturants/:id
// @access Private
const deleteResturant = (req, res) => {
    res.status(200).json({Status : true, Message : 'Resturant deleted.'})
}



module.exports = {
    getResturants,
    storeResurant,
    getResturant,
    updateResturant,
    deleteResturant,
}