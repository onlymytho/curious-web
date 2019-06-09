const API_BASE = 'https://api.scinapse.io/'
const requestAPI = async (api_path, params={}) => {
    const API_PATH = API_BASE + api_path + '?'
    const REQUEST_URL = params.length != {} ? API_PATH + Object.keys(params).map(key => key + '=' + params[key]).join('&') : API_PATH;
    try {
        const response = await fetch(`${REQUEST_URL}`)
        return await response.json();
      } catch(e){
        throw Error(e);
      }
}

function Search(
    query,
    size=10,
    year='',
    fos='',
    journal='',
    page=0) {
        if (query) {
            return requestAPI('search', {
                q: query,
                size: size,
                else: '&sort=RELEVANCE&filter=year%3D:,fos%3D,journal%3D&page=0'
            })
        } else {
            // alert("Insert query!");
            console.log("Insert query!");
            return;
        }
}
function getRefs (
    paperId,
    size=10,
    year='',
    fos='',
    journal='',
    page=0
    ) {
        if (paperId) {
            return requestAPI('papers/' + paperId + '/references', {
                size: size,
                else: '&sort=RELEVANCE&filter=year%3D:,fos%3D,journal%3D&page=0'
            })
        } else {
            alert('Insert paperId!');
            return;
        }
}
export { Search, getRefs };