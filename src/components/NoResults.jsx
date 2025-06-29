import './NoResults.css'

export default function NoResult() {
    return (
        <div className='no-results-card'>
            <h2>No results found!</h2>
            <p>
                We couldn’t find any GitHub users matching your search.
                Please double-check the username and try again.
            </p>
        </div>
    );
}
