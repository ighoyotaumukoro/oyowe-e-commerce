import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp, user,  login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.name, data.email, data.password);
    } else {
      result = login(data.name, data.email, data.password);
    }
   if (result.success === false){
    setError(result.error);
   }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } 
  }, [user, navigate]);
  return (
    <div className="pt-5 page">
      <div className="container">
        <div className="card auth-card  border-0 shadow m-auto  ">
          <div className="card-body align-content-center justify-content-center">
            <h1 className="page-title mt-0 mx-auto mb-4">
              {mode === "signup" ? "Sign Up" : "Login"}
            </h1>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              {error && (
                <div className="p-2 " style={{ backgroundColor: "#fcb7b7" }}>
                  {error}
                </div>
              )}
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Full-name is required" })}
                  className="form-input"
                />
                {errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className="form-input"
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must  be less than 12 characters",
                    },
                  })}
                  className="form-input"
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>

              <button
                className="btn btn-primary btn-lg border-0 mt-3"
                type="submit"
                style={{ fontSize: "16px" }}
              >
                {mode === "signup" ? "Sign Up" : "Login"}
              </button>
            </form>
            <div className="auth-switch">
              {mode === "signup" ? (
                <p className="mt-3 text-center fw-semibold  text-muted">
                  Already have an account?{" "}
                  <span
                    onClick={() => setMode("login")}
                    className="text-primary auth-link text-decoration-underline"
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p className="mt-3 text-center fw-semibold  text-muted">
                  Don't have an account?{" "}
                  <span
                    onClick={() => setMode("signup")}
                    className="text-primary auth-link text-decoration-underline"
                  >
                    Sign up
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
