import Joi from 'joi';

export const validatorLogin = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({'message':'validator username and password' ,error});
    }
    next();
}
export const validatorRegister = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json(error);
    }
    next();
}

export const validatorSupplier = (req, res, next) => {
    const schema = Joi.object({
        companyName: Joi.string().required(),
        description: Joi.string().required(),
        contactEmail: Joi.string().email().required(),
        contactPhone: Joi.string().regex(/^[0-9]{10}$/).required(),
        address: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json(error);
    }
    next();
}

export const validatorStock = (req, res, next) => {
    const schema = Joi.object({
        storageAddress: Joi.string().required(),
        storageName: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json(error);
    }
    next();
}

export const validatorProduct = (req, res, next) => {
    const schema = Joi.object({
      IDstock: Joi.string().required(),
      IDSupplier: Joi.string().required(),
      IDCategory: Joi.array().items(Joi.string().required()),
      type: Joi.string().required().length(20),
      nameProduct: Joi.string().required(),
      pictureLinks: Joi.array().items(Joi.string()),
      description: Joi.string().required(),
      color: Joi.array().items(Joi.string().required().length(20)),
      size: Joi.array().items(Joi.string().required().length(20)),
      price: Joi.string().required(),
    });
  
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json(error);
    }
  
    next();
}

