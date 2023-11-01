import Joi from "joi";

const submitValidator = Joi.object( {
    task:Joi.string().pattern(/^[\d+\s\a-zA-Zа-яА-яёЁіІїЇ]{1,200}$/).required().messages({
        "string.pattern.base":"Minimum 1, maximum 200 characters, letters and numbers"
    })
})

export {
    submitValidator
}