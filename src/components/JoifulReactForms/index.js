import TextElement from './TextElement'

export default {
    elementTypes: {
        text: TextElement
    },
    options: {
        language: {
            string: {
                regex: {
                    base: 'with value "{{!value}}" is invalid'
                }
            }
        }
    }
}
