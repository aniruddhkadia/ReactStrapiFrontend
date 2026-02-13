import "./Success.scss";

const success = () => {
    return (
        <>
            <div className="grid">
                <div className="card">
                    <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width={75} height={75} fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        <h1>Thank You !</h1>
                        <p className="mb-3">We've send the link to your inbox.</p>
                        {/* <button>Back Home</button> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default success