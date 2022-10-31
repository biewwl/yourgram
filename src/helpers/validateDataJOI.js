import Joi from "joi";
import { verifyExistUser } from "../mocks/fakeUsers";

const schema = Joi.object({
  nick: Joi.string()
    .pattern(/^([0-9a-z_.]+|[0-9A-Z]+)$/)
    .min(3)
    .max(15)
    .required()
    .messages({
      "string.pattern.base":
        "Nick must not contain special characters or capital letters!",
    }),
  user: Joi.string().min(3).max(15).required(),
  email: Joi.string()
    .pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    .required()
    .messages({
      "string.pattern.base": "The email does not have the correct format!",
    }),
  password: Joi.string().min(6).required(),
});

const validate = (data, { nick, email }) => {
  const errors = [];
  const existData = verifyExistUser(data.nick, data.email);
  const validNick = !existData.existNick || nick === data.nick;
  const validEmail = !existData.existEmail || email === data.email;
  if (!validNick) errors.push({ error: "Nickname in use!" });
  if (!validEmail) errors.push({ error: "Email in use!" });
  if (
    data.nick[data.nick.length - 1] === "." ||
    data.nick[data.nick.length - 1] === "_"
  )
    errors.push({ error: "Nick cannot end with special characters!" });
  const validateSchema = schema.validate(data);
  const { error } = validateSchema;
  if (error) errors.push({ error: error.message });
  if (errors.length > 0) return { error: errors };
  return { message: "valid!" };
};

export default validate;
