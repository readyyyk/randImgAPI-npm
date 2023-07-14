/**
 * Client API for {@link https://github.com/readyyyk/randImgAPI}
*/
class HashMapApi {
    models = ['hashmap', 'picsum'];

    /**
     * @constructor
     * @param baseUrl {string}  - URL host that handles api
     */
    constructor(baseUrl) {
        try {
            const url = new URL(baseUrl);
        } catch (e) {
            console.error(e);
            return;
        }
        this.baseUrl = baseUrl;
    }

    #createLink(model, seed, w, h){
        let result = this.baseUrl;
        if (!this.models.includes(model)) {
            console.error(`No such model - ${model}`);
            return null;
        }
        result += `/${model}?`;
        if (seed)
            result += `seed=${seed}&`;
        if (w)
            result += `w=${w}&`;
        if (h)
            result += `h=${h}&`;
        return result
    }

    /**
     * Returns link with provided:
     * @constructor
     * @param model {"picsum" | "hashmap"} - service to use
     * @param [seed="Unix_nano"] {string} - seed to generate
     * @param [width] {number} - width in pixels
     * @param [height] {number} - height in pixels
     * @returns {string | null} - link to image or null with console.error() called
     */
    getLink(model, seed, width, height) {
        return this.#createLink(model, seed, width, height);
    }
}

export default HashMapApi;
