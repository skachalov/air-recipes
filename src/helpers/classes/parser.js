export default class Parser {
    static collectionToString(collection) {
        return JSON.stringify(collection)
    }
    static stringToCollection(string) {
        return JSON.parse(string)
    }
}