import { API_BASE, requestAPI } from './api/_base';

function Search(
    query,
    size=10,
    year='',
    fos='',
    journal='',
    page=0) {
        if (query) {
            return requestAPI('search', {
                query: 'q=' + query,
                size: '&size=' + size,
                else: '&sort=RELEVANCE&filter=year%3D:,fos%3D,journal%3D&page=0'
            })
        } else {
            alert("Insert query!");
            return;
        }
}

export default Search