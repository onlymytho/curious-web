import _base from './api';

function Ref (
    paperId,
    size=10,
    year='',
    fos='',
    journal='',
    page=0
    ) {
        if (paperId) {
            return requestAPI('papers/' + paperId + '/references', {
                size: '&size=' + size,
                else: '&sort=RELEVANCE&filter=year%3D:,fos%3D,journal%3D&page=0'
            })
        } else {
            alert('Insert paperId!');
            return;
        }
}

export default Ref