import './UserLogin.scss';

const UserLogin = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center my-3" style={{ color: '#fff' }}>
        Trello lite
      </h1>

      <div className="d-flex flex-column justify-content-center">
        <div className="container px-4 d-flex flex-column justify-content-start login-box mx-auto bg-blur">
          <h3 className="my-4 text-center">Login with Trello lite</h3>
          <form>
            <div className="d-flex flex-column mb-2">
              <label htmlFor="username" className="form-label me-auto">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="name@example.com"
              />
            </div>
            <div className="d-flex flex-column mb-2">
              <label htmlFor="password" className="form-label me-auto">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="abc@1234"
              />
            </div>
            <div className="d-grid gap-2 mt-4 mb-3">
              <button className="btn btn-green">Continue</button>
            </div>
          </form>

          <h5 className="text-center">OR</h5>
        </div>
      </div>
    </div>
  );
};

export { UserLogin };
