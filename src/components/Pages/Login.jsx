import "./Login.scss";

const Login = () => {
    return (
        <>

            <div className="form-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="login form ">
                                <div class="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1 className="heading">Login</h1>
                                    </div>
                                </div>
                                <form action="" method="post" name="login">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center small-font">By continuing, I agree to the <a className="link" href="#">Terms of Use</a> & <a className="link" href="#">Privacy Plicy</a></p>
                                    </div>
                                    <div className="col-md-12 text-center ">
                                        <button type="submit" className="login-btn">Login</button>
                                    </div>

                                    <div class="form-group">
                                        <p class="text-center  small-font mt-2">Don't have account? <a className="link" href="#" id="signup">Sign up here</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Login