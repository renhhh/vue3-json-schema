const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajv = new Ajv()
addFormats(ajv)
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      _test: false
    },
    age: {
      type: 'number'
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    }
  },
  required: ['isWorker']
  // additionalProperties: false
}

const data = {
  name: 'haha',
  age: 123,
  pets: ['cat'],
  isWorker: false
}
ajv.addKeyword({
  keyword: '_test',
  validate(schema, data) {
    console.log(schema, data)
    if (schema) {
      return true
    } else return schema.length === 6
  }
})
const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) {
  // console.log(validate.errors)
}
