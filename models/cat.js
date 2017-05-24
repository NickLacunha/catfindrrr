import mongoose from 'mongoose';

var kittySchema = mongoose.Schema({
	// fields???
	// whatever identifiers are needed for cloudinary
	// dimensions if possible
	// geotag eventually
	// date submitted?
	// whatever other fields we let the user add to the thing
});

kittySchema.statics.random = function() {
	var output;
	this.count().exec( function (err, count) {
		var randomOffset = Math.floor(Math.random() * count);
		this.findOne().skip(randomOffset).exec( function (err, result){
			// result is cat.			
			console.log(result);
			output = result;
		});
	});
	return output;
};

var Kitten = mongoose.model('Kitten', kittySchema);

export default Kitten;