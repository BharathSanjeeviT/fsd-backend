import Joi from "joi";
 
const userBody = Joi.object({
  name: Joi.string().min(3).max(10).required(),
	emp_id: Joi.string().min(3).max(10).required(),
	email: Joi.string().email().required(),
	department: Joi.string().min(3).max(10).required(),
	role: Joi.string().min(3).max(10).required(),
	doj: Joi.date().required(),
})

export { 
	userBody
}
