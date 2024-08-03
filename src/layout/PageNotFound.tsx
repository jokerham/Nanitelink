export default function PageNotFound() {
    return (
        <div className="NL_notfound">
            <div className="NL_notfound_container">
                <div className="NL_notfound_404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, Page not found!</h2>
                <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
                </p>
                <a href="/">Back To Homepage</a>
            </div>
        </div>
    );
}