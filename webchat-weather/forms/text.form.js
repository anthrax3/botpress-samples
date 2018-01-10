module.exports = {
  id: 'text',
  title: 'Regular Text Message',
  ummBloc: '#text',

  jsonSchema: {
    title: 'Regular Text Message',
    description: 'Create a regular text message',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'Content'
      }
    }
  },

  uiSchema: {},
  computeFormData: formData => formData,
  computePreviewText: formData => formData.text,
  computeMetadata: null
}
